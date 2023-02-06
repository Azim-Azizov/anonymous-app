FROM node:18-alpine

ENV ENVIRONMENT=production

WORKDIR /usr/src/app

COPY package* ./
RUN npm ci
COPY src/ ./src
COPY tsconfig.json .
RUN npm run build

# EXPOSE is just for visuals, it actually doesn't matter if you use it or not
EXPOSE 3002

CMD ["node", "dist/init.js"]
