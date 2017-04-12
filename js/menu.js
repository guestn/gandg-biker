// elements //

var menuItems = document.querySelectorAll('a');
var menuPage = document.getElementById('menu')
var menuButton = document.querySelector('.menu-button');
var slider = document.querySelector('#portfolio')
var figures = document.querySelectorAll('figure');
var article = document.querySelector('#article-content')
var statusMessage = document.getElementById('statusMessage');
var firstFormInput = document.getElementById('input-name')
var allFormInputs = document.querySelectorAll('input, textarea')

var menuActive = false;

var menuAnimDuration = 1000;



// menu-opening/closing //

var menuMorphing = anime({
  targets: '#menu-expander #morpher',
	d: [
  	{value: "M21.065,91.559L12.447,86.319L6.546,81.279L0,80.529L0,100L24.32,100L23.48,94.925L21.065,91.559Z"},
		{value:"M33.539,67.615L24.32,60.597L10.254,62.929L0,47.865L0,100L69.593,100L37.564,83.119L33.539,67.615Z" },
		{value:"M83.714,47.865L62.342,47.865L32.271,37.204L0,7.396L0,100L94.785,100L90.704,60.385L83.714,47.865Z" },
		{value:"M82.863,28.993L61.74,10.1L34.796,0L0,0L0,100L100,100L100,59.242L82.863,28.993Z" },
		{value:"M100,0L82.991,0L69.593,0L0,0L0,100L100,100L100,59.242L100,0Z" }
  ],
  opacity: [
	 	{value:0.3},
	  {value:0.4},
		{value:0.6},
	  {value:0.8},
	  {value:0.9} 
  ],
  easing: 'easeInQuad',
  duration: menuAnimDuration,
  loop: false,
  autoplay: false,
  direction: 'alternate',
})

menuButton.addEventListener('click', onMenuButtonClick)

function onMenuButtonClick() {
	if (menuActive) {
		menuMorphing.play();
		menuMorphing.reverse() 
	} else {
		menuMorphing.play();
	}
	
	menuMorphing.complete = function() { 
		menuActive = !menuActive;

	};
	
  document.body.classList.toggle('menu-active')
  window.history.pushState(null, document.title, '/');
  menuPage.className = 'active-starter';
 
	console.log(menuActive)
}





// nav-menu //


for (var i=0; i<menuItems.length; i++) {
	console.log(menuItems)
	menuItems[i].addEventListener('click', onNavClick, false)
}

function onNavClick(e) {
	//console.log(e.target.className);
	//e.preventDefault();

	if (e.target.className.includes('internal-link')) {
		e.preventDefault();
		console.log(e.target.pathname.slice(1))
		var pageName = e.target.pathname.slice(1);
		menuPage.className = 'active-' + pageName;
		window.history.pushState(null, document.title, '/' + pageName);
	
		// reset stuff:
		if (pageName == 'contact') resetForm(true)
	} else {
		return false;
	}
	
}







// portfolio //


for (var i=0; i<figures.length; i++) {
  figures[i].addEventListener('click', focus)
}

function focus(e){
  var sel = e.target.id || e.target.parentNode.id
  sel = sel.split('-').pop()
  console.log(sel)
    slider.classList = 'active-'+sel;
  for (var i=0; i < figures.length; i++) {
    figures[i].classList='';
  }
  figures[sel-1].classList = 'active';
  console.log(figures[sel-1].childNodes[4])
  article.innerHTML = figures[sel-1].childNodes[5].innerHTML;
}
 
 
 
 
 
 
  
  
  
// form //

document.getElementById('sendForm').addEventListener('click', function(e) {
	e.preventDefault();
	console.log('click')


	var inputName = document.getElementById("input-name").value;
	var inputEmail = document.getElementById("input-email").value;
	var inputMsg = document.getElementById("input-message").value;

	if (inputName=='' ||inputEmail==''||inputMsg=='') {
		statusMessage.classList.remove('hidden')
		statusMessage.innerHTML = 'Please complete all the fields';
		return false;
	}
	
	$.ajax({
    url: 'https://formspree.io/' + 'nicholas.guest' + '@' + 'gmail' + '.' + 'com', 
    method: 'POST',
    data: {
	    'Name': inputName,
	    'Email' : inputEmail,
	    'Message' : inputMsg
		},
    dataType: 'json',
    beforeSend: function(resp) {
	    console.log('sending')
	    statusMessage.classList.remove('hidden')
			statusMessage.innerHTML = 'Message Sending ...';
  	},
		success: function(resp) {
			console.log('success: ', resp)
			statusMessage.classList.remove('hidden')
			statusMessage.innerHTML = 'Thanks! We will respond shortly';
			inputName = inputEmail = inputMsg = '';
			resetForm(false);
  	},
		error: function(resp) {
							console.log('error: ', resp)
	    statusMessage.classList.remove('hidden');
			statusMessage.innerHTML = 'Unfortunately something went wrong- please try again';

  	}	
  });
  
  return false;

})

statusMessage.addEventListener('click', function(e) {
  statusMessage.classList.add('hidden');
})


function resetForm(statusHidden) {
	//firstFormInput.focus();
	for (var i=0; i<allFormInputs.length; i++) {
		allFormInputs[i].value = '';
	}
	if (statusHidden) statusMessage.classList.add('hidden');
}
