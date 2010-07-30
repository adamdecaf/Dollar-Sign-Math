/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */
 
$('mean').innerText = '$math.mean([1,2,3,4,5]) = ' + $math.mean([1,2,3,4,5]);

$('medium-1').innerText = '$math.medium([1,2,3,4]) = ' + $math.medium([1,2,3,4]);
$('medium-2').innerText = '$math.medium([1,2,3,4,5]) = ' + $math.medium([1,2,3,4,5]);

$('mode-1').innerText = '$math.mode([0,1,1,1,2,2,3,4,5]) = ' + $math.mode([0,1,1,1,2,2,3,4,5]);
$('mode-2').innerText = '$math.mode([0,1,1,1,2,2,2,2,2,3,4,5]) = ' + $math.mode([0,1,1,1,2,2,2,2,2,3,4,5]);
$('mode-3').innerText = '$math.mode([-12,5,-20,0,23,-12]) = ' + $math.mode([-12,5,-20,0,23,-12]);

$('stdev-1').innerText = '$math.stDev([10,12,14,15,16,17]) = ' + $math.stDev([10,12,14,15,16,17]);
$('stdev-2').innerText = '$math.stDev([12.21,45.675,20.15,34.24]) = ' + $math.stDev([12.21,45.675,20.15,34.24]);

$('var-1').innerText = '$math.variance([12,34,53,63,23]) = ' + $math.variance([12,34,53,63,23]);
$('var-2').innerText = '$math.variance([576,341,866,343,751,999]) = ' + $math.variance([576,341,866,343,751,999]);