TUTORIAL #3
=================



    SEQUENTIAL (Also Known As
    a Linear) SEARCH ALGORITHM: sorted list
    -we're stepping away from lines of poetry for a moment
    -we'll temporarily trade them in for an array of phone numbers
    I know that's not a great trade,
    but it'll help us to discuss our
    first major algorithm in computer science:
    the SEQUENTIAL (Linear) SEARCH!
    -dunh-dunh-dunh!

    -there's even an entire wikipedia article dedicated to
    this particular topic, and we're about to take a deep dive into it:
    https://en.wikipedia.org/wiki/Linear_search

    -since this is our first major algorithm,
    and computer science is the study of algorithms
    I think it's important that we get this right

    In tutorial #3, we'll focus specifically on the algorithm
    for a sorted list.

    It's important to remember that an algorithm
    isn't specific to any one programming language.
    Algorithms are supposed to be language agnostic
    that way.

    What I've written in JavaScript is one way to
    implement a linear search algorithm on a sorted list.
    Here are two big clues:
    1) If you've got a sorted list then you never have to start your search with either the first or the last value,
      unless they meet a specific condition.
    2) A sorted list never requires a sentinel!

    Are you excited yet? If you're tired of explanation, what the heck just skip on over to that JS file!
    If
    you're thinking you want to try and beat this algorithm,
    in other words: prove me wrong!
    then go to the input and see if you can enter a phone number that checks every single item in the list.

    -in an effort to keep things simple,
    we'll only be using integers
    in our phone book
    -they're 10 digit integers,
    just like a north american phone number
    -we're asking the user to enter a
    10-digit phone number
    and then we're printing messages
    to the user about whether
    that number is in our list

    -for now, our list of phone numbers is "hard-coded" into the JS I've written
    -this means I've typed out those numbers and entered them into our array myself!
    (we're gonna change this over the next few tutorials)
    -the truth is, there's a multitude of ways to generate this kind of data

    -because I want you to think about how you intuitively look something up in a sorted list,
    I've left these "hard-coded" pieces of data in the JS itself
    -feel free to change the values yourself!
    -as long as they're 10-digit, sorted integers then this particular implementation
    of a linear search on a sorted list will never check every single entry in this list
    -that is of course, as long as the total number of items is greater than 3
    -you can even introduce duplicate entries!
    -this thing, this whispering-descriptive-pump
    never checks all items in the list!


    -lets get to the code!


TUTORIAL #3
------------

### ← README.md

That's this file, where you can tell people what your cool website does and how you built it.

### ← index.html

This is where your HTML lives!

### ← style.css

CSS files add styling rules to your content.

### ← script.js

If you're feeling fancy you can add interactivity to your site with JavaScript.
