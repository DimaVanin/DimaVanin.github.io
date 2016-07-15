$(function () {
	var iframeW = $('#iframe-wrapper');

	$('#btn-inc').on('click', function () {
		iframeW.height(1.1 * iframeW.height());
	});

	$('#btn-dec').on('click', function () {
		iframeW.height(.9 * iframeW.height());
	});
});