# Bag Builder - A Disc Golf Companion App

Conquer changing conditions, new courses, and an expanding disc collection with confidence by using Bag Builder to virtually construct your disc golf bag prior to a round.  This web app will let you add discs to your collection, see vital information such as the name and flight ratings of each disc, and select which discs yo plan on carrying with you on an upcoming round.  The images currently on the db.json file are from [Infinite Discs](https://infinitediscs.com/), so consider checking them out next time you need to buy some more plastic.

## Setup

In order to use this app on your own machine, first make sure that you have [json-server](https://www.npmjs.com/package/json-server) installed. From there fork and clone this repository and get the database running with the following commands in the terminal from the same folder as the repo:

```bash
json-server --watch results.json
```
Keep this local server running, then use another terminal window in the same directory to run:

```bash
npm start
```

## Usage

![](https://github.com/apatari/phase-2-Project-disc-bag/blob/main/BagGif.gif)

Add discs using the 'Add New Discs' tab.  The submit button and a preview of your discs will appear once all fields are filled.  From there, you can add discs to the bag from the 'Select Discs' tab and see the current state of the bag with the 'View Bag' tab.

A browser window should open up with the app running.  

## Acknowledgment

Thanks to the folks who created and maintain the Create React App and Bootstrap React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and uses [Bootstrap React](https://react-bootstrap.netlify.app/) for styling.
