/*
GreedyNav.js - https://github.com/lukejacksonn/GreedyNav
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

$(document).ready(() => {
	const $btn = $('nav.greedy-nav button');
	const $vlinks = $('nav.greedy-nav .visible-links');
	const $hlinks = $('nav.greedy-nav .hidden-links');

	let numOfItems = 0;
	let totalSpace = 0;
	const closingTime = 1000;
	const breakWidths = [];

  // Get initial state
	$vlinks.children().outerWidth((i, w) => {
		totalSpace += w;
		numOfItems += 1;
		breakWidths.push(totalSpace);
	});

	let availableSpace, numOfVisibleItems, requiredSpace, timer;

	function check() {
    // Get instant state
		availableSpace = $vlinks.width() - 10;
		numOfVisibleItems = $vlinks.children().length;
		requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enough space
		if (requiredSpace > availableSpace) {
			$vlinks.children().last().prependTo($hlinks);
			numOfVisibleItems -= 1;
			check();
      // There is more than enough space
		} else if (availableSpace > breakWidths[numOfVisibleItems]) {
			$hlinks.children().first().appendTo($vlinks);
			numOfVisibleItems += 1;
			check();
		}
    // Update the button accordingly
		$btn.attr('count', numOfItems - numOfVisibleItems);
		if (numOfVisibleItems === numOfItems) {
			$btn.addClass('hidden');
		} else {
			$btn.removeClass('hidden');
		}
	}

  // Window listeners
	$(window).resize(() => {
		check();
	});

	$btn.on('click', function () {
		$hlinks.toggleClass('hidden');
		$(this).toggleClass('close');
		clearTimeout(timer);
	});

	$hlinks.on('mouseleave', () => {
    // Mouse has left, start the timer
		timer = setTimeout(() => {
			$hlinks.addClass('hidden');
			$btn.toggleClass('close');
		}, closingTime);
	}).on('mouseenter', () => {
    // Mouse is back, cancel the timer
		clearTimeout(timer);
	});

	check();
});
