# Use an official Node.js runtime as a parent image
FROM node:14-alphine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install nodemon and ts-node globally
RUN npm install -g ts-node nodemon

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
# CMD ["nodemon", "--exec", "ts-node", "src/index.ts"]
CMD ["nodemon", "--exec", "ts-node", "index.ts"]
