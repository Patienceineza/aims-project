FROM node:18-alpine AS builder

ENV NODE_ENV production
ENV REACT_APP_SERVER_URL https://stock-management-be.vercel.app
ENV REACT_APP_CI =false

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
# COPY package-lock.json . # Ensure this file is present

RUN npm install --production

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine AS production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
