

var wordEntry = prompt("Please enter one word, any word, here: ");
alert ("You entered this word: " + wordEntry + "."+'\n'+
	"There are " + wordEntry.length + " characters in the word."+'\n'+
	"The third character is "+ wordEntry.charAt(2)+"."+'\n'+
	"Lowercase: " + wordEntry.toLowerCase() +'\n'+
	"Uppercase: " + wordEntry.toUpperCase()+ '\n'+
	"Example: I have wanted a "+ wordEntry + " since I was a little girl."+'\n'+
	"Subword: "+ wordEntry.substring(1, 4)
	);