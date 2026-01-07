FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install --production

# Copiar el código fuente
COPY . .

# Cloud Run inyecta la variable PORT, pero exponemos el 8080 por defecto
ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start" ]