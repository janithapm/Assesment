1. I spent 3 hours on the assigment. ;(

    The reason was initially I tried to use readbleSteams  to read the files from API.

    But noticed that if so , I have to read the same file back into memory again, which may be efficient in larger scale but in this assignment it is redundant.
    The reason is I have to write those two image to the server which at the end I have three files on my machine (as per my knowledge).

2. Other than that I used a promise all so both the requests will be sent at once and  if  one fails the whole thing fails.


3.  to run the code
        "npm i";
    then run  
        "node index --greeting --who --width --height --color --size"