/* sophisticated_code.js */

// This code calculates the factorial of a number using a recursive approach

function calculateFactorial(number) {
  if (number < 0) {
    throw new Error("Invalid number. The number must be non-negative.");
  }
  
  if (number === 0 || number === 1) {
    return 1;
  }
  
  return number * calculateFactorial(number - 1);
}

function displayFactorialResult() {
  const input = prompt("Enter a number to calculate its factorial:");
  const number = parseInt(input);
  
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }
  
  try {
    const factorial = calculateFactorial(number);
    console.log(`The factorial of ${number} is: ${factorial}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

function generateFibonacciSequence(length) {
  if (length < 0) {
    throw new Error("Invalid length. The length must be non-negative.");
  }
  
  const sequence = [];
  
  if (length >= 1) {
    sequence.push(0);
  }
  
  if (length >= 2) {
    sequence.push(1);
  }
  
  for (let i = 2; i < length; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  
  return sequence;
}

function displayFibonacciSequence() {
  const input = prompt("Enter the length of the Fibonacci sequence:");
  const length = parseInt(input);
  
  if (isNaN(length)) {
    console.log("Invalid input. Please enter a valid length.");
    return;
  }
  
  try {
    const sequence = generateFibonacciSequence(length);
    console.log(`The Fibonacci sequence of length ${length} is: ${sequence.join(", ")}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

function encryptText(text, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseAlphabet = alphabet.toLowerCase();
  
  let encryptedText = "";
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      const encryptedIndex = (index + shift) % 26;
      encryptedText += alphabet[encryptedIndex];
    } else if (lowercaseAlphabet.includes(char)) {
      const index = lowercaseAlphabet.indexOf(char);
      const encryptedIndex = (index + shift) % 26;
      encryptedText += lowercaseAlphabet[encryptedIndex];
    } else {
      encryptedText += char;
    }
  }
  
  return encryptedText;
}

function displayEncryptedText() {
  const text = prompt("Enter the text to be encrypted:");
  const shiftInput = prompt("Enter the shift for encryption (must be a number):");
  const shift = parseInt(shiftInput);
  
  if (isNaN(shift)) {
    console.log("Invalid input. Please enter a valid shift.");
    return;
  }
  
  const encryptedText = encryptText(text, shift);
  console.log(`The encrypted text is: ${encryptedText}`);
}

// Main program starts here

console.log("Welcome to the sophisticated code!");

while (true) {
  console.log("Please select an option:");
  console.log("1. Calculate factorial");
  console.log("2. Generate Fibonacci sequence");
  console.log("3. Encrypt text");
  console.log("4. Exit");

  const option = parseInt(prompt("Enter your choice (1-4):"));

  if (isNaN(option) || option < 1 || option > 4) {
    console.log("Invalid input. Please enter a valid option.");
    continue;
  }
  
  switch (option) {
    case 1:
      displayFactorialResult();
      break;
    case 2:
      displayFibonacciSequence();
      break;
    case 3:
      displayEncryptedText();
      break;
    case 4:
      console.log("Thank you for using the sophisticated code!");
      break;
  }

  if (option === 4) {
    break;
  }
}
