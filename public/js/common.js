"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	// modalCall() {
	// 	$(".link-modal").fancybox({
	// 		arrows: false,
	// 		infobar: false,
	// 		touch: false,
	// 		type: 'inline',
	// 		autoFocus: false,
	// 		i18n: {
	// 			en: {
	// 				CLOSE: "Закрыть",
	// 				NEXT: "Вперед",
	// 				PREV: "Назад",
	// 				// PLAY_START: "Start slideshow",
	// 				// PLAY_STOP: "Pause slideshow",
	// 				// FULL_SCREEN: "Full screen",
	// 				// THUMBS: "Thumbnails",
	// 				// DOWNLOAD: "Download",
	// 				// SHARE: "Share",
	// 				// ZOOM: "Zoom"
	// 			},
	// 		},
	// 		beforeLoad: function () {
	// 			document.querySelector("html").classList.add("fixed")
	// 		},
	// 		afterClose: function () {
	// 			document.querySelector("html").classList.remove("fixed")
	// 		},
	// 	});
	// 	$(".modal-close-js").click(function () {
	// 		$.fancybox.close();
	// 	})
	// 	$.fancybox.defaults.backFocus = false;
	// 	const linkModal = document.querySelectorAll('.link-modal');
	// 	function addData() {
	// 		linkModal.forEach(element => {
	// 			element.addEventListener('click', () => {
	// 				let modal = document.querySelector(element.getAttribute("href"));
	// 				const data = element.dataset;
	// 				function setValue(val, elem) {
	// 					if (elem && val) {
	// 						const el = modal.querySelector(elem)
	// 						el.tagName == "INPUT"
	// 							? el.value = val
	// 							: el.innerHTML = val;
	// 						// console.log(modal.querySelector(elem).tagName)
	// 					}
	// 				}
	// 				setValue(data.title, '.ttu');
	// 				setValue(data.text, '.after-headline');
	// 				setValue(data.btn, '.btn');
	// 				setValue(data.order, '.order');
	// 			})
	// 		})
	// 	}
	// 	if (linkModal) addData();
	// },
	// // /modalCall
	// toggleMenu() {
	// 	if (this.btnToggleMenuMobile) {
	// 		this.btnToggleMenuMobile.forEach(element => {
	// 			element.addEventListener('click', () => {
	// 				this.btnToggleMenuMobile.forEach(element => element.classList.toggle("on"));
	// 				this.menuMobile.classList.toggle("active");
	// 				document.body.classList.toggle("fixed");
	// 				document.querySelector('html').classList.toggle("fixed");
	// 				return false;
	// 			});
	// 		});
	// 	}
	// },
	// closeMenu() {
	// 	if (this.menuMobile) {
	// 		this.btnToggleMenuMobile.forEach(element => {
	// 			element.classList.remove("on");
	// 		});
	// 		this.menuMobile.classList.remove("active");
	// 		document.body.classList.remove("fixed");
	// 		document.querySelector('html').classList.remove("fixed");
	// 	}
	// },
	// mobileMenu() {
	// 	if (this.menuMobileLink) {
	// 		this.toggleMenu();
	// 		document.addEventListener('mouseup', (event) => {
	// 			let container = event.target.closest(".menu-mobile--js.active"); // (1)
	// 			if (!container) {
	// 				this.closeMenu();
	// 			}
	// 		}, { passive: true });
	// 		window.addEventListener('resize', () => {
	// 			if (window.matchMedia("(min-width: 992px)").matches) {
	// 				JSCCommon.closeMenu();
	// 			}
	// 		}, { passive: true });
	// 	}
	// },
	// // /mobileMenu
	// // tabs  .
	// tabscostume(tab) {
	// 	let tabs = {
	// 		Btn: [].slice.call(document.querySelectorAll(`.${tab}__btn`)),
	// 		BtnParent: [].slice.call(document.querySelectorAll(`.${tab}__caption`)),
	// 		Content: [].slice.call(document.querySelectorAll(`.${tab}__content`)),
	// 	}
	// 	tabs.Btn.forEach((element, index) => {
	// 		element.addEventListener('click', () => {
	// 			if (!element.classList.contains('active')) {
	// 				let siblings = element.parentNode.querySelector(`.${tab}__btn.active`);
	// 				let siblingsContent = tabs.Content[index].parentNode.querySelector(`.${tab}__content.active`);
	// 				siblings.classList.remove('active');
	// 				siblingsContent.classList.remove('active')
	// 				element.classList.add('active');
	// 				tabs.Content[index].classList.add('active');
	// 			}
	// 		})
	// 	})
	// 	// $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
	// 	// 	$(this)
	// 	// 		.addClass('active').siblings().removeClass('active')
	// 	// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
	// 	// 		.eq($(this).index()).fadeIn().addClass('active');
	// 	// });
	// },
	// /tabs
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").after('<div class="browsehappy">	<p class=" container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p></div>');
		}
	},
	// sendForm() {
	// 	var gets = (function () {
	// 		var a = window.location.search;
	// 		var b = new Object();
	// 		var c;
	// 		a = a.substring(1).split("&");
	// 		for (var i = 0; i < a.length; i++) {
	// 			c = a[i].split("=");
	// 			b[c[0]] = c[1];
	// 		}
	// 		return b;
	// 	})();
	// 	// form
	// 	$("form").submit(function (e) {
	// 		e.preventDefault();
	// 		const th = $(this);
	// 		var data = th.serialize();
	// 		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
	// 		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
	// 		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
	// 		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
	// 		$.ajax({
	// 			url: 'action.php',
	// 			type: 'POST',
	// 			data: data,
	// 		}).done(function (data) {
	// 			$.fancybox.close();
	// 			$.fancybox.open({
	// 				src: '#modal-thanks',
	// 				type: 'inline'
	// 			});
	// 			// window.location.replace("/thanks.html");
	// 			setTimeout(function () {
	// 				// Done Functions
	// 				th.trigger("reset");
	// 				// $.magnificPopup.close();
	// 				// ym(53383120, 'reachGoal', 'zakaz');
	// 				// yaCounter55828534.reachGoal('zakaz');
	// 			}, 4000);
	// 		}).fail(function () { });
	// 	});
	// },
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	},
	animateScroll: function animateScroll() {
		// листалка по стр
		$(" .top-nav li a, .scroll-link").click(function () {
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html, body').animate({
				scrollTop: destination
			}, 1100);
			return false;
		});
	},
	getCurrentYear: function getCurrentYear(el) {
		var now = new Date();
		var currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	}
};
var $ = jQuery;

function eventHandler() {
	var _defaultSl;

	JSCCommon.ifie(); // JSCCommon.modalCall();
	// JSCCommon.tabscostume('tabs');
	// JSCCommon.mobileMenu();
	// JSCCommon.inputMask();
	// JSCCommon.sendForm();

	JSCCommon.heightwindow();
	JSCCommon.animateScroll(); // JSCCommon.CustomInputFile(); 
	// var x = window.location.host;
	// let screenName;
	// screenName = '3.jpg';
	// if (screenName && x === "localhost:3000") {
	// 	$(".footer").after(`<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`);
	// }

	function whenResize() {
		var topH = $("header ").innerHeight();

		if ($(window).scrollTop() > topH) {
			$('.top-nav  ').addClass('fixed');
		} else {
			$('.top-nav  ').removeClass('fixed');
		}
	}

	window.addEventListener('resize', function () {
		whenResize();
	}, {
		passive: true
	});
	whenResize();
	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defaultSl);
	var swiper4 = new Swiper('.sBanners__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 'auto',
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true
	}));
	var swiperRew = new Swiper('.sRews__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
		slidesPerView: 1,
		navigation: {
			nextEl: '.sRews .swiper-button-next',
			prevEl: '.sRews .swiper-button-prev'
		},
		pagination: {
			el: '.sRews .swiper-pagination',
			type: 'bullets',
			clickable: true // renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }

		}
	})); //sQusetions js

	$('.q-item-js').click(function () {
		var allItems = document.querySelectorAll('.q-item-js');
		var self = this;

		var _iterator = _createForOfIteratorHelper(allItems),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var item = _step.value;
				var currContent = item.querySelector('.q-content-js');

				if (item === self) {
					$(item).toggleClass('active');
					$(currContent).slideToggle(function () {
						$(this).toggleClass('active');
					});
				} else {
					$(item).removeClass('active');
					$(currContent).slideUp(function () {
						$(this).removeClass('active');
					});
				}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	});
}

;

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
};