# Angular Application

## 📌 Project Description
This is an Angular application designed to give the musuem visitor the possiblity to explore the visualization of alternative world stories of Olpe. The thematic worlds shown in the application can be edited in the corresponding employee webpage. It provides features such as showing differetn thematic worlds and generating new alternative world stories with the help of AI.

## 📖 Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## ⚙️ Installation
1. Ensure that Node.js is installed
2. Clone the repository:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/VisitorFE.git
   cd VisitorFE
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Make sure you have Angular CLI installed:
   ```sh
   npm install -g @angular/cli
   ```

## 🚀 Running the Application
Start the development server:
```sh
ng serve
```
By default, the application runs on `http://localhost:4201/`.

## 📂 Project Structure
```
src/
  app/                  # Main Angular application files
    error/              # Catches errors in the URL
    home/               # Starting page
    progress/           # Progress display for generating new results
    prompting/          # Editig the current map and adding a prompt fot the AI
    reset/              # Button to reset the application for the next user
    services/           # Services for the application
    thematic-worlds/    # Overview of the thematic worlds shown in the application
    top-bar/            # Top-Bar with general information
  assets/               # Static assets (images, fonts, etc.)
angular.json            # Angular project configuration
package.json            # Dependencies and scripts
README.md               # Documentation
```

## ...

---

Happy Coding! 🚀
