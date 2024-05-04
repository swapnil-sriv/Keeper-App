# Notedown App

A simple note taking app built using React Native.


## Table of contents

- Requirements
- Installation
- Usage


## Requirements

1. Node
2. npm or yarn
3. Postgresql/pdAdmin


## Installation

* Change the directory to the project folder.
    * Install all dependencies
    ```sh 
    npm i
    ```


## Usage

- Create a new database in pgAdmin.

* Create a new table -
     CREATE TABLE note (
        id serial PRIMARY KEY, 
        title VARCHAR(1024),  
        ncontent VARCHAR(32768)
    )

* Initialize the server -
    ```sh 
    npm server.js
    ```

- Navigate to client folder

* Start the App -
    ```sh 
    npm run dev
    ```



