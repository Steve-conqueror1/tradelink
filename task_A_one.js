const openningBrackets = ['{', '(', '['];
const closingBrackets = ['}', ')', ']'];
const checkbracketsMatch = (bracketsString) => {

  const balancedBrackets = [];
  [...bracketsString].forEach((char) => {
    if(openningBrackets.includes(char)){
      balancedBrackets.push(char)
    } else if(closingBrackets.includes(char)){
         const position = closingBrackets.indexOf(char);
        return (balancedBrackets.length > 0)  && 
        (openningBrackets[position]===balancedBrackets[balancedBrackets.length - 1]) ? balancedBrackets.pop() : 'Incorrect';
         
    }
  }); 

 return balancedBrackets.length === 0 ? "Correct" : "Incorrect";
}

console.log(checkbracketsMatch("([abc])"));