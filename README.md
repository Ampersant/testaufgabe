# Test Assignment: Logoips

## About the Project
This project is a test assignment created to demonstrate my skills in front-end development and responsive single-page website design. It features a modern, interactive landing page built using HTML5, CSS3, JavaScript, Bootstrap, Swiper, and jQuery.

## Key Features
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Interactive Navigation Menu:** Dropdown menus for the "Blog" and "Products" sections offer smooth and intuitive navigation.
- **Hero Section:** An engaging introduction with a headline, description, and a "Read more" button.
- **Product Cards:** Displays products with images, descriptions, and interactive buttons.
- **Blog Slider:** Implements an interactive slider using the Swiper library to showcase blog content.
- **Mini Blog & Highlights Section:** Additional content blocks designed to highlight key messages.
- **Footer:** Contains contact information, corporate links, and legal notices.

## Project Structure

```
project/
├── assets/
│   ├── icons/
│   │   ├── highlights/
│   │   │   ├── icon-a.svg
│   │   │   ├── icon-b.svg
│   │   │   └── icon-c.svg
│   │   ├── medias/
│   │   │   └── youtube.png
│   │   └── nav/
│   │       ├── arrow-right.png
│   │       ├── arrow-right-white.png
│   │       ├── arrow-sm-right.png
│   │       └── arrow-sm-up.png
│   ├── imgs/
│   │   ├── bg-img.png
│   │   ├── card-img.jpg
│   │   ├── main-bg.jpeg
│   │   └── product.png
│   ├── logo-bg.svg
│   └── logo-sm.svg
├── css/
│   └── main.css
├── js/
│   ├── carousel.js
│   └── nav.js
└── index.html
```



## Technologies Used
- **HTML5:** Semantic markup for structure.
- **CSS3 & Bootstrap 5:** For styling and creating a responsive layout.
- **JavaScript & jQuery:** To implement dynamic interactions.
- **Swiper:** For the functional blog slider.
- **Google Fonts (Inter) & Remix Icon:** For typography and iconography.

## Installation and Running
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ampersant/testaufgabe.git
   ```
2. Navigate to the project directory
   ```
   cd project
   ```
3. Run the project
   * Open the __index.html__ file in your browser
   * Alternatively, use a local server(e.g.,  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code)
  ## Possible improvements
  1. Add ```loading="lazy"``` to images to improve workload
  2. Using SASS/SCSS
  3. Divide the styles into separate files by functional blocks. For example, create files:
      * _variables.css_ - for CSS variables and global settings.
      * _base.css_ - for base styles.
      * _header.css_, _nav.css, _dropdown.css, _hero.css, _footer.css - for each component or section of the site.
    
  ## References 
  The header implementation was inspired by the [bedimcode/responsive-navigation-bar](https://github.com/bedimcode/responsive-navigation-bar) repository.
    
