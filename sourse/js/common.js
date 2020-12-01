const JSCCommon = {


	ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) document.body.innerHTML += '<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>'
	},

};
function eventHandler() {
	JSCCommon.ifie();
	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,

	}
	const swiperRew = new Swiper('.sRews__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 1,
		navigation: {
			nextEl: '.sRews .swiper-button-next',
			prevEl: '.sRews .swiper-button-prev',
		},
		pagination: {
			el: '.sRews .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	//sQusetions js
	let qItem = document.querySelectorAll(".q-item-js");
	qItem.forEach(function (el) {
		el.addEventListener('click', function () {
			let allItems = document.querySelectorAll('.q-item-js');
			let self = this;

			for (let item of allItems) {
				let currContent = item.querySelector('.q-content-js');

				if (item === self) {
					item.classList.toggle('active');
					currContent.classList.toggle('active');
				}
				else {
					item.classList.remove('active');
					currContent.classList.remove('active');
				}

			}

		})
	})
	let videoBtn = document.querySelector(".sVideo__video:not(.active)");

	videoBtn.addEventListener('click', function () {

		this.classList.add("active");
		this.innerHTML += this.dataset.src;
	})

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 100);
}