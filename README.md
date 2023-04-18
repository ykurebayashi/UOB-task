# University of Bristol - FE Tech Task

This is a web application built with the Vue.js 3 framework that retrieves and displays information about random generated people.

### Prerequisites

To run this project, you will need to have Node.js 16.0 or above installed on your machine.

### Getting Started

To get started with this project, follow these steps:

Clone this repository to your local machine.

Run `npm install` to install all dependencies.

Run ``npm run dev` to start a local development server.

You should be able to access it at `http://localhost:5173/`.

### Tech Details

The goal with this project was to develop an application that would fetch and display data from an external API that generates random information based on a seed.

To accomplish this, I created a custom view (named HomeView) that includes three separate components, all working together to form a cohesive user interface.

It consists of a search bar, a list of user profiles displayed as cards, and pagination buttons. The component makes use of Vue's reactivity system, with the search bar and pagination buttons triggering API requests and updates to the displayed data. It also features a debounced search function that reduces the number of API requests made when searching for a particular user.

This HomeView takes two parameters:

- Url: A required string that will work as the fetching url.
- Show-search: A required boolean that will work to let us know if we want the searchbar at the top to be displayed.

Inside the HomeView, as previously said, we have three components:

- Searchbar: This is the code that provides the searchbar at the top of the page. It has two props (search and update:search) that are responsible for changing a variable state at the parent component.
- CardSection: This is the card itself, it takes several props as: name, treatment, location, image url, phone and email. This component is responsible only for displaying the data provided to it.
- ButtonComponent: This is the code that displays our two buttons next and previous page. They take a title and @click properties.
