# Inconsistent 500 Errors in Asynchronous Express.js Route

This repository demonstrates a bug where an Express.js server inconsistently throws 500 Internal Server Errors. The issue stems from improper error handling within an asynchronous callback function.

## Bug Description

The server simulates an asynchronous operation.  A random chance determines whether a 500 error is thrown or a successful 'Hello World!' response is sent.  This inconsistent behavior is problematic in production.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` to start the server.
4. Send multiple requests to `http://localhost:3000/`.  Observe the inconsistent responses.

## Solution

The solution involves proper error handling within the asynchronous callback using try...catch blocks or promise error handling to catch and gracefully manage any exceptions that occur.