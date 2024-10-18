function firstWord(s) {
  // your code here
	 const firstWord = s.trim().split(/\s+/)[0];
    return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s)); 
