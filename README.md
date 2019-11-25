# Buffet Review
Let's practice our React skills by building an applicaion that mimics the behavior of an all you can eat buffet.

## Goals
- Get a better sense of our React strengths and areas of improvement
- Increase our React coding confidence
- Feel prepared for the Code Challenge tomorrow

## Topics We'll Cover
- Creating and updating state
- Passing props around
- Functional vs. class components
- Code structure and efficiency: are we managing state in the right places and using the right types of components
- Rendering: Are we able to meet the MVP and see our food items in the right places

## Quiz Question
Where in the component lifecycle do we normally, though not always, make fetch requests?

## MVP User Stories
A user can: 

* See a selection of food available.
* Select a food and add it to their plate. (There is no limit to the quantity of each food. YUM!!)
* Eat food from the plate, removing it from the plate.

## Bonus User Story aka Stretch Goal
A user can:

* Calculate the calories of their meal.

## Food Data
We are already importing food data from a local file into App.js. Its structure is like so:
```javascript
food: [
  {
    name: "pizza",
    calories: 500,
    image: "https://food.com/image.jpg"
  },
  {
    name: "burger",
    calories: 700,
    image: "https://food.com/image2.jpg"
  },
```

## Current App Structure
- App
  - Buffet
    - Not yet displaying Food
  - Plate
    - Not yet displaying Food

## Food Component
This component is presentational and displays information about food. Needs to display:
- Food Name
- Image

## Things to Think About
- Where should state reside? What should it track?
- What should update state?
- Do I need to make new components?
- Do I need to add functions?
- Which events do I need to use?
- Should this be a functional or class component?
- Which bits of state do I need to pass around? 
- Do I need to pass any functions around as props?

[Demo video of fully working app with bonus feature](https://youtu.be/QEY9508Kiks)
