# Étape 1 : Build
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Étape 2 : Image finale
FROM node:22-alpine

WORKDIR /app

# Installer serve uniquement
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 5173
CMD ["serve", "-s", "dist"]
