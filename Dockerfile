FROM node:14.8.0-alpine3.12
WORKDIR /app
COPY package.json package-lock.json tsconfig.json jest.config.js ./
RUN npm install
COPY src ./src
RUN npm run build && npm test
CMD ["node", "./src/server.js"]
