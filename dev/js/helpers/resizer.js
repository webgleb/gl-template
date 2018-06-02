// window.cust = window.cust ? window.cust : {};
var breakPoint = false,
	bp_XS      = 576,
	bp_SM      = 768,
	bp_MD      = 992,
	bp_LG      = 1240,
	body       = $('body');

$(window).on('load', function(){resizer();});
$(window).on('resize', function(){resizer();});

function resizer(){
	var ww = window.innerWidth;
	// var ww = body.outerWidth();
	if (ww < bp_XS) {windowXS();};
	if (ww >= bp_XS && ww < bp_SM) {windowSM();};
	if (ww >= bp_SM && ww < bp_MD) {windowMD();};
	if (ww >= bp_MD && ww < bp_LG) {windowLG();};
	if (ww >= bp_LG) {windowXL();};
};

function windowXS(){
	if (breakPoint != 'xs') {
		breakPoint = 'xs';
		body.trigger('resize_xs_once');
	};
	body.trigger('resize_xs');
};

function windowSM(){
	if (breakPoint != 'sm') {
		breakPoint = 'sm';
		body.trigger('resize_sm_once');
	};
	body.trigger('resize_sm');
};

function windowMD(){
	if (breakPoint != 'md') {
		breakPoint = 'md';
		body.trigger('resize_md_once');
	};
	body.trigger('resize_md');
};

function windowLG(){
	if (breakPoint != 'lg') {
		breakPoint = 'lg';
		body.trigger('resize_lg_once');
	};
	body.trigger('resize_lg');
};

function windowXL(){
	if (breakPoint != 'xl') {
		breakPoint = 'xl';
		body.trigger('resize_xl_once');
	};
	body.trigger('resize_xl');
};
resizer();