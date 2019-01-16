document.addEventListener('DOMContentLoaded', function () {
	/////////////////////////////////
	//INTIALIZE MATERIAL COMPONENTS//
	/////////////////////////////////
	var slider_options = {
		interval: 10000
	};
	var modal_options = {
		preventScrolling: true
	};
	var sliders = document.querySelectorAll('.slider');
	var sliderInstances = M.Slider.init(sliders, slider_options);
	var modals = document.querySelectorAll('.modal');
	var modalInstances = M.Modal.init(modals, modal_options);
});