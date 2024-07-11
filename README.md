# Card Designer Frontend

## Project Description

This project was developed during my internship at Renaissance Bank. It is a micro frontend built with React, Redux, and Tailwind, providing a design constructor for bank cards. The project collects metadata from the constructor and sends it to the backend for further processing.

### Stack
- React
- Redux
- Tailwind CSS

## Installation

To install the project, clone the repository:

```
git clone https://github.com/alwaysmeow/card-designer-frontend
```

## Usage

To run the project, follow these steps:

1. Execute the run.sh file in the terminal:

```
sh ./run.sh
```

  Or manually execute the following commands:

```
npm install
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css
npm start
```

2. Open your browser and navigate to http://localhost:9000 to start using the design constructor.

## API Endpoint
The project expects a request to http://127.0.0.1:8080/register-design to submit the design. The endpoint should respond with:

- `200 OK` if the design is accepted.
- `400 Bad` Request if the design is rejected.
