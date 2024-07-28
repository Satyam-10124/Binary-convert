
// let number = parseInt(prompt("Type a number you want to convert in binary form")) ;
// const binaryString = convertToBinary(number);
// alert(`The binary representation of ${number} is ${binaryString}`);




// function convertToBinary(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//         throw new Error('Input must be a valid number');
//     }
    
//     return number.toString(2);
// }

// Example usage:



//Key Learnings
//Prompt me string aata h 
// kisi bhi str ko number mein krne ke liye
// parseInt(prompt("Type a Number:"))
//This will return my prompt input as a number


document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput, 10);

    try {
        if (isNaN(number) || number < 0) {
            throw new Error('Please enter a non-negative number.');
        }

        const binaryString = convertToBinary(number);
        document.getElementById('result').textContent = `The binary representation of ${number} is ${binaryString}`;
    } catch (error) {
        document.getElementById('result').textContent = error.message;
    }
});

function convertToBinary(number) {
    return number.toString(2);
}
