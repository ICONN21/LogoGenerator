# Logo Generator

## Description

The Logo Generator is a command-line application that allows users to generate simple SVG logos based on user input. Users can specify the text, text color, shape, and shape color for the logo. The generated logo is saved as an SVG file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/logo-generator.git
    cd logo-generator
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Run the application**:
    ```sh
    npm start
    ```

2. **Follow the prompts**:
    - Enter the text for the logo (up to 3 characters).
    - Enter the text color (keyword or hexadecimal).
    - Choose a shape for the logo (circle, triangle, or square).
    - Enter the shape color (keyword or hexadecimal).

3. **Output**:
    - The application will generate a logo.svg file in the `examples` directory.
    - A message `Generated logo.svg` will be printed in the command line.

## Video link 
[Click here to view the file](https://drive.google.com/file/d/1y6ODy-9IYxLhCC-6Sc_4U1BbUk5OaVCT/view)


### Example Interaction

```sh
npm start

# Example prompts:
# Enter the text for the logo (up to 3 characters): ABC
# Enter the text color (keyword or hexadecimal): #ff0000
# Choose a shape for the logo: circle
# Enter the shape color (keyword or hexadecimal): #00ff00
# Generated logo.svg

