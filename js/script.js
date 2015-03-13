

$(document).ready(function(){
	/*DYnmaically vertically centering searchBox and header text*/
	// var headerHeight = $(window).height()-70;
	// var headerWidth  = $(window).width();
	// $("#dynamicText").css('top', ""+ (headerHeight/2)+"px" );
	// $("#searchBox").css('top', ""+ ((headerHeight/2)+50) +"px" );
	$(document).foundation();

	/*dynamic header text code*/
    var myString = "Where are you dining today?";

	var myArray = myString.split("");
	var loopTimer;

	function frameLooper() {
		
		if(myArray.length > 0) {
			var x=document.getElementById("dynamicText");

			x.innerHTML += myArray.shift();
			
		} else {
			clearTimeout(loopTimer); 
            return false;
		}
	}

	loopTimer = setInterval(frameLooper,70);

	frameLooper();

	var index = 1;
	var myString2 = "Worst Pizza Ever, Wil never ever eat this for the rest of my life";
	var myArray2 = myString2.split("");
	var loopTimer2;
	var y;
	function frameLooper2() {
		
		if(myArray2.length > 0) {
			 y=document.getElementById("dynamicReview");

			y.innerHTML += myArray2.shift();
			
		}else{

			if(index==1){
				y.innerHTML =" ";
				myString2 = "World you got to check this Flavor. 5 stars!";
				myArray2 = myString2.split("");
				index =0;
			}else{
				y.innerHTML =" ";
				myString2 = "Worst Pizza Ever, Wil never ever eat this for the rest of my life";
				myArray2 = myString2.split("");
				index=1;
			}
		}

	}

	loopTimer2 = setInterval(frameLooper2,70);

	$('a[href*=#]').click(function(event){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -30
	    }, 500);
	    event.preventDefault();
	});

	// var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  // var items = new vis.DataSet([
  //   {id: 1, content: 'item 1', start: '2014-04-20'},
  //   {id: 2, content: 'item 2', start: '2014-04-14'},
  //   {id: 3, content: 'item 3', start: '2014-04-18'},
  //   {id: 4, content: 'item 4', start: '2014-04-16'},
  //   {id: 5, content: 'item 5', start: '2014-04-25'},
  //   {id: 6, content: 'item 6', start: '2014-04-27'}
  //   {id: 7, content: 'item 6', start: '2014-04-27'}
  // ]);

  // // Configuration for the Timeline
  // var options = {};

  // // Create a Timeline
  // var timeline = new vis.Timeline(
  //   container,
  //   items,
  //   options
  //   );
	// $(window).resize(function() {
	// 	headerHeight = $(window).height();
	// 	$("#dynamicText").css('top', ""+ (headerHeight/2)+"px" );
	// 	$("#searchBox").css('top', ""+ ((headerHeight/2)+50) +"px" );
		
	// });
	
});