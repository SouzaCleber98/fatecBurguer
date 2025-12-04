# === Stage 1: Build the application ===
FROM node:22.15-alpine3.20 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

# === Stage 2: Serve the application with Nginx ===

FROM nginx:1.25-alpine 
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80