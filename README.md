<a id='readme-top'></a>

<br />
<div align="center">
  <a href="https://github.com/Revenge-of-the-SithQL/atelier"></a>
  <h3 align="center">
    WebCountry
  </h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

## About
<p>
  WebCountry is a desktop/mobile friendly app utilizing React and Express that enables users to track product info from <a target='_blank' href='https://www.backcountry.com/'>Backcountry.com</a>. Using the <a target='_blank' href='https://pptr.dev/'>Puppeteer</a> library, the application scrapes the page for up-to-date information every 12 hours as a background service. The user may visualize the changes over time in a line graph if enough data is collected.
</p>

### Built With
![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](	https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## Getting Started

<p>
    Instructions to setup WebCountry on your local machine below.
</p>

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g 
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/stevkim/scraper/
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter your ENV varaibles into a `.env` file
   ```sh
    DB = (your database name)
    USERNAME = (your database user)
    PASSWORD = (your database password)
    HOST = (your database host)
   ```
1. Run build command.
   ```sh
   npm run build
   ```
1. Run in production environment
   ```sh
   npm run start
   ```

## Usage

WebCountry is run on the designated port and opens a webpage as soon as the npm start command is utilized. It can also be accessed utilizing localhost:3000 directly in the browser.


<p align="right"><a href="#readme-top">back to top</a></p>

<!-- ROADMAP -->

## Roadmap

- [x] Strategize each person's roles and widgets
- [x] Setup the environment
- [x] Create respective widgets
- [x] Refactor and optimize code 
- [x] Deploy on AWS


<!-- CONTACT -->

## Contact

<h3 align='left'> Steven Kim <a href="https://www.linkedin.com/in/stevkim/">Linkedin</a> | <a href="https://github.com/stevkim">GitHub</a></h3>



<p align="right"><a href="#readme-top">back to top</a></p>
