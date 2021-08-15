var cursor = $(".cursor"),
		follower = $(".cursor-follower"),
    posX = 0,	
		posY = 0,
    mouseX = 0, 
		mouseY = 0;

$(document).on("mousemove",function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;

// 	posX += (mouseX - posX) / 9;
//  posY += (mouseY - posY) / 9;
	
// 	cursor.css("left", mouseX).css("top", mouseY);
// 	follower.css("left", posX).css("top", posY);
});

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(".hover").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".hover").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});



// Morphing service Icons



// let Fat = document.getElementById("Fat");// original code
let Fit = document.getElementById("Fit");// original code

// var action = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
var action = new TimelineMax({repeat:-1,})
.from('#Fat',
		{transformOrigin: "center center",
			opacity: 1,
			duration: 1,
			scaleX:1.1,
			scaleY:1.1,
			ease:Power2.easeInOut
		})
.to('#Fat',
		{transformOrigin: "center center",
			opacity: 0,
			duration: 0,
			scaleX:1,
			scaleY:1,
			ease:Power2.easeIn
		})
.from(Fit,
		{transformOrigin: "center center",
			opacity: 0,
			duration: 0,
			ease:Power2.easeIn
		})
.to(Fit,
		{transformOrigin: "center center",
			opacity: 1,
			duration: 1,
			scaleX:1.1,
			scaleY:1.1,
			ease:Power2.easeInOut
		})
;


// apple with tape

var action2 = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
.to('#tapetip', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	x: -10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
})
.to('#tape', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	x: -10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
});


// healthy lifestyle


let openmouth = document.getElementById("openmouth");// original code
let smile = document.getElementById("smile");// original code


var action3 = new TimelineMax({repeat:10, delay:0, repeatDelay:1})
.from('#heart', {
	transformOrigin: "center center",
	// stagger: 0.1,
	y: 0,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
})
.to('#heart', {
	y: 8,
	stagger: 0.1,
	// opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
});
// .to(smile,0,{cx="61.2", cy="40.1", ease:Power2.easeInOut}, "1")
// .to(openmouth,0,{attr:{d:"M48.3,19.3c0-2.6-2.1-4.7-4.7-4.7s-4.7,2.1-4.7,4.7c0,0,0,1.2,0.9,1.2c0.9,0,0.8-1.2,0.8-1.2c0-1.6,1.3-3,3-3c1.6,0,3,1.3,3,3c0,0,0,1.2,1,1.2C48.4,20.5,48.3,19.3,48.3,19.3z"}, ease:Power2.easeInOut}, "0")




// girl community

let smallercircle = document.getElementById("smaller-circle");// original code
let biggercircle = document.getElementById("bigger-circle");// original code
let crosstop = document.getElementById("cross-top");// original code
let crossbottom = document.getElementById("cross-bottom");// original code
let crossright = document.getElementById("cross-right");// original code
let crossleft = document.getElementById("cross-left");// original code

var action4 = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
// .to(smallercircle,0,{attr:{d:"M55.1,82C42,80.9,31.6,69.9,31.6,56.4c0-14.2,11.5-25.7,25.7-25.7s25.7,11.5,25.7,25.7c0,6.4-2.4,12.3-6.3,16.8c0.3,0.8,0.9,1.3,1.8,1.3c4.2-4.9,6.7-11.2,6.7-18.2c0-15.4-12.5-27.9-27.9-27.9c-15.4,0-27.9,12.5-27.9,27.9C29.3,70.4,39.6,82,53,84c0.6-0.1,2.1-0.4,2.1-0.4S55.2,83,55.1,82z M61.2,84c5.4-0.8,10.2-3,14.2-6.4c0-1-0.5-1.6-1.4-1.7c-4,3.4-9.1,5.6-14.7,6c0,0-0.2,0-0.2,0s0,0.7,0,1L61.2,84z"}, ease:Power2.easeInOut}, "1")
// .to(biggercircle,0,{attr:{d:"44.6,14.2 54.1,14.2 54.1,26.9 60.1,26.9 60.1,14.2 69.6,14.2 69.6,8.2 60.1,8.2 60.1,1.8 54.1,1.8 54.1,8.2 44.6,8.2"}, ease:Power2.easeInOut}, "0")

.from('#cross-top', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	y: -10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
})
.from('#cross-right', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	x: 10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
})
.from('#cross-bottom', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	y: 10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
})
.from('#cross-left', {
	transformOrigin: "center center",
	// stagger: 0.1,
	// flipX:80,
	x: -10,
	opacity: 0,
	duration: 1,
	ease: 'Power2.easeInOut'
});






// .to(Fit,2,{attr:{d:"M62.05,43.71c1.09,0,2,.66,2,1.47s-.88,1.47-2,1.47-2-.66-2-1.47a1.79,1.79,0,0,1,2-1.47Z"}},1)

// .to(Fat,0.5,{attr:{d:"M 500 150 L 275 100 L 300 150 L 275 200 Z"}, ease: Power0.easeNone},'away')
// .to(Fit,1,{x:0, ease: Power3.easeIn},'away');





// Reference starts

// tl.to("#M", {duration: 2, morphSVG:{shape:"#cape", shapeIndex:-19}, fill:"#444"}, 0)
// .to("#H", {duration: 2, morphSVG:"#torso", fill:"#777"}, 0.1)
// .to("#P", {duration: 2, morphSVG:{shape:"#legs", shapeIndex:-24}, fill:"#777"}, 0.1)
// .to("#O", {duration: 2, morphSVG:"#head", fill:"#777"}, 0.05)
// .to("#R", {duration: 1.5, morphSVG:{shape:"#sock", shapeIndex:-11}, fill:"#88CE02", transformOrigin:"-100 60"}, 0.5)
// .to("#GUY, #capeFlow1", {autoAlpha:1}, 1.7)
// .to("#M, #O, #R, #P, #H", 0.7, {autoAlpha:0, ease:"none"}, 1.6);


// Reference ends





const t2 = gsap.timeline({ repeat: -1 }),
apple = document.getElementById("Apple"),
appleWtape = document.getElementById("AppleWtape");

t2.to(apple, { morphSVG: appleWtape }, "+=1")
.to(appleWtape, { morphSVG: apple }, "+=1");




    // tapetip = document.getElementById("tapetip");
// pentagon = document.getElementById("pentagon");
// tick = document.getElementById("tick");

// .to(Fat, { morphSVG: heart }, "+=1")
// .to(Fat, { morphSVG: triangle }, "+=1")
// .to(Fat, { morphSVG: square }, "+=1")
// .to(Fat, { morphSVG: pentagon }, "+=1")
// .to(Fat, { morphSVG: tick }, "+=1")








// ----------------------------------------------------------------



// let servicetxt = document.getElementById('servicetxt')
let x = document.getElementsByClassName("box-2");
let bodytoaningtxt = document.getElementById('bodytoaning-txt');
let fatlosstxt = document.getElementById('fatloss-txt');
let healthylifetxt = document.getElementById('healthylife-txt');
let girlcommunitytxt = document.getElementById('girlcommunity-txt');



const bodytoanbox = document.getElementById("bodytoaning");
const fatlossbox = document.getElementById("fatloss");

const healthylifebox = document.getElementById("healthylife");
const girlcommunitybox = document.getElementById("girlcommunity");

bodytoanbox.addEventListener("click", function() {
	bodytoanbox.classList.add('active');
	fatlossbox.classList.remove('active');
	healthylifebox.classList.remove('active');
	girlcommunitybox.classList.remove('active');
	
	bodytoaningtxt.style= "display:block;";
	fatlosstxt.style= "display:none;";
	healthylifetxt.style= "display:none;";
	girlcommunitytxt.style= "display:none;";
	// bodytoaningtxt.innerHTML= "Hello world";
  });
  
  fatlossbox.addEventListener("click", function() {
	bodytoanbox.classList.remove('active');
	fatlossbox.classList.add('active');
	healthylifebox.classList.remove('active');
	girlcommunitybox.classList.remove('active');
	
	bodytoaningtxt.style= "display:none;";
	fatlosstxt.style= "display:block;";
	healthylifetxt.style= "display:none;";
	girlcommunitytxt.style= "display:none;";
	
	// fatlosstxt.innerHTML= "fatloss content";
});

healthylifebox.addEventListener("click", function() {
	bodytoanbox.classList.remove('active');
	fatlossbox.classList.remove('active');
	healthylifebox.classList.add('active');
	girlcommunitybox.classList.remove('active');

	bodytoaningtxt.style= "display:none;";
	fatlosstxt.style= "display:none;";
	healthylifetxt.style= "display:block;";
	girlcommunitytxt.style= "display:none;";
	
	// healthylifetxt.innerHTML= "healthylife content";
});

girlcommunitybox.addEventListener("click", function() {
	bodytoanbox.classList.remove('active');
	fatlossbox.classList.remove('active');
	healthylifebox.classList.remove('active');
	girlcommunitybox.classList.add('active');
	
	bodytoaningtxt.style= "display:none;";
	fatlosstxt.style= "display:none;";
	healthylifetxt.style= "display:none;";
	girlcommunitytxt.style= "display:block;";
	
	// girlcommunitytxt.innerHTML= "girlcommunitytxt content";
  });

  // Testimonial SLider

  var slideIndex = 1;
  showSlides(slideIndex);
//   showSlides2(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
	 showSlides2(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
	 showSlides2(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
  }
  
//   function showSlides2(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides2");
// 	var dots = document.getElementsByClassName("dot2");
// 	if (n > slides.length) {slideIndex = 1}    
// 	if (n < 1) {slideIndex = slides.length}
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";  
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";  
// 	dots[slideIndex-1].className += " active";
//   }





// automatic rotation

var slideIndex = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
} 



  // modal js starts from here

  $(".info-item .btn").click(function(){
	$(".containermodal").toggleClass("log-in");
  });
  $(".containermodal-form .btn").click(function(){
	$(".containermodal").addClass("active");
  });

  // modal js ends here

  $(".closebtn").click(function(e){
	// e.preventDefault();
	  $(".modalbox").removeClass("show");
	  
  })
  $(".modelopener").click(function(e){
	// e.preventDefault();
	  $(".modalbox").addClass("show");
  })




// menu toggle

$(".nav-btn").click(function(){
	$(".navbar-collapse").toggleClass("collapse"),
	$(".header").toggleClass("navbar-expand");
  });




// theCanvas.onkeydown = function (e) {
//     if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
//         e.view.event.preventDefault();
//     }
// }