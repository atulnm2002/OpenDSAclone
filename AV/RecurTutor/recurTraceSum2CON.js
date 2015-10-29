/*global ODSA */
// Written by Sally Hamouda and Cliff Shaffer
// Showing how sum returns to the base case and then unwind
$(document).ready(function () {
  "use strict";
  var av_name = "recurTraceSum2CON";
  var av = new JSAV(av_name);

  // Slide 1
  av.umsg("The process must eventually reach a base case.");
  var pseudo = av.code({url: "../../../SourceCode/Java/RecurTutor/WrtSumV4.java",
                       lineNumbers: false,});
  pseudo.highlight(2);
  av.displayInit();
  av.step();

  // Slide 2
  av.umsg("Thus, the value returned by the base case is important.");
  pseudo.unhighlight(2);
  pseudo.highlight(3);
  av.step();

  // Slide 3
  av.umsg("To keep track of what is going on, it can be helpful to label recursive calls. A recursive call, like any other function call, eventually returns back to the point of being called. However, since you are calling the same function, it is easy to make mistakes when tracing the code.");
  pseudo.unhighlight(3);
  pseudo.highlight(5);
  av.step();
  
  // Slide 4
  av.umsg("Recursion involves a 'winding' phase where the calls are progressively getting closer to the base case, and you are getting to smaller and smaller problems, and an 'unwinding' phase, when you begin to return back to the original call. It is usually in the 'unwinding' phase where the solution is generated.");
  av.recorded();
});
