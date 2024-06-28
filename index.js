const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
    },
];

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
    let shapeElement;
    
    switch (shape) {
        case 'circle':
            shapeElement = new Circle(shapeColor).render();
            break;
        case 'triangle':
            shapeElement = new Triangle(shapeColor).render();
            break;
        case 'square':
            shapeElement = new Square(shapeColor).render();
            break;
    }

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="125" alignment-baseline="middle" text-anchor="middle" font-size="40" fill="${textColor}">
            ${text}
        </text>
    </svg>
    `;
};

const saveSVGToFile = (filename, content) => {
    fs.writeFileSync(filename, content);
    console.log('Generated logo.svg');
};

inquirer.prompt(questions).then(answers => {
    const svgContent = generateSVG(answers);
    saveSVGToFile('examples/logo.svg', svgContent);
});