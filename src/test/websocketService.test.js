// src/services/websocketService.test.js
import WebSocketService from '../services/websocketService';

describe('WebSocketService', () => {
  let service;
  let mockWebSocket;

  beforeEach(() => {
    service = new WebSocketService('ws://localhost:8080');

    mockWebSocket = {
      send: jest.fn(),
      close: jest.fn(),
      onopen: null,
      onmessage: null,
      onclose: null,
      onerror: null,
    };

    global.WebSocket = jest.fn(() => mockWebSocket);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates WebSocket connection', () => {
    service.connect();
    expect(global.WebSocket).toHaveBeenCalledWith('ws://localhost:8080');
  });

  it('sends messages through WebSocket', () => {
    service.connect();
    const message = { type: 'test', payload: 'hello' };
    service.send(message.type, message.payload);

    expect(mockWebSocket.send).toHaveBeenCalledWith(
      JSON.stringify(message)
    );
  });

  it('handles connection errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    service.connect();
    mockWebSocket.onerror(new Error('Connection failed'));

    expect(console.error).toHaveBeenCalledWith('WebSocket error:', expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('closes WebSocket connection', () => {
    service.connect();
    service.disconnect();

    expect(mockWebSocket.close).toHaveBeenCalled();
  });
});