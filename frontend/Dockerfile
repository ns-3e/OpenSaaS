# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Create public directory and copy public files
COPY public/ ./public/

# Copy remaining project files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"] 