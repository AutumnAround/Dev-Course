//____________________________________Love % random input____________________________________//

/* var nameOne = prompt("Enter your name");
var nameTwo = prompt("Enter your possibly partner name");

var random = Math.random();
random = random * 100;
random = Math.floor(random) + 1;

alert("Love compatibility of " + nameOne + " and " + nameTwo + "is " + random + "%."); */



/* BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight." */




//___________________ BMI andvaced calculator ________________________________//
/* function bmiCalculator(weight,height) {
    var weight = weight;
    var height = height;
    var bmi = weight / (height*height);
    bmiCalculator = Math.floor(bmi);
}

bmiCalculator(99,2);
console.log(bmiCalculator);

if (bmiCalculator < 18.5) {
    alert("Your BMI index is " + bmiCalculator + " what mean that  you are underweight.")
}
else if (18.5 <= bmiCalculator <= 24.9) {
    alert("Your BMI index is " + bmiCalculator + " what mean that  you have a normal weight.")
}
else if (bmiCalculator > 24.9) {
    alert("Your BMI index is " + bmiCalculator + " what mean that  so you are overweight.") } */






//__________________________________Leap year challange____________________________________//

/* function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    

/*         if(year % 4 === 0) {
            if (year % 100 === 0) {
                    if (year % 400 === 0) {
                        return "Leap year"
                    } else {
                        return "Not a leap year"
                    }
                } else {
                    return "Leap year"
                }
        } else {
            return "Not a leap year"
        }  */
    
    /**************Don't change the code below****************/    
    
/*     }
 */ 






//__________________________________If item includet in string or not____________________________________//

/* var questList = ["Bla", "BlaBla", "BlaBlaBla", "BlaBlaBlaBla", "BlaBlaBlaBlaBla"];
var questName = prompt("Say your name");
if (questList.includes(questName) === true) {
    alert("Wellcome")
} else {
    alert("Go away")
}

 */










//__________________________________Push into array function FizzBuzz____________________________________//

/* var output = [];
var count = 1;

function fizzBuzz() {
    output.push(count);
    count++;
    
    if (count % 3 === 0 && count % 5 === 0) {output.push("fizzBuzz")}
    else if (count % 3 === 0) {output.push("fizz")}
    else if (count % 5 === 0) {output.push("Buzz")}
    else {output.push(count);}

    console.log(output)
}

 */



//__________________________________Who's Buying Lunch? Code Challenge____________________________________//
/* You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill. */

/* function whosPaying(names) { */
    
    /******Don't change the code above*******/
/*     var ranNum = Math.floor(Math.random()*names.length);
     var tempNames =(names[ranNum]);
        return tempNames +" is going to buy lunch today!"; */
    
    /******Don't change the code below*******/    
/*     }
    console.log (whosPaying(["Angela", "Nicole", "Emre", "Jun", "Kuromi"]) );
     */






//__________________________________While 99 beers challange____________________________________//


/* var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

 */

//__________________________________The Fibonacci Exercise____________________________________//

/* function fibonacciGenerator(n) {
    var fibonacciCode = [];

    if (n === 1) {

        fibonacciCode.push(n - 1);
    } else if (n === 2) {

        fibonacciCode.push(n - 2, n - 1);
    } else {

        fibonacciCode = [0, 1];

        while (fibonacciCode.length < n) {
            fibonacciCode.push(fibonacciCode[fibonacciCode.length - 1] + fibonacciCode[fibonacciCode.length - 2]);
        }
    }
    return fibonacciCode;
} */