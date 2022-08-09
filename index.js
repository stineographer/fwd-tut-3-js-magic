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
  //When it comes to an efficient algorithm, you have to really think about what the goal is.
  //We're trying to complete this task in as few steps as possible,
  //WHILE using up as few resources as possible.
  //That means, we'll take a couple well-thought out short-cuts.

  //Any time you accept input from a user, you'll need to provide that user with some kind of output.
  //We'll be displaying this output with the help of a CSS class.
  const outcomeElem = document.querySelector(".outcome");
  //The html element for our outcomeMessages is designated by this 'outcome' class.
  //We'll be using this element to display more html elements, along with strings (text data).

  // Now we'll get our input from the user.
// The input must be numerical.
// In fact, we're only allowing integers for our input.
// Here's some more information about html input elements.
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  const oElem = document.getElementById(input_id);
  // We're picking out the element containing an input string from the user.

  //The first set of short-cuts involves checking our input thoroughly before we even start any loop iterations.
  //Why bother entering a loop if you don't need to?

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

  //At this point in the code, we know that our input is a number (we made it past that IF statement!)
  //There's a lot going on in this next line of JS.
  const distance = parseInt((phoneBook[8] - targetValue)/(10**6));
  //Because ORDER matters in this list, we're going to estimate the best spot to start checking for our value.
  //We'll do that by getting the DISTANCE our targe is from the MAXIMUM value,
  //which we know is the last value in the list because it's sorted in ASCENDING order.
  //We're assigning a constant value, and calling it "distance": the distance our target value is
  //from the maximum value in our phoneBook,
  // and we're making sure that value is stored as an integer (by using parseInt).

  //At the very end of the above JS line,
  //you'll see that we're dividing our distance by 10 power 6.
  //This division operation is what determines the precision of the distance we use.
  //In other words, we have to make sure that the distance
  //is in the same scale as the index of our array.
  //We want to use our phonBook array index to determine the best spot to start our search.

  //Hey, life is short! Why start at zero?
    let index;//Here, we're declaring a variable
//that will allow us to track what spot we're checking in
//our phoneBook.
//We'll initialize, or assign, the value in a separate statement.

  //Before we go any further, we're going to consider possible outcomes.
  //Either the target value is in the list or it's not.
  //If it's NOT in the list, we'll tell the user after checking as few spots as possible.
  //If the target value is in the list we'll still check as few values as possible,
  //then when we find the target we'll tell the user where we found it (return the index).

  const outcomeMssages = ["sorry, yer number ain't in here! the good news is here's the last spot we had to check: ", "we found it!", "Look at us! We're iterating cuz the target is bigger than the value here! indx++ ", "winning index ="]
  // Above is an array storing one string message for each outcome.

  //I'm not sure if I've told you how expensive comparisons are, you might as well know now.
  //The price of comparisons has really sky-rocketed, and once you put them in a loop... Well, lets just say they can get outta control.
  //That's why we're going to do a bunch of comparisons before we even enter a loop
  //because these comparisons will give us an idea of the best spot to start looking for our target value.

  //the first thing we're gonna check is whether
  if(distance <= 0){
      if(distance==0){
         outcomeElem.innerHTML += outcomeMssages[1] + "<br/>";
        //-cuz it's possible, so you gotta consider it
          //-you may have just won because the phone number you entered is the first value you've checked!
    //-everyone gets to go home early!
    //-we're outta here!
            //-this is exciting!
    //-we don't even have to enter the while loop!
      }
      else{//Thanks to some of the data validation we put in the html, this check for positive input is unnecessary (hint: line #150 in the html!)
         outcomeElem.innerHTML += "Are you kidding? That number's way too big for this list! <br/>";
      }

  }//end winner and positive check
  else if (distance >= n){
  //-the next thing we're checking is:
  // whether the distance >= the number of spots in our Array
       index = 0;  //-even in this case, you'll never have to check all the way to the nth spot
      //-I'll show you why ***
  }//end the n-check
  else{
    //inside the next line:
    // to get our starting index, we subtract 1 from the length of the array
    //(because the index starts at zero, there's no index == length)
    index = ((phoneBook.length-1) - distance);
    //-we want to start checking at the spot we expect the targetValue to be
    //This is where it's important that the index and the distance be on the same scale.
  }//end the guesstimation of our starting index

  //Our final WHILE loop... for this tutorial, that is.
  //-in case you need a refresher:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  while (true) {//so this is a tricky thing that I'm doing here in order to avoid a comparison
    //this is a little bit dangerous... what we're saying here is that we want the loop to continue no matter what.
    //We're saying, don't even bother checking a condition. Keep going no matter what!
//don't worry, we'll be putting the BREAKS on very soon.

    //if you KNOW that you have an ordered list, then you don't have to do the comparison inside this while
    //if you're going up, you're increasing the index.
    //if you're going down, then you decrease the index.
    //it's guaranteed that when you increase the index the next value will be larger.

    //We have to remember that we're now in very expensive comparison territory.
    //Every comparison inside here counts not just once, but possibly for every iteration.
    //That includes the condition used for the WHILE loop itself.

    //You're probably thinking to yourself, Shirley she'll need at least TWO comparisons per iteration!?
    // that's not necessarily the case when you're able to cut your iteration short,
    //using BREAKS.
    //Yes you heard it here first,
    //we're putting the breaks on our iteration because it'll help us to BREAK the loop without further comparisons.


    //FIX EVERYTHING BELOW HERE! Thems THE BREAKS!! (another short cut!)

    //We'll be doing this very carefully, because the whole point is to keep the algorithm efficient.
    //Once inside this loop there's only 3 possible outcomes, and every one of them counts as a comparison:
    // 1) target value == index value,
    //2) target value < index value,
    //2) target value > index value,
    //3) . //REMEMBER: this one is least likely!!

    //We're unravelling these outcomes in a specific order that has everything to do with the order of our list.
    //Before even entering this loop, we ruled out the possibility that the target value matched the maximum
    //(last) value in our list.
    //We've set our index to the spot where we expect our target value to go.
    //We're also expecting our target value to be greater than the index value we've chosen. (I'll let you figure that one out ;)
    //Because the list is in ASCENDING order, the first comparison will be
    // drum-roll please...

    if(targetValue < phoneBook[index]){//FIRST COMPARISON
      //Think about it this way, how did we get the 'distance' variable?
      //We subtracted it from the MAX value.
      //It should be greater than or equal to the value in this spot.
      //If it's the case that the target is less than this value, then we know the target is not in this list.

      //There's no point in checking any further values (even when the list is full of duplicates!)
      console.log("COMPARE #1) guess what? if your target is less than this: " + phoneBook[index] + ", then you might as well get the flip out!");
      //STOP! -you've lost! -the phone number your looking for is NOT here!
      //Lets put the breaks on this loop and get out now! We do get to go home early!
           outcomeElem.innerHTML += outcomeMssages[1] + index + "<br/>";
      break;
    }//-end FIRST COMPARISON

    else if(targetValue > phoneBook[index]){//SECOND COMPARISON
      //Wanna learn more about the else if in JS? https://www.w3schools.com/js/js_if_else.asp
            //This is kinda what we're expecting. We picked this spot because we expect our target to be at least as big as the value here. If that's NOT true, then there's only one other possibility, right?
      console.log("COMPARE #2) You gotta be at least this big if you want to iterate through the rest of this list: " + phoneBook[index]);
      outcomeElem.innerHTML += outcomeMssages[2] + index + "<br/>";
       index++;
      // Here we're increasing the index without checking (comparing) its value, cuz that's real expensive! So why do it?
    }//end else if
    else {//we've r
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
