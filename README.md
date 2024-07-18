# Simple Calculator using HTML, CSS, and JavaScript

This is a simple calculator implemented using HTML, CSS, and JavaScript. Below is the detailed explanation of the code with comments to help understand each part.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Clone the repository or download the files.

    SSH
    ```bash
    git clone git@github.com:Shinzoku/Calculator.git
    ```

    HTTPS
    ```bash
    git clone https://github.com/Shinzoku/Calculator.git
    ```
2. Open `index.html` in a web browser.

## File Structure

```plaintext
Calculator/
├── index.html
├── styles.css
├── script.js
├── LICENCE.txt
└── README.md
```

- `index.html`: Contains the HTML structure.
- `styles.css`: Contains the CSS styles for the calculator interface.
- `script.js`: Contains the JavaScript logic.
- `LICENCE.txt`: Contains the chosen license.
- `README`: Contains the informations et explications project.

## Additional Explanations

+ **HTML** : The HTML file structures the calculator with a display screen (calculator-screen) and buttons for digits, operators, and special actions (AC and =).
+ **CSS** : The CSS file styles the calculator to be visually appealing and well-organized.
+ **JavaScript** :
    + `calculator` object : Keeps track of the calculator's values and state.
    + `performCalculation` object : Defines the calculations for each operator.
    + `inputDigit` function : Handles digit input.
    + `inputDecimal` function : Handles decimal input.
    + `handleOperator` function : Handles operator input.
    + `resetCalculator` function : Resets the calculator.
    + `updateDisplay` function : Updates the display of the calculator.
    + **Event listener** : Listens for button clicks and calls the appropriate functions.

## Author

- **Nicolas Bernon**

## License

Ce projet est sous [licence MIT](https://choosealicense.com/licenses/mit/). 