# Utiliza la imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Compila tu aplicación para producción
RUN npm run build

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 8080

# Comando para iniciar tu aplicación
CMD [ "npm", "run", "serve" ]
