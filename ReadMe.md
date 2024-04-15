# CLI Todo Tool

it is a command-line tool built with Node.js that fetches TODO items from a remote API and allows users to perform various operations.

## Features

- Fetch TODO items from a remote API.
- Filter even-numbered TODO items.
- Display titles and completion status of filtered TODO items.

## Usage

Before using do `npm install`
To fetch and display TODO items, run the following command:

        npm start:todos

Optional arguments:

--evenLimit, -el: Limit the number of TODO items to fetch (default: 40). and maximum supported number is 100

Example with custom limit given below:

        node src/index.js todos --evenLimit 5

## Docker

Build docker image from below command

            docker build -t cli-todo-tool .

Run the image after build using below command

        docker run -it --rm cli-todo-tool

MIT licencse
