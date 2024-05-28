# Countries App Project

Welcome to the Countries App Project! This is a React application built using Vite. The application allows users to view details of various countries, including information such as population, region, and capital. Users can search for countries by name and filter them by region. The project demonstrates a range of front-end development skills and best practices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure]()

## Features

- Display a list of countries with relevant details
- Search for countries by name
- Filter countries by region
- Toggle between light and dark themes
- View detailed information about a specific country, including neighboring countries

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Axios (for API calls)
- Context API (for theme management)
- React lazy load image component

## Setup and Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mutugi310/Countries_app.git 
   cd Countries_app
2. **Install :**
    $ npm install
3. **Start the development server**
    $ npm run dev

## Usage
    Homepage: Displays a list of countries with an option to search and filter.
    Search: Use the search bar to find countries by name.
    Filter: Use the dropdown menu to filter countries by region.
    Country Details: Click on a country's flag to view detailed information, including population, region, capital, and neighboring countries.
    Theme Toggle: Switch between light and dark themes using the theme toggle button.
    Deployment
    The project can be deployed to GitHub Pages or Netlify. In this case, the project is deployed to Netlify

## Deployment 
The project can be deployed to GitHub Pages or Netlify. I'll demonstrate how to deploy manualy on Netlify 

**Netlify Manual Deployment**
1. ***Build the project:***
    $ npm run build
2. ***Deploy to Netlify:***
    - Locate your disk derectory on your project
    - Login to your Netlify account
    - Navigate to sites
    - Click Add new site
    - Click Deploy manualy
    - Drag and drop your disk folder

## Deployment 
    Countries_app/
    ├── public/
    │   ├── favicon.ico
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    |   |   ├── components/
    |   |   ├── MaincontentComponents/
    |   |   |   ├── Country.jsx
    |   |   |   ├── SearchFilter.jsx
    |   |   |   ├── SearchFilterCountries.jsx
    │   │   ├── CountryDitails.jsx
    │   │   ├── Header.jsx
    │   │   ├── MainContent.jsx
    |   |   ├── ThemeContent.jsx
    │   │   └── useFetch.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
