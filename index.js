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
const n = phoneBook.length;//We're letting 'n' store the total number of items in this array.
const lastIndex = n - 1;//This will be important to keep in mind later on!!

//Look out! We're about to start printing!

//If you'd like to know more about how HTML elements are populated using JavaScript,
//checkout this article by the Mozilla Developer Network:
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#examples
//-below is a function that prints out all the entries in our mock phone book
function printPhoneBook(passedInPhoneBook) { //The name of the function is: printPhoneBook, and inside the brackets we pass an arguement that we're calling: passedInPhoneBook

  const logElem = document.querySelector(".log"); //Here, we're looking in our html document for an HTML element with a class="log"
  let phoneBookIndx = 0; //-when we start printing phoneBook entries, we'll begin at the first one (where index=0)

  while (phoneBookIndx < passedInPhoneBook.length) {  //If you want to learn more about WHILE loops, see here:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
    logElem.innerHTML += "<li>" + passedInPhoneBook[phoneBookIndx] + "</li>";
    phoneBookIndx++;    // increment the index of our array.
  } //end WHILE LOOP
} //END printPhoneBook function

//The argument for our sequentialSearch
// is the input_id of the html input element. We're using this to store the value of the user's input.
function sequentialSearch(input_id) {
  let startingIndex;
  let index;
  let minProxIndicator = false;
  let comparisonCount = 0;//yes, indeed folks we're counting comparisons cuz they're not cheap!

  const oElem = document.getElementById(input_id);
  const outcomeElem = document.querySelector(".outcome");
  outcomeElem.innerHTML = " ";
  const outcomeMssages = [
    " Yer number ain't in the list! Fortunately, we started checking at index:  ",
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
  if (distance <= 0) {//COMPARISON #1!
    comparisonCount++;
    if (distance == 0) {//non-loop COMPARISON #2! (but it's telling us not to enter the loop!)
      comparisonCount++;
      return (outcomeElem.innerHTML += outcomeMssages[1] + "comparison total: " +comparisonCount+ " didn't even have to iterate cuz it's the Max value: " + phoneBook[8] + "<br/>"); //winning outcome
    } else {
      return (outcomeElem.innerHTML +=
        "Are you kidding? That number's way too big for this list! <br/>");//input data validation should prevent this!
    }//end inner else
  } //end winner and positive check
  else{//we've got a positive, non-zero distance so we're going to see if our default scale is sufficient for the input

      const minProximity = parseInt(distance / base ** defaultDifference);//If 0 < maxProximity < 1 THEN we start at MAX value and go down (cuz target is supposed to be less than 1 spot away)
      console.log("minProx calculated: " + minProximity);

      if(minProximity < 1){//this part not so sure about
        comparisonCount++;
        minProxIndicator = true;

        const distanceLogged = parseInt(Math.round(Math.log10(distance)));
        console.log("distanceLogged = " + distanceLogged);
        const tenPowerMe = 10**(distanceLogged);//wanna keep first digit!!
            console.log("tenPowerME =" + tenPowerMe);//distance Logged =100000
         startingIndex = Math.round(distance/tenPowerMe);//cuz you wanna keep first digit
          console.log("startingIndex =" +  startingIndex);

        index =  startingIndex;

        if((lastIndex - index) <= 1) {//outta bounds check!
          comparisonCount++;
          index = 0;//target must be > this value, else exit cuz target ain't in list
        }//end outta bounds check
      }//end minProxmitity < 1 check
      else{//minProximity >= 1,
        //therefore default scale is fine to use so target must be at least minProx. spaces away from maxValue
        //startIndex = .length - minProx.
         index = n - minProximity;//target must be at least this many spots away
        //target must be < this value, else exit cuz target ain't in list
        startingIndex = index;
        console.log("startingIndex: " + startingIndex);
      }//end else minProximity check, index should be set!!!!

  }//end positive, non-zero else

  while (true) {
    console.log(" index: " + index);
    console.log("target: " + targetValue);

    if(minProxIndicator){
        //AND to short-circuit! NEXT TIME CHRISTINE FORGETS JS SYNTAX FOR LOGICAL OPERATORS: &&, ||
        if ((index>0) && (targetValue > phoneBook[index])) {//this is cheating a bit, cuz if first condition must be true
          comparisonCount+=2;//adding 2 for the above conditions
          console.log(//use this to actually count comparisons
                "hey, it's my index: " + index + "! " +
              " here's the value: " +
                phoneBook[index] +
              " minProxIndicator = " + minProxIndicator
              );//
          outcomeElem.innerHTML += outcomeMssages[2] + index + " comparison total: " + comparisonCount + "<br/>";

          //we're gonna iterate!!
            index++;
            console.log("index after minProxIndicator check: " + index);

        } //end ITERATION IF condition
        else if (targetValue == phoneBook[index]) {//we have a winner!
            comparisonCount++;
            console.log(
              "it's the end of the line, folks! please exit in an ORDERly fashion, even if you're not at all fashionable. ener the total comparisons: " + comparisonCount
            );
            //OUTPUT!
            outcomeElem.innerHTML +=
              outcomeMssages[1] +
              " value of index: " +
              index +
              ", comparison total: " +
              comparisonCount +
              "<br/>";

            break;//breaking outta this minProx loop!

      } else {//target's not in list

      //We're at the end of the loop and we haven't found it !
      outcomeElem.innerHTML =
        outcomeMssages[0] + startingIndex + ", which is: " + phoneBook[startingIndex]
        + " comparisonCount: "+ comparisonCount +"<br/>";
        break;
      } //end last inner else of minProx==true

    }//end the first IF minProx==true
    else {//minProximityIndicator==false
        //AND to short-circuit! NEXT TIME CHRISTINE FORGETS JS SYNTAX FOR LOGICAL OPERATORS: &&, ||
        if ((index>0) && (targetValue < phoneBook[index])) {//this is cheating a bit, cuz if first condition must be true
          comparisonCount+=2;//adding 3 for the above conditions, as well as another in the next check (minProximity indicator below)
            console.log(//use this to actually count comparisons
                "hey, it's my index: " + index + "! " +
              " here's the value: " +
                phoneBook[index] +
              "minProxIndicator = " + minProxIndicator
              );//
          outcomeElem.innerHTML += outcomeMssages[2] + index + " comparison total: " + comparisonCount + "<br/>";
          //we're gonna iterate!!
           index--;

          console.log("index after minProxIndicator check: " + index);
        } //end ITERATION condition
        else if (targetValue == phoneBook[index]) {//we have a winner!
          comparisonCount++;
          console.log(
            "it's the end of the line, folks! please exit in an ORDERly fashion, even if you're not at all fashionable. ener the total comparisons: " + comparisonCount
          );
          outcomeElem.innerHTML +=
            outcomeMssages[1] +
            " value of index: " +
            index +
            ", comparison total: " +
            comparisonCount +
            "<br/>";
          break;//breaking outta the loop!

        } else {//target's not in list

          //We're at the end of the loop and we haven't found it !
          outcomeElem.innerHTML =
            outcomeMssages[0] + startingIndex + ", which is: " + phoneBook[startingIndex]
            + " comparisonCount: "+ comparisonCount +"<br/>";
          break;
        } //end last else of minProx==false

    }//end final else

  } //END WHILE
} //END sequentialSearch

//Now that we're finished defining our JavaScript functions
//we can CALL the first one
// (which is kinda funny cuz it's a phone book, get it? ;)
printPhoneBook(phoneBook);
