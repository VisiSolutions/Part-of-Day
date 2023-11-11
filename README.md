<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/VisiSolutions/Part-of-Day">
    <img src="https://visimedia.co.uk/images/Logo-Horizontal-Transparent-p-500.png" alt="Logo" height="80">
  </a>

<h3 align="center">Part of Day</h3>

  <p align="center">
    A simple TS compatible library that returns either morning, afternoon or evening dependent on a given EPOCH time. 
    <br />
    <a href="https://github.com/VisiSolutions/Part-of-Day"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/VisiSolutions/Part-of-Day">View Demo</a>
    ·
    <a href="https://github.com/VisiSolutions/Part-of-Day/issues">Report Bug</a>
    ·
    <a href="https://github.com/VisiSolutions/Part-of-Day/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


<!-- [![Product Name Screen Shot][product-screenshot]](https://visimedia.co.uk) -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



### Built With

* [![Node][Node.js]][Node-url]
* [![TypeScript][TypeScript]][TS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Part of Day is a dependency free typescript compatible module

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

3. Install NPM package
   ```sh
   npm install @visimedia/part-of-day
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Part of Day comes with 3 functions. get, getByHour and getNow. All functions return either MORNING, AFTERNOON or EVENING dependent on the time of day.   

get consumes epoch time (in milliseconds) 
```js
get(epochTime)
```

getByHour consumes the hour of the day
```js
getByHour(14)
```

getNow consumes no parameters and returns the current time of day
```js
getNow()
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] More detailed configuration
- [ ] Capitalisation control

See the [open issues](https://github.com/VisiSolutions/Part-of-Day/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

VisiMedia - [@VisiMedia](https://twitter.com/VisiMedia) - contact@visimedia.co.uk  
Ben Lewis - [@BenjiSoft](https://twitter.com/benjisoft) - ben.lewis@visimedia.co.uk

Project Link: [https://github.com/VisiSolutions/Part-of-Day](https://github.com/VisiSolutions/Part-of-Day)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/VisiSolutions/Part-of-Day.svg?style=for-the-badge
[contributors-url]: https://github.com/VisiSolutions/Part-of-Day/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/VisiSolutions/Part-of-Day.svg?style=for-the-badge
[forks-url]: https://github.com/VisiSolutions/Part-of-Day/network/members
[stars-shield]: https://img.shields.io/github/stars/VisiSolutions/Part-of-Day.svg?style=for-the-badge
[stars-url]: https://github.com/VisiSolutions/Part-of-Day/stargazers
[issues-shield]: https://img.shields.io/github/issues/VisiSolutions/Part-of-Day.svg?style=for-the-badge
[issues-url]: https://github.com/VisiSolutions/Part-of-Day/issues
[license-shield]: https://img.shields.io/github/license/VisiSolutions/Part-of-Day.svg?style=for-the-badge
[license-url]: https://github.com/VisiSolutions/Part-of-Day/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/VisiMedia
[product-screenshot]: images/screenshot.png
[Node.JS]: https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org 
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/