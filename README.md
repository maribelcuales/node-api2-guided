# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

Additional Instructions: 

## Today
- REST (Representation State Transfer)
- Sub-Routes/ Sub-Resources 
- Express Routers 
- Query String Parameters 

## REST 

Guidelines, not a standard. 

### Levels

- 0 - No REST.
- 1 - Resources.
- 2 - HTTP Methods/ Verbs.
- 3 - Hypermedia (links).

| Action                  | Endpoint      | REST Style URI            |
| :---------------------- | :------------ | :------------------------ |
| See List of Hubs        | /hubslist     | GET /hubs                 |
| See Details for a Hub   | /hubdetails   | GET /hubs/:id             |
| Add a Hub               | /newhub       | POST /hubs                |
| Update a Hub            | /modifyhub    | PUT/PATCH /hubs/:id       |
| Remove a Hub            | /erasehub     | DELETE /hubs/:id          |
| See List of Tracks      |               | GET /tracks               |
| See Units for a Track   |               | GET /tracks/:id/units     |
| See Sprints for a Unit  |               | GET /units/:id/sprints    |
| See Modules for a Sprint|               | GET /sprints/:id/modules  |
