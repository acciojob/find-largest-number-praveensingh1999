function findLargest(a, b, c) {
  //your code here
}
 function findLargest(num1, num2, num3){
	 if(num1>=num2 && num1>=num3){
		 return num1;
	 }
	 else if(num2>=num1 && num2>=num3){
		 return num2;
	 }
	 else{
		 return num3;
	 }
 }
const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
