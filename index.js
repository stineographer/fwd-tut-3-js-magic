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

    -ok, ok I'm getting ahead of myself
    -instead of giving you further explanation,
    I'm going to prove that statement I just made
    and you're going to help me do it

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
    -you know, like how normal people start counting
    -just about all list-like data structures in computer science
    start their index at zero
    -it's the kinda thing where you gotta throw up yer hands and say,
    ok fine!

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

//Because there are now relatively few phone books still in existence,
//I'm leaving this hard-coded list in JavaScript.
//It's also printed out on the page itself.

//I want you to actually look at these numbers, come up with different possible 10-digit integers
//then think about where in the list you'd start to LOOK for that value.

//Find a number that forces this whispering-descriptive-pump to check every single entry in the list.
//I'm betting you could spend the rest of your life trying to find a value that trips it up.
// But you go ahead and try ;)
const phoneBook = new Array(2895555555, 2896666666, 2897777777,
                            4165555555, 4166666666, 4167777777,
                            9055555555, 9056666666, 9057777777);
//General NOTEs:
//how values are assigned to specific spots in this JavaScript Array

//0 = 2895555555
//1 = 2896666666
//...

//8 = 9057777777

//Because we start our Array index at 0
// the last index is going to be
//the (length of the Array) - 1
//The JS Array has a property called 'length' that returns the number of elements in your array.
let n = phoneBook.length;
//We're letting 'n' store the total number of items in this array.
//This will be important to keep in mind later on!!

//Look out! We're about to start printing HTML!

//If you'd like to know more about populating HTML elements
// with JavaScript generated data,
//checkout this article by the Mozilla Developer Network:
//https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#examples

//-below is a function that prints out all the entries in our mock phone book
function printPhoneBook(passedInPhoneBook) {
  //The name of the function is: printPhoneBook, and inside the brackets we pass an arguement that we're calling: passedInPhoneBook

  const logElem = document.querySelector(".log");//Here, we're looking in our document
  //for an HTML element with a class="log"
  //Technically,
  //we could pass this string describing a class name
  //into our printPhoneBook funciton as an additional argument.. but that's another story for another day!

  let phoneBookIndx = 0;  //-when we start printing phoneBook entries, we'll begin at the first one (where index=0)
  //So this may be the first time you've ever seen a WHILE loop.
  //Think of it as an easy way to break your computer. Just Kidding!
  //-the following WHILE loop prints our phonebook numbers out in the html document

  //If you want to learn more about WHILE loops, see here:
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  while (phoneBookIndx < passedInPhoneBook.length) {
    //-if you tinker with this one,
    //then you may get to write your very first infinite loop!!

    //The idea is that WHILE our phoneBookIndex is less than the length of the book,
    //we'll add this html(and the variable it contains) to the innerHTML of the "log" element
      logElem.innerHTML +=   "<li>" + passedInPhoneBook[phoneBookIndx] + "</li>";
    // then increment the index of our array.
   phoneBookIndx++;
  }//end WHILE LOOP
}//END printPhoneBook function

//The argument for our sequentialSearch
// is the input_id of the html input element. We're using this to store the value of the user's input.
function sequentialSearch(input_id) {
  //TIRED, NEED TO EAT SOME FOOD BUT NEXT TIME TO DO:
  //THIS STUFF BELOW IS A HUGE MESS, FLIPPING FIX IT CHRISTINE!! You picked the messiest possible way to display result messages!
  //Figure out the correct number of possible outcomes!
  const firstOutcome = "AND the winner is... (drum-roll, please) our MAX value! " + phoneBook[8];
  const outcomeMssages = [firstOutcome, "sorry, yer number ain't in here! the good news is here's the last spot we had to check: ", "indx++", "winning index ="]
  // Above is an array storing one string message for each outcome.
  const outcomeElem = document.querySelector(".outcome");
  //The html element for our outcomeMessages is designated by this 'outcome' class.

  // Now we'll get our input from the user.
// The input must be numerical.
// In fact, we're only allowing integers for our input.
// Here's some more information about html input elements.
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  const oElem = document.getElementById(input_id);
  // We're picking out the element containing an input string from the user.
  //Then we use a JavaScript function, called parseInt
  //to turn the input string into an integer.
  //The second paramter (where we place our argument, 10)
  //is where we designate the base for our input number.
  const targetValue = parseInt(oElem.value, 10);// We're designating base 10.
  //Here's a little more info about parsing an integer:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  // In their example, you'll see that they're checking the parsed result of the parseInt function
  //to make sure that result is a number. This is a form of 'data validation'.
  //This is a function that JavaScript provides for you, aptly named "isNaN"
  //where we check if the argument is Not a Number.
  //If result isn't a number, then something's gone wrong somewhere!
  if (isNaN(targetValue)) {
     outcomeElem.innerHTML += "That value does not compute!<br/> Try entering a number this time! <br/>";
                          }
//If it's true that our target value isn't a number then we can't go any further,
  //so we stop here and ask the user to try again.

  //If we make it past the above check, then we know our targetValue is a number.
  // We'll clear out whatever's in this element.
   outcomeElem.innerHTML = " "

  //There's a lot going on in this next line of JS.
  const distance = parseInt((phoneBook[8] - targetValue)/(10**6));
  //We're assigning a value: the distance our target value is
  //from either the maximum or minimum value in our phoneBook,
  // and we're storing that distance value as an integer.

  //This distance is an absolute value because we only want a positive distance.
  //Remember, I'm using the distance from the maximum value in our array
  //and the sort is in ascending order.
  //That means the maximum value is in the phoneBook's last spot,
  //where the index equals 8.

  //At the very end of the above JS line,
  //you'll see that we're dividing our distance by 10 power 6.
  //This division operation is what determines the precision of the distance we use.
  //In other words, we have to make sure that the distance
  //is in the same scale as the index of our array.
  //We want to use our phonBook array index to determine the best spot to start our search.

    let index;//Here, we're declaring a variable
//that will allow us to track what spot we're checking in
//our phoneBook.
//We'll initialize, or assign, the value in a separate statement.

  //-now that we've got our distance,
      //the first thing we're gonna check is whether
  if(distance <= 0){
      if(distance==0){
         outcomeElem.innerHTML += outcomeMssages[0] + "<br/>";
           //-cuz it's possible, so you gotta consider it
    //-you may have just won because the phone number you entered is the first value you've checked!
    //-everyone gets to go home early!
    //-we're outta here!
            //-this is exciting!
    //-we don't even have to enter the while loop!
      }
      else{
         outcomeElem.innerHTML += "Are you kidding? That number's way too big for this list! <br/>";
      }

  }
  else if (distance >= n){
      //-ok, so we're down here now
  // which means we didn't win
  // -but don't worry, we've still got a sorted list so everyone gets to go home early anyway ;)

       //-we already know that the distance is a positive number,
    //because we got the absolute value of our MAX - target
  //-the next thing we're gonna check is:
  // whether the distance >= the number of spots in our Array

       index = 0;  //-even in this case, you'll never have to check all the way to the nth spot
    //-I'll show you why
  }
  else{
    //inside the next line:
    // to get our starting index, we subtract 1 from the length of the array
    //(because the index starts at zero, there's no index == length)
    index = ((phoneBook.length-1) - distance);
    //-we want to start checking at the spot we expect the targetValue to be
    //This is where it's important that the index and the distance be on the same scale.
  }

  //Our final WHILE loop... for this tutorial, that is.
  //-in case you need a refresher:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  while (true) {//so this is a tricky thing that I'm doing here, in ORDER to avoid a comparison
    //if KNOW that you have an ordered list, then you don't have to do the comparison inside this while
    //if you're going up, you're increasing the index
    //if you're going down, then you decrease the index
    // you don't have to check it against the final value every time the loop executes

    //BUT again, in order to do this I'll have to introduce another short-cut: break;
    //yes, we're putting on the breaks in our loop! instead of actually comparing values
    //however this is the way algorithms are measured for efficiency: how many comparisons does it need,
    // and what's the work involved in order to do that comparison

    //in that wikipedia article:
    //https://en.wikipedia.org/wiki/Linear_search#With_a_sentinel
    //we're being told that an ordered list requires a sentinel, but as you can see above that's not true!

    if(phoneBook[index] > targetValue){//FIRST COMPARISON
      console.log("compare 1");
      //STOP! -you've lost! -the phone number your looking for is NOT here!
           outcomeElem.innerHTML += outcomeMssages[1] + index + "<br/>";
      //here's some more good news:
      //-I'm betting this index is NEVER equal to n!
      //-this is where you get to try and prove me wrong!
      break;
      //-once again, Christine is using a break short-cut
      //-this is where we're putting the brakes on our WHILE loop
      // - because otherwise it'll just keep going
      // Can you figure out why?

    }//-end first condition
    else if(targetValue > phoneBook[index]){//SECOND COMPARISON
      //Wanna learn more about the else if in JS? https://www.w3schools.com/js/js_if_else.asp
      console.log("compare 2");
      outcomeElem.innerHTML += outcomeMssages[2] + index + "<br/>";
       index++;

    }//end else if
    else {//we've reached the end of the list! we're done!
      console.log("it's the end of the line, folks! please exit in an ORDERly fashion, even if you're not at all fashionable.");

      if(targetValue == phoneBook[index]){//here's the winning location!
        outcomeElem.innerHTML += outcomeMssages[3] + " value of index: " + index + ", target: " + targetValue + "<br/>";

      }else{
        outcomeElem.innerHTML = "Sorry, yer number ain't in here! Fortunately, we only checked the value at n, which is: " + n + "<br/>";

      }

      break;

    }//end last else

  }//END WHILE

}//END sequentialSearch

//Now that we're finished defining our JavaScript functions
//we can CALL the first one
// (which is kinda funny cuz it's a phone book, get it? ;)
printPhoneBook(phoneBook);
