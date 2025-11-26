
 function findLargest(a, b, c){
	 if(a>=b && a>=c){
		 return a;
	 }
	 else if(b>=a && b>=c){
		 return b;
	 }
	 else{ 
		 return c; 
	 }
 }
const a = parseInt(prompt("Enter First Number."));
const b = parseInt(prompt("Enter Second Number."));
const c = parseInt(prompt("Enter Third Number."));
alert("The largest number is: " + findLargest(a, b, c));
