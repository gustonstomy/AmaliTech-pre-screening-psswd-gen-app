# React + TypeScript + Vite

# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Usage](#Usage)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project Structure](#Project Structure)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Installation
To run this application locally, follow these steps:

Clone the repository:

git clone https://github.com/gustonstomy/AmaliTech-pre-screening-psswd-gen-app.git

cd password-generator

npm install


npm start


### Usage

Set Password Criteria: Use the provided options to select the criteria for your password, including length and character types (uppercase, lowercase, numbers, symbols).
Generate Password: Click the "Generate" button to create a new password based on the selected criteria.
Copy Password: Click the copy icon to copy the generated password to your clipboard.
Check Password Strength: Observe the strength rating to ensure your password meets your security requirements.

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links
- Solution URL:https://gustonstomy.github.io/AmaliTech-pre-screening-psswd-gen-app/

- Live Site URL: https://gustonstomy.github.io/AmaliTech-pre-screening-psswd-gen-app/


### Built with

Technologies Used
React
TypeScript
CSS (with custom properties)
react-icons (for icons)
- [React](https://reactjs.org/) - JS library

### Project Structure

password-generator/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── PasswordDisplay.tsx
│   │   ├── PasswordLength.tsx
│   │   ├── IncludeUppercase.tsx
│   │   ├── IncludeLowercase.tsx
│   │   ├── IncludeNumbers.tsx
│   │   ├── IncludeSymbols.tsx
│   │   ├── Strength.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── Button.css
│   │   └── ...
│   ├── utils/
│   │   ├── generatePassword.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── package.json
├── tsconfig.json
├── README.md
└── ...


## Author

- Website - [Guston Azamo]https://gustonstomy.github.io/AmaliTech-pre-screening-psswd-gen-app/
- Frontend Mentor - [@gustonstomy](https://www.frontendmentor.io/profile/Stomy1)
- Twitter - [@GustonStomy](https://www.twitter.com/GustonStomy)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments
React
TypeScript
react-icons