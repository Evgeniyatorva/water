window.onload = function () {

// slider

	function slider () {
		var slider = document.getElementById('slider');

		var list = slider.querySelector("ul");

		var width = 195 + 20;
		var count = 1;
		var position = 0;

		var prev = slider.querySelector('.slider__prev');
		var next = slider.querySelector('.slider__next');

		next.onclick = function () {
			position = position - width * count;	
			if (position < -860 && window.innerWidth >= 1200 ) {
				position = 0;
			} else if (position < -1075 && window.innerWidth <= 1200 && window.innerWidth >= 992) {
				position = 0;
			} else if (position < -1290 && window.innerWidth <= 992 && window.innerWidth >= 598) {
				position = 0;
			} else if (position < -1505 && window.innerWidth <= 598 && window.innerWidth >= 0) {
				position = 0;
			}

			list.style.left = position + 'px';
		}

		prev.onclick = function () {
			if (position == 0 && window.innerWidth >= 1200) {
				position = -860 - width;		
			} else if (position == 0 && window.innerWidth <= 1200 && window.innerWidth >= 992) {
				position = -1075 - width;
			} else if (position == 0 && window.innerWidth <= 992 && window.innerWidth >= 598) {
				position = -1290 - width;
			} else if (position == 0 && window.innerWidth <= 598 && window.innerWidth >= 0) {
				position = -1505 - width;
			}
			position = position + width * count;
			list.style.left = position + 'px';
		}
	}

	slider();




window.onscroll = function () {

//header
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	function header () {
		var header = document.querySelector('.header');

		if (scrollTop >= 50) {
			header.classList.add('header_scroll');
		} else if (scrollTop < 200) {
			header.classList.remove('header_scroll');
		}
	}
	header ();




// arrow-top
	function arrowTop () {
		var arrow = document.getElementById('arrow-top');

		if (scrollTop >= 550) {
			arrow.classList.add('arrow-show');
		} else if (scrollTop <= 550) {
			arrow.classList.remove('arrow-show');
		}

		arrow.addEventListener('click', function () {
			window.scrollTo(0, 0);
		})
	}
	arrowTop ();

	progressBar ();
}


// hamburger-menu
	function hamburger () {
		var hamb = document.querySelector('.hamburger-menu');
		var menu = document.querySelector('.header__menu');
		var menuClass = menu.classList;

		hamb.addEventListener('click', function () {
			if (menuClass.contains('menu-block')) {
				menuClass.remove('menu-block');
			} else {
				menuClass.add('menu-block');
			}			
		});
	}

	hamburger();


// progress-bar
	function progressBar () {
		var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scroll = (windowScroll / documentHeight) * 100;
		var bar = document.getElementById('bar');
		bar.style.width = scroll + '%';
	}	
}




