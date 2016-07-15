$(function () {
	var iframe = $('#iframe');

	$('#btn-inc').on('click', function () {
		iframe.height(1.1 * iframe.height());
	});

	$('#btn-dec').on('click', function () {
		iframe.height(.9 * iframe.height());
	});
});