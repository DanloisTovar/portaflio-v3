# ⚠️ Versión antigua de Node.js con vulnerabilidades.⚠️

#FROM node:20-alpine

# ✅ Actualizada a una versión más reciente y segura de Node.js: node:22.21.1-alpine3.21 🥇


# 🎯 Usa la imagen de Node.js con Alpine para un entorno ligero:


FROM node:22.21.1-alpine3.21

# 🎯 Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 🎯 Instala pnpm globalmente
RUN npm install -g pnpm

# 🎯 Copia los archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# 🎯 Instala las dependencias con pnpm
RUN pnpm install --frozen-lockfile

# 🎯 Copia el resto del código fuente
COPY . .

# 🎯 Expone el puerto en el que corre Astro
EXPOSE 3001

# 🎯 Comando por defecto para ejecutar Astro en modo desarrollo
CMD ["pnpm", "dev", "--host","--port", "3001"]
