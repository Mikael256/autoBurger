# autoBurger
automatic burger plugin in jQuery made by Mikaël Van Isterdael and Waïl Madrane.

## First steps
-put autoBurger.min.js file in your js folder.
-put autoBurger.css file in your css folder
-add this line in your head before your css:
  <link rel="stylesheet" href="css/autoBurger.min.css">
-add this line at the end of your body after your jQuery script insertion:
  <script src="js/autoBurger.min.js"></script>
## Easy Method (no JS)
The easy method only works with data attributes and is activated with the attribute data-autoburger="true" on the body markup:
  <body data-autoburger="true">
Now you can create as much burger as you want by just add this line by burger to display:
<div class="autoBurger" data-still="" data-hover="arrowDown" data-triggered-hover="arrowUp" data-triggered="cross"></div>
the data attributes allows you to change the pictogram at each state:
  data
    -still: default state    
    -hover: untriggered hover
    -triggered-hover: untriggered hover
    -triggered: state when triggered
Then you put the target to display when the burger is triggered:
  data-target="#target"
example:
  <div class="autoBurger" data-still="" data-hover="arrowDown" data-triggered-hover="arrowUp" data-triggered="arrowUp" data-target="#target"></div>
## Pictogram list
"": empty string for the basic burger
cross: classic cross visually implying closing of the burger

simple arrows:
arrowDown
arrowUp
arrowRight
arrowLeft

dashed arrows:
dashedArrowDown
dashedArrowUp
dashedArrowRight
dashedArrowLeft

triangle arrows:
triangleArrowDown
triangleArrowUp
triangleArrowRight
triangleArrowLeft

arithmetic signs:
minus
plus
## JS class method
To deal with the autoBurger plugin in js you have to have your div ready and targettable in js, example:
  var newBurger = new AutoBurger($("#myBurger"), "", "arrowDown", "arrowUp", "arrowUp");
Here we point to a div with the id "myBurger" and the following strings point to the css class of the different pictogram in the same order as described in the easy method.
Then you can specify different callbacks for each event, example:
  newBurger.clickCallback = function(){
    console.log("Hello, you clicked me!");
  }
list of available callbacks:
  hoverCallback: on hover
  hoverOffCallback:off hover
  clickCallback: on click
  triggeredCallback: when triggered
  untriggeredCallback: when untriggered

Once you sepcified your differents callbacks you can bind them with your burger:
  newBurger.setBehaviour();
And you are ready to go!
