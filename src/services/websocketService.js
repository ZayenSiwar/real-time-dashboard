// src/services/websocketService.js

class WebSocketService {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.listeners = new Map();
  }

  connect() {
    if (this.socket) return; // Évite les connexions multiples

    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.notifyListeners(data.type, data.payload);
    };

    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      setTimeout(() => this.connect(), 5000);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  subscribe(type, callback) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type).push(callback);
  }

  notifyListeners(type, data) {
    if (this.listeners.has(type)) {
      this.listeners.get(type).forEach((callback) => callback(data));
    }
  }

  send(type, payload) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ type, payload }));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

// ✅ Exporte la classe
export default WebSocketService;