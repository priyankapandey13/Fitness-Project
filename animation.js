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



let Fat = document.getElementById("Fat");// original code
let Fit = document.getElementById("Fit");// original code

var action = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
.to(Fat,0,{attr:{d:"M8.29,109.57c-4.37-32.33,2.43-48.73,8.37-63.08,2.12-5.12,5.87-14.62,7.19-24.31C25,14.11,24.14,5.91,23.68,0h3.1c.48,6.36,1.22,15,0,23.39-1.37,9.7-5.15,19.08-7.3,24.29l-.69,1.66c30.77,9.46,59.43,8.92,86.32-.06l-.57-1.4c-2.08-5.06-7.53-14.07-8.9-23.5-1.26-8.7.78-17.76,1.55-24.38h3.11c-.75,6.31-2.84,15.15-1.62,23.69,1.32,9.24,6.71,18.12,8.72,23,5.93,14.42,12.7,30.86,8.38,62.86h-3.13c3.48-25.45-.18-40.85-4.77-53.26C92.14,62.91,79.61,73,68.22,85.62a1.43,1.43,0,0,1,0,.65,119.14,119.14,0,0,0-2.07,16.8c-.13,2.11-.22,4.28-.28,6.49h-3.1c.06-2.28.15-4.51.29-6.68A135.51,135.51,0,0,1,64.5,89.34H58.87a119.57,119.57,0,0,1,1.61,13.43c.15,2.2.26,4.47.33,6.79h-3.1c-.07-2.24-.17-4.45-.32-6.59A104.25,104.25,0,0,0,55.06,86.3a.59.59,0,0,1,0-.13c-11.37-13.32-23.93-23-39.14-29.39C11.41,69,8,84.35,11.41,109.57ZM15.6,22.1,9.77,27.76A1.24,1.24,0,0,1,8,26l3.71-3.6H1.24a1.24,1.24,0,1,1,0-2.48H11.75L8,16.31a1.24,1.24,0,0,1,1.73-1.77l5.83,5.67a1.25,1.25,0,0,1,.45.95,1.22,1.22,0,0,1-.45.94Zm95.53.29,3.71,3.6a1.24,1.24,0,1,1-1.73,1.77l-5.83-5.66a1.25,1.25,0,0,1-.45-1,1.22,1.22,0,0,1,.45-.95l5.83-5.67a1.24,1.24,0,0,1,1.73,1.77l-3.71,3.6h10.51a1.24,1.24,0,0,1,0,2.48H111.13ZM62,43.71c1.09,0,2,.66,2,1.47s-.88,1.47-2,1.47-2-.66-2-1.47a1.79,1.79,0,0,1,2-1.47Z"}, ease:Power2.easeInOut}, "0")
.to(Fit,0,{attr:{d:"M62.9,90.47a122.84,122.84,0,0,0-1,12.57c-.15,2.2-.17,4.2-.24,6.52H63.5c.07-2.24.27-4.45.42-6.59.43-6.27.24-7.74,1.36-12.42,0,0,1.28-2.42,1.28-2.46,11.37-13.32,28.27-28,43.48-34.31,4.49,12.26,4.95,30.57,1.49,55.79h3.12c4.37-32.33,3.57-48.73-2.37-63.08a32.81,32.81,0,0,0-1-24.36C107.84,14.21,103.84,7.32,100.52,0H98.39c3,6.77,8.34,15.45,11.66,23.74,2.73,5.86,3.19,16.6-.63,23.94-1.16,1.51-10.11,4.94-10.69,5.26-12,3.69-22.28,5.86-32.17,6.39H56.38c-9.89-.53-20.16-2.7-32.17-6.39-.58-.32-9.53-3.75-10.69-5.26-3.82-7.34-3.36-18.08-.63-23.94,3.32-8.29,8.62-17,11.66-23.74H22.43c-3.32,7.32-7.32,14.21-10.81,22.13a32.81,32.81,0,0,0-1,24.36C4.72,60.84,3.92,77.24,8.29,109.57h3.12C8,84.35,8.41,66,12.9,53.78c15.21,6.35,32.11,21,43.48,34.31,0,0,1.27,2.42,1.28,2.46,1.12,4.68.93,6.15,1.36,12.42.15,2.14.36,4.35.43,6.59h1.87c-.07-2.32-.09-4.32-.24-6.52a122.84,122.84,0,0,0-1-12.57Z, M62.05,43.71c1.09,0,2,.66,2,1.47s-.88,1.47-2,1.47-2-.66-2-1.47a1.79,1.79,0,0,1,2-1.47Z"}, ease:Power2.easeInOut}, "1")


// apple with tape

let AppleWtape = document.getElementById("AppleWtape");// original code
let Apple = document.getElementById("Apple");// original code

var action2 = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
.to(AppleWtape,0,{attr:{d:"M98.1,95.7c0.4-0.7,0.8-1.4,1.1-2.1c1-1.9,1.9-3.8,2.7-5.7c3.8-8.1,5.6-17,5.1-26c-0.1-1.1-0.2-2.1-0.4-3.2c-1.5-9.3-6.7-17.7-17.3-23.5c-3.4-1.8-7.2-2.9-11.1-3.3c-4.6-0.4-9.2-0.1-13.6,1l-0.2,0.1c-1.5,0.5-3,0.9-4.5,1.2c-0.8,0.1-1.7,0.2-2.5,0.3c-0.6-5.8,0-11.6,1.7-17.2c1.7-5.2,4.7-9.8,8.7-13.5c0.8-0.9,0.8-2.3-0.1-3.2c-0.8-0.7-2-0.8-2.9-0.1c-4.6,4.2-8.1,9.5-10,15.4c-0.3,1-0.6,2.1-0.9,3.2C48.2,8.1,38,2.3,21,4.9l-6.5,0.7c4.8,9.9,10.6,19.9,22.7,21.4c4.9,0.6,10.3-0.6,16-3.9c-0.5,3.8-0.6,7.7-0.2,11.5c-0.9-0.1-1.8-0.2-2.7-0.3c-1.7-0.3-3.5-0.7-5.2-1.2l0,0C39,31,32.4,30.8,26.1,32.4c-6.6,1.9-12.3,6.1-16.1,11.7C6.4,49.5,4.2,55.6,3.5,62C2,71.8,5,82.6,9.8,91.6c2.6,4.6,5.4,9,8.6,13.2c3.5,4.7,7.6,9,12,12.9l0.2,0.1l0,0c4.8,3.4,9.3,4.9,13.7,5c3.9,0,7.8-0.9,11.3-2.8c2.7,1.2,5.5,2,8.5,2.3c2.8,0.3,5.7,0,8.5-0.8C83.7,117.5,91.6,107.8,98.1,95.7z M64.4,118c-2.8-0.3-5.5-1.1-8-2.4c-0.6-0.3-1.4-0.3-2,0.1c-3.1,1.8-6.5,2.7-10.1,2.8c-3.5-0.1-7.1-1.3-11.1-4.1c-4.2-3.7-7.9-7.7-11.2-12.2c-3-4.1-5.8-8.3-8.3-12.8C8,81,7.3,67.9,8.1,62c0.6-4.2,2.7-11,5.6-15.2c3.2-4.8,8-8.4,13.6-10c5.4-1.4,11.2-1.2,16.5,0.6l0,0c1.9,0.6,3.8,1,5.8,1.3c1.9,0.3,3.7,0.4,5.6,0.4h0.4c3.5-0.1,6.9-0.7,10.2-1.8c4-0.9,8-1.2,12.1-0.9c3.3,0.3,6.5,1.2,9.4,2.8c9.2,4.9,13.7,12.2,15,20.2c0.1,0.8,0.2,1.6,0.3,2.5c0.6,8.4-1.5,17.1-5.6,26c-0.6,1.2-1.2,2.4-1.8,3.7c-0.7,1.4-3.2,5.5-3.2,5.5c-2.5,4-5.3,7.8-8.4,11.3c-3.5,3.9-7.3,7.1-11,8.5C70.1,117.9,67.3,118.3,64.4,118z"}, ease:Power2.easeInOut}, "1")
.to(Apple,0,{attr:{d:"M64.87,0.59c0.91-0.84,2.33-0.78,3.17,0.13c0.84,0.91,0.78,2.33-0.13,3.17c-3.99,3.69-6.95,8.15-8.7,13.5 c-1.62,4.92-2.24,10.62-1.74,17.18c0.83-0.07,1.66-0.17,2.49-0.31c1.5-0.26,3.01-0.64,4.53-1.16l0,0c0.08-0.03,0.16-0.05,0.24-0.07 c5.03-1.13,9.55-1.44,13.63-1.04c4.15,0.4,7.84,1.54,11.12,3.3C100.1,41,105.25,49.4,106.75,58.78c0.17,1.04,0.29,2.1,0.36,3.16 h2.64c0.88,0,1.6,0.72,1.6,1.6c0,0.15-0.02,0.29-0.06,0.43l-5.39,22.7c-0.17,0.74-0.83,1.23-1.55,1.23h-2.37 c-0.83,1.95-1.75,3.86-2.72,5.73c-0.35,0.66-0.72,1.35-1.12,2.06l16.91,0c0.88,0,1.6,0.72,1.6,1.6c0,0.55-0.28,1.04-0.71,1.33 l-12.84,9.68l12.96,10.52c0.68,0.56,0.79,1.56,0.23,2.24c-0.31,0.39-0.77,0.59-1.24,0.59v0.01H72.47c-2.9,0.82-5.72,1.03-8.47,0.75 c-2.93-0.29-5.76-1.13-8.49-2.33c-3.59,1.8-7.34,2.87-11.31,2.79c-4.37-0.09-8.92-1.57-13.69-4.99l0-0.01 c-0.06-0.04-0.12-0.09-0.17-0.14c-4.75-4.15-8.64-8.5-11.97-12.91c-3.31-4.38-6.08-8.84-8.58-13.24c-0.69-1.22-1.33-2.45-1.91-3.69 H3.52c-0.86,0-1.56-0.68-1.6-1.52L0.01,63.68c-0.07-0.88,0.58-1.65,1.46-1.72l0.13-0.01h1.94c0.78-6.63,3.02-12.76,6.49-17.77 c3.91-5.65,9.37-9.86,16.05-11.75c5.6-1.59,12.02-1.54,19.06,0.67l0,0.01c1.72,0.52,3.45,0.93,5.16,1.19 c0.89,0.14,1.77,0.24,2.66,0.3c-0.29-4.15-0.17-7.99,0.34-11.55c-5.77,3.27-11.11,4.49-16.05,3.89 C25.15,25.45,19.3,15.39,14.55,5.53l6.48-0.67c17-2.6,27.15,3.24,33,14.36c0.26-1.09,0.56-2.16,0.9-3.19 C56.94,9.89,60.32,4.8,64.87,0.59L64.87,0.59L64.87,0.59z M97.06,84.71v-4.83c0-0.89,0.72-1.6,1.6-1.6c0.89,0,1.6,0.72,1.6,1.6 v4.83h2.81l4.65-19.57H3.34l1.65,19.57h3.97v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66v-4.83 c0-0.89,0.72-1.6,1.6-1.6c0.89,0,1.6,0.72,1.6,1.6v4.83h6.19v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h7.34v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h6.19v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h6.27v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75H97.06 L97.06,84.71z M88.85,87.91l-0.05,0l-0.05,0l-9.28,0c-0.05,0-0.1,0.01-0.15,0.01c-0.05,0-0.1,0-0.15-0.01h-9.68l-0.04,0l-0.04,0 l-9.21,0c-0.05,0-0.09,0.01-0.14,0.01c-0.05,0-0.09,0-0.14-0.01h-9.71H50.2H39.82c-0.05,0-0.09,0.01-0.14,0.01 c-0.05,0-0.09,0-0.14-0.01h-9.72h-0.01h-2.15c0.62,0.99,1.29,1.95,2.01,2.89c2.4,3.14,5.29,5.98,8.51,8.61 c0.96,0.78,1.11,2.19,0.33,3.16c-0.78,0.96-2.19,1.11-3.16,0.32c-3.49-2.85-6.63-5.93-9.25-9.37c-1.35-1.77-2.57-3.64-3.63-5.61 h-1.91c-0.05,0-0.09,0.01-0.14,0.01c-0.05,0-0.09,0-0.14-0.01h-7.39c0.26,0.49,0.52,0.98,0.8,1.47c2.41,4.23,5.07,8.52,8.26,12.75 c3.14,4.16,6.79,8.25,11.21,12.13c3.98,2.84,7.66,4.07,11.12,4.14c3.49,0.07,6.84-1.01,10.09-2.77c0.65-0.36,1.4-0.35,2.03-0.06 l0,0c2.62,1.24,5.3,2.11,8.04,2.39c2.69,0.27,5.46-0.03,8.34-1.11c3.67-1.38,7.46-4.59,10.95-8.47c3.17-3.52,6.06-7.56,8.38-11.28 l0.19-0.43c0.1-0.23,0.25-0.42,0.42-0.57c0.97-1.6,1.83-3.13,2.56-4.52c0.63-1.2,1.23-2.42,1.79-3.65H88.85L88.85,87.91z M102.62,61.95c-0.07-0.83-0.17-1.65-0.3-2.46c-1.29-8.06-5.75-15.29-14.96-20.22c-2.77-1.49-5.9-2.45-9.44-2.79 c-3.58-0.35-7.58-0.07-12.07,0.92c-1.71,0.58-3.43,1.01-5.16,1.31c-1.67,0.28-3.36,0.43-5.06,0.46l0,0c-0.13,0.01-0.26,0.01-0.38,0 c-1.88,0.01-3.76-0.14-5.63-0.44c-1.94-0.3-3.87-0.75-5.8-1.34l-0.02-0.01l0,0.01c-6.17-1.94-11.72-2-16.51-0.64 c-5.63,1.6-10.24,5.17-13.57,9.98C10.76,51,8.81,56.24,8.07,61.95L102.62,61.95L102.62,61.95z M110.27,98.9H96.26 c-2.51,4.09-5.69,8.58-9.19,12.47c-2.48,2.75-5.14,5.23-7.88,7.09h31.35l-10.97-8.91c-0.13-0.09-0.25-0.2-0.35-0.34 c-0.53-0.7-0.39-1.7,0.31-2.24L110.27,98.9L110.27,98.9z"}, ease:Power2.easeInOut}, "0")



// healthy lifestyle


let heart = document.getElementById("heart");// original code


var action3 = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
.to(heart,0,{attr:{d:"M57.2,36.5c-11,0-19.9,8.9-19.9,19.9c0,11,8.9,19.9,19.9,19.9c11,0,19.9-8.9,19.9-19.9C77.2,45.4,68.2,36.5,57.2,36.5z M57.3,74c-9.8,0-17.7-7.9-17.7-17.7s7.9-17.7,17.7-17.7s17.7,7.9,17.7,17.7S67,74,57.3,74z"}, ease:Power2.easeInOut}, "1")
// .to(Apple,0,{attr:{d:"M64.87,0.59c0.91-0.84,2.33-0.78,3.17,0.13c0.84,0.91,0.78,2.33-0.13,3.17c-3.99,3.69-6.95,8.15-8.7,13.5 c-1.62,4.92-2.24,10.62-1.74,17.18c0.83-0.07,1.66-0.17,2.49-0.31c1.5-0.26,3.01-0.64,4.53-1.16l0,0c0.08-0.03,0.16-0.05,0.24-0.07 c5.03-1.13,9.55-1.44,13.63-1.04c4.15,0.4,7.84,1.54,11.12,3.3C100.1,41,105.25,49.4,106.75,58.78c0.17,1.04,0.29,2.1,0.36,3.16 h2.64c0.88,0,1.6,0.72,1.6,1.6c0,0.15-0.02,0.29-0.06,0.43l-5.39,22.7c-0.17,0.74-0.83,1.23-1.55,1.23h-2.37 c-0.83,1.95-1.75,3.86-2.72,5.73c-0.35,0.66-0.72,1.35-1.12,2.06l16.91,0c0.88,0,1.6,0.72,1.6,1.6c0,0.55-0.28,1.04-0.71,1.33 l-12.84,9.68l12.96,10.52c0.68,0.56,0.79,1.56,0.23,2.24c-0.31,0.39-0.77,0.59-1.24,0.59v0.01H72.47c-2.9,0.82-5.72,1.03-8.47,0.75 c-2.93-0.29-5.76-1.13-8.49-2.33c-3.59,1.8-7.34,2.87-11.31,2.79c-4.37-0.09-8.92-1.57-13.69-4.99l0-0.01 c-0.06-0.04-0.12-0.09-0.17-0.14c-4.75-4.15-8.64-8.5-11.97-12.91c-3.31-4.38-6.08-8.84-8.58-13.24c-0.69-1.22-1.33-2.45-1.91-3.69 H3.52c-0.86,0-1.56-0.68-1.6-1.52L0.01,63.68c-0.07-0.88,0.58-1.65,1.46-1.72l0.13-0.01h1.94c0.78-6.63,3.02-12.76,6.49-17.77 c3.91-5.65,9.37-9.86,16.05-11.75c5.6-1.59,12.02-1.54,19.06,0.67l0,0.01c1.72,0.52,3.45,0.93,5.16,1.19 c0.89,0.14,1.77,0.24,2.66,0.3c-0.29-4.15-0.17-7.99,0.34-11.55c-5.77,3.27-11.11,4.49-16.05,3.89 C25.15,25.45,19.3,15.39,14.55,5.53l6.48-0.67c17-2.6,27.15,3.24,33,14.36c0.26-1.09,0.56-2.16,0.9-3.19 C56.94,9.89,60.32,4.8,64.87,0.59L64.87,0.59L64.87,0.59z M97.06,84.71v-4.83c0-0.89,0.72-1.6,1.6-1.6c0.89,0,1.6,0.72,1.6,1.6 v4.83h2.81l4.65-19.57H3.34l1.65,19.57h3.97v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66v-4.83 c0-0.89,0.72-1.6,1.6-1.6c0.89,0,1.6,0.72,1.6,1.6v4.83h6.19v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h7.34v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h6.19v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75h6.66 v-4.83c0-0.89,0.72-1.6,1.6-1.6s1.6,0.72,1.6,1.6v4.83h6.27v-7.75c0-0.88,0.72-1.6,1.6-1.6c0.88,0,1.6,0.72,1.6,1.6v7.75H97.06 L97.06,84.71z M88.85,87.91l-0.05,0l-0.05,0l-9.28,0c-0.05,0-0.1,0.01-0.15,0.01c-0.05,0-0.1,0-0.15-0.01h-9.68l-0.04,0l-0.04,0 l-9.21,0c-0.05,0-0.09,0.01-0.14,0.01c-0.05,0-0.09,0-0.14-0.01h-9.71H50.2H39.82c-0.05,0-0.09,0.01-0.14,0.01 c-0.05,0-0.09,0-0.14-0.01h-9.72h-0.01h-2.15c0.62,0.99,1.29,1.95,2.01,2.89c2.4,3.14,5.29,5.98,8.51,8.61 c0.96,0.78,1.11,2.19,0.33,3.16c-0.78,0.96-2.19,1.11-3.16,0.32c-3.49-2.85-6.63-5.93-9.25-9.37c-1.35-1.77-2.57-3.64-3.63-5.61 h-1.91c-0.05,0-0.09,0.01-0.14,0.01c-0.05,0-0.09,0-0.14-0.01h-7.39c0.26,0.49,0.52,0.98,0.8,1.47c2.41,4.23,5.07,8.52,8.26,12.75 c3.14,4.16,6.79,8.25,11.21,12.13c3.98,2.84,7.66,4.07,11.12,4.14c3.49,0.07,6.84-1.01,10.09-2.77c0.65-0.36,1.4-0.35,2.03-0.06 l0,0c2.62,1.24,5.3,2.11,8.04,2.39c2.69,0.27,5.46-0.03,8.34-1.11c3.67-1.38,7.46-4.59,10.95-8.47c3.17-3.52,6.06-7.56,8.38-11.28 l0.19-0.43c0.1-0.23,0.25-0.42,0.42-0.57c0.97-1.6,1.83-3.13,2.56-4.52c0.63-1.2,1.23-2.42,1.79-3.65H88.85L88.85,87.91z M102.62,61.95c-0.07-0.83-0.17-1.65-0.3-2.46c-1.29-8.06-5.75-15.29-14.96-20.22c-2.77-1.49-5.9-2.45-9.44-2.79 c-3.58-0.35-7.58-0.07-12.07,0.92c-1.71,0.58-3.43,1.01-5.16,1.31c-1.67,0.28-3.36,0.43-5.06,0.46l0,0c-0.13,0.01-0.26,0.01-0.38,0 c-1.88,0.01-3.76-0.14-5.63-0.44c-1.94-0.3-3.87-0.75-5.8-1.34l-0.02-0.01l0,0.01c-6.17-1.94-11.72-2-16.51-0.64 c-5.63,1.6-10.24,5.17-13.57,9.98C10.76,51,8.81,56.24,8.07,61.95L102.62,61.95L102.62,61.95z M110.27,98.9H96.26 c-2.51,4.09-5.69,8.58-9.19,12.47c-2.48,2.75-5.14,5.23-7.88,7.09h31.35l-10.97-8.91c-0.13-0.09-0.25-0.2-0.35-0.34 c-0.53-0.7-0.39-1.7,0.31-2.24L110.27,98.9L110.27,98.9z"}, ease:Power2.easeInOut}, "0")




// girl community

let smallercircle = document.getElementById("smaller-circle");// original code
let biggercircle = document.getElementById("bigger-circle");// original code
let crosstop = document.getElementById("cross-top");// original code
let crossbottom = document.getElementById("cross-bottom");// original code
let crossright = document.getElementById("cross-right");// original code
let crossleft = document.getElementById("cross-left");// original code

var action4 = new TimelineMax({repeat:-1, delay:0, repeatDelay:2})
.to(smallercircle,0,{attr:{d:"M55.1,82C42,80.9,31.6,69.9,31.6,56.4c0-14.2,11.5-25.7,25.7-25.7s25.7,11.5,25.7,25.7c0,6.4-2.4,12.3-6.3,16.8c0.3,0.8,0.9,1.3,1.8,1.3c4.2-4.9,6.7-11.2,6.7-18.2c0-15.4-12.5-27.9-27.9-27.9c-15.4,0-27.9,12.5-27.9,27.9C29.3,70.4,39.6,82,53,84c0.6-0.1,2.1-0.4,2.1-0.4S55.2,83,55.1,82z M61.2,84c5.4-0.8,10.2-3,14.2-6.4c0-1-0.5-1.6-1.4-1.7c-4,3.4-9.1,5.6-14.7,6c0,0-0.2,0-0.2,0s0,0.7,0,1L61.2,84z"}, ease:Power2.easeInOut}, "1")
// .to(biggercircle,0,{attr:{d:"44.6,14.2 54.1,14.2 54.1,26.9 60.1,26.9 60.1,14.2 69.6,14.2 69.6,8.2 60.1,8.2 60.1,1.8 54.1,1.8 54.1,8.2 44.6,8.2"}, ease:Power2.easeInOut}, "0")








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
	$(".navbar-collapse").toggleClass("collapse");
	
  });




// theCanvas.onkeydown = function (e) {
//     if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
//         e.view.event.preventDefault();
//     }
// }