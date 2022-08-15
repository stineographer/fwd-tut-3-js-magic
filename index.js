/*

This particular tutorial is dedicated to my sister, Michy, who will always be my biggest inspiration in life. I miss her more than words can say.



    As mentioned in the READ ME file,
    to keep things relatively simple
    only numbers will be allowed in our phone book.
    At the same time, remember that
     what you're about to help me prove
    stands for all ordered lists
    regardless of whether they're sorted alphabetically
    or numerically.

    We'll be looking up one particular phone number
    (chosen by the user)
    to see if it's in our sorted list.

    Think about how you'd look up an entry in a sorted list,
    like a phone book or a dictionary.
    You wouldn't start at the first entry
    then proceed to check every single item in that list.
    You'd consider the value you're searching for,
    and start in the spot that approximates that value.
    In other words, you'd find the distance the target value is
    from either the begining or end of the list
    and start with that index.

    -adding one more caveat:
    n > 3
    -what we're proving comes into play
    only when the number of items in your
    ordered table is greater than 3
    (if you've only got 3 items in your list,
    then what the heck just check'em)

    -another arbitrary executive decision as been made:
    there will be 9 list items
    -that's right, only 9 numbers in our mock phone book

    -here's another somewhat arbitrary decision (one that I'm definitely not responsible for!),
    even though our html ordered list defaults to an index that begins with 1
    -you know, like how a great number of people all over the world learn to count
    -just about all list-like data structures in computer science
    start their index at zero
    -and then you think, wait a second how many items are in that list again?
    -it's the kinda thing where you gotta throw up yer hands and say,
    ok fine!
    -this happens a lot in programming

    ANYWAY our handy-dandy JavaScript Array (an object that comes with this language!)
    similar to most
    array-like objects
    comes with an index that starts at zero.

    You might as well get used to it ;)

    */

//-each of these particular phoneBook Array spots contains a fake phone number
//-we're trying to be relatively sparse with the data we allow here
//-in other words, we want to only allow an integer in each spot
// -for now, we're populating each spot individually (relatively manually)

//Because there are now very few phone books still in existence,
//I'm leaving this hard-coded list in JavaScript.
//It's also printed out on the web page itself.

//I want you to actually look at these numbers, come up with different possible 10-digit integers
//then think about where in the list you'd start to LOOK for that value.
const phoneBook = new Array(
  2895555555,
  2896666666,
  2897777777,
  4165555555,
  4166666666,
  4167777777,
  9055555555,
  9056666666,
  9057777777
);
//how values are assigned to specific spots in this JavaScript Array
//[0] = 2895555555
//[1] = 2896666666
//...
//[8] = 9057777777

//Because we start our Array index at 0
// the last index is going to be
//the (length of the Array) - 1
//The JS Array has a property called 'length' that returns the number of elements in your array.
const n = phoneBook.length;
//We're letting 'n' store the total number of items in this array.
//This will be important to keep in mind later on!!

//Look out! We're about to start printing!

//If you'd like to know more about how HTML elements are populated using JavaScript,
//checkout this article by the Mozilla Developer Network:
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#examples
//-below is a function that prints out all the entries in our mock phone book
function printPhoneBook(passedInPhoneBook) {
  //The name of the function is: printPhoneBook, and inside the brackets we pass an arguement that we're calling: passedInPhoneBook

  const logElem = document.querySelector(".log"); //Here, we're looking in our document
  //for an HTML element with a class="log"
  //Technically,
  //we could pass this string describing a class name
  //into our printPhoneBook funciton as an additional argument.. but that's another story for another day!

  let phoneBookIndx = 0; //-when we start printing phoneBook entries, we'll begin at the first one (where index=0)

  //If you want to learn more about WHILE loops, see here:
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  while (phoneBookIndx < passedInPhoneBook.length) {
    //-if you tinker with this one,
    //then you may get to write your very first infinite loop!!

    //The idea is that WHILE our phoneBookIndex is less than the length of the book,
    //we'll add this html(and the variable it contains) to the innerHTML of the "log" element
    logElem.innerHTML += "<li>" + passedInPhoneBook[phoneBookIndx] + "</li>";
    // then increment the index of our array.
    phoneBookIndx++;
  } //end WHILE LOOP
} //END printPhoneBook function

function startLowGoHigh(){}//end function startLowGoHigh

function startHighGoLow(){

}//end function startHighGoLow

//The argument for our sequentialSearch
// is the input_id of the html input element. We're using this to store the value of the user's input.
function sequentialSearch(input_id) {

  let index;

  const oElem = document.getElementById(input_id);
  const outcomeElem = document.querySelector(".outcome");
  outcomeElem.innerHTML = " ";
  const outcomeMssages = [
    " Yer number ain't in the list! Fortunately, the last value we checked was at index:  ",
    "we found it!",
    "Look at us! We're iterating cuz the target is bigger than the value here! indx++ ",
    "winning index =",
  ];

  const base = 10; //IMPORTANT FOR DETERMINING SCALE to calculate STARTING INDEX!!!
  const defaultScale = parseInt(base / n);// if this scale is too big for input, then we'll scale down and re-compute!
  const defaultDifference = base - defaultScale;//informs where we expect to start looking for target value

  const targetValue = parseInt(oElem.value, base); // We're designating base 10.
      if (isNaN(targetValue)) {  //if the input isn't some kind of number then lets start over
      outcomeElem.innerHTML +=
        "That value does not compute!<br/> Try entering a number this time! <br/>";
      return;
  }

  const distance = parseInt(phoneBook[8] - targetValue); //if input is a number, then lets get calculating!
  console.log("distance = " + distance);
  //if distance >= 0, then don't bother with rest
  if (distance <= 0) {
    if (distance == 0) {//non-loop COMPARISON #1! (but it's telling us not to enter the loop!)
      return (outcomeElem.innerHTML += outcomeMssages[1] + " didn't even have to iterate cuz it's the Max value: " + phoneBook[8] + "<br/>"); //winning outcome
    } else {
      return (outcomeElem.innerHTML +=
        "Are you kidding? That number's way too big for this list! <br/>");//input data validation should prevent this!
    }//end inner else
  } //end winner and positive check
  else{//we've got a positive, non-zero distance
    //so we're going to see if our default scale is sufficient for the input
      const minProximity = distance / base ** defaultDifference;//If 0 < maxProximity < 1 THEN we start at MAX value and go down (cuz target is supposed to be less than 1 spot away)
    //IF minProximity < 1 THEN startingIndex = .length - log10(distance)
  //ELSE startingIndex = (regular old thing which is parseInt(distance/base**defaultDifference)

    //next check is
    if(minProximity < 1){
      //set startingIndex accordingly
      console.log("rounded log10(distance) =" + Math.round(Math.log10(distance)));
      index = parseInt(Math.round(Math.log10(distance)));
    }//end minProxmitity < 1
    else{
      index = parseInt(distance/base**defaultDifference);
      //now have to check for
          if(index > n){
            index = 0;
          }//end check inndex > n

    }//end else for inndex

  }//end positive, non-zero else

  while (true) {
    console.log(" index: " + index);
    console.log("target: " + targetValue);

    if (targetValue > phoneBook[index]) {
        console.log(//use this to actually count comparisons instead of wtf it's doing now
            "loop COMPARE is: " + index + " +1 =" + (index + 1) + " You gotta be at least this big if you want to iterate through the rest of this list: " +
            phoneBook[index]
          );//
      outcomeElem.innerHTML += outcomeMssages[2] + index + "<br/>";
      //we're gonna iterate!!
       index++;
    } //end ITERATION condition
    else if (targetValue == phoneBook[index]) {//we have a winner!
      console.log(
        "it's the end of the line, folks! please exit in an ORDERly fashion, even if you're not at all fashionable."
      );
      outcomeElem.innerHTML +=
        outcomeMssages[1] +
        " value of index: " +
        index +
        ", target: " +
        targetValue +
        "<br/>";
      break;//breaking outta the loop!

    } else {      //We're at the end of the loop and we haven't found it !
      outcomeElem.innerHTML =
        outcomeMssages[0] + index + ", which is: " + phoneBook[index] + "<br/>";
      break;
    } //end last else
  } //END WHILE
} //END sequentialSearch

//Now that we're finished defining our JavaScript functions
//we can CALL the first one
// (which is kinda funny cuz it's a phone book, get it? ;)
printPhoneBook(phoneBook);
