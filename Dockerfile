FROM node:alpine AS builder

EXPOSE 9000

WORKDIR /app

COPY . .

RUN npm install

RUN npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css

CMD ["npm", "run", "start"]

# docker build -t designer .
# docker run -p 9000:9000 designer