import inquirer from 'inquirer';

type Answers = {
    firstNumber: number;
    secondNumber: number;
    operator: string;
}

const answers: Answers = await inquirer.prompt([
    {
        name: 'firstNumber',
        message: 'Enter your first number',
        type: 'number',
        
    },
    {
        name: 'secondNumber',
        message: 'Enter your second number',
        type: 'number',
        
    },
    {
        name: 'operator',
        message: 'Select your operator',
        type: 'list',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    }
]);

if (answers.operator === 'Addition') {
    console.log(`Result: ${answers.firstNumber + answers.secondNumber}`);

} else if (answers.operator === 'Subtraction') {
    console.log(`Result: ${answers.firstNumber - answers.secondNumber}`);

} else if (answers.operator === 'Multiplication') {
    console.log(`Result: ${answers.firstNumber * answers.secondNumber}`);

} else if (answers.operator === 'Division') {
     
        console.log(`Result: ${answers.firstNumber / answers.secondNumber}`);

    }
 else {
    console.log('Error: Invalid operator selected');
}
