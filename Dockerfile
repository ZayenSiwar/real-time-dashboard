# Dockerfile
FROM node:22-alpine

WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Build l'app
RUN npm run build

# Expose le port
EXPOSE 5173

# Installe serve pour servir le build statique
RUN npm install -g serve

# Lance le serveur
CMD ["serve", "-s", "dist"]