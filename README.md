# Skincare-Screener

## Introduction

The Skincare Screener is a search engine developed to save you time ⏳ from endlessly searching through products to find the rare 
"Holy Grail" product that fits all your prerequisites. There isn't a product out there that can fulfill all your wildest dreams 
(unfortunately 😔) but you CAN find one that best fits you much more easily now!

The motivation behind this app was to help allow others to see compatiblility ratings based on the ingredients they contain. 
All it takes is a quick glance to instantly identify which products are best suited for your needs.

## Built with:

* [React](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/en/2.2.x/)
* [Selenium](https://www.selenium.dev/documentation/webdriver/)
* [Styled Components](https://styled-components.com/)

## Features
* Any product can be searched for — results are fetched through the web scraping of [incidecoder.com](https://incidecoder.com/) for it's incredible 
database of skincare ingredients.

* Users can add and select any number of desired ingredients filters that will update a product's
compatibility scores.

## Screenshots

<img width="400" alt="screener searching" src="https://user-images.githubusercontent.com/52483173/206450341-c8468afa-8f24-45c7-b6d1-2be92a1bd81d.png"> <img width="400" height="183" alt="search results" src="https://user-images.githubusercontent.com/52483173/206451129-971c4801-8a43-4947-9f53-5c95ad2748be.png"> 

## Running the app

First, install any packages

```
npm install
```

### Frontend 

To run the frontend, cd into the skincare-screener directory and run the following command

```
npm run start
```

### Backend server

To start up Flask server, cd into the backend directory and run the following command

```
flask run
```
