# Lesson 23

In this lesson we explored docker and reportportal.


## Getting Started

To install the necessary dependencies, run:
```
npm i
```

Set up the `.env` file based on the `.env.example` file.


To run the tests locally, you can use Node.js.
```
npm run test
```

To run tests with Docker:
1. Build the Docker image:
```
docker compose build
```
2. Run the Docker container:
```
docker compose run --rm tests
```
