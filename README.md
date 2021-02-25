[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Mission 4</h3>
  <h4 align="center">Advance Software Developer</h4>

  <p align="center">
    React / Material UI / CI/CD
    <br />
    <a href="https://github.com/danielminhnguyen/asd-mission4"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://danielminhnguyen.github.io/mission4/">View Demo</a>
    ·
    <a href="https://github.com/danielminhnguyen/asd-mission4/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielminhnguyen/asd-mission4/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]()

### Built With

- [react](https://reactnative.dev)
- [react-router-dom]()
- [material ui]()
- [travis-ci]

<!-- GETTING STARTED -->

## Getting Started

This website is built for Turner Insurance, based upon the design from UX Design's prototype team. 

This project aim to demonstrate functionality of the real product. The website is then deployed to github-pages through an automation process (CI/CD) using just one command of all changes has been commit 
  ```
  git push
  ```
 The code is then built and push to github-pages branches and can be view on your personal github.io page on the cloud.


### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. install packages from package.json. Go to project folder root
   ```
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. Go to project folder root and install packages from package.json.
   ```
   npm start
   ```
2. Navigate to [http://localhost:3000](http://localhost:3000) to see the protoype

  Automate delopy CI/CD
1. Create an account on Travis-CI
2. Create a repo on github, 
3. Create an API key from Github Settings -> Developers, and add to Travis-CI enviroment table, variable name is GITHUB_TOKENS, value is the API key
4. Edit .travis.yml, accordding to your need. In my case, I have put a 
  ```
npm run test
   ```
   This will try to test the project before the built process to identify any issues with code.

6. Go to the root folder
   ```
      git init
      git remote add origin <Insert Your Repo Here>
   ```
5. Commit and push the repo 
   ```
      git add .
      git commit -m 'your commit message'
      git push
   ```
6. The website should be able able to view online at yourgithub.io/subfolder

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Daniel Nguyen - [Email](minhnguyen68@hotmail.com)

Project Link: [https://github.com/danielminhnguyen/asd-mission3](https://github.com/danielminhnguyen/asd-mission3)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/danielminhnguyen
[product-screenshot]: images/screenshot.png
