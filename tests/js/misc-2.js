/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */

$('floor-1').innerText = '$math.floor(15.6) = ' + $math.floor(15.6);
$('floor-2').innerText = '$math.floor(93.2) = ' + $math.floor(93.2);

$('celi-1').innerText = '$math.celi(54.2) = ' + $math.celi(54.2);
$('celi-2').innerText = '$math.celi(82.9) = ' + $math.celi(82.9);

$('finite-1').innerText = '$math.isFinite(Math.pow(10, 99)) = ' + $math.isFinite(Math.pow(10, 99));
$('finite-2').innerText = '$math.isFinite("2010-02-28") = ' + $math.isFinite("2010-02-28");

$('isFact-1').innerText = '$math.isFactor(4, 24) = ' + $math.isFactor(4, 24);
$('isFact-2').innerText = '$math.isFactor(5, 37) = ' + $math.isFactor(5, 37);

$('isMult-1').innerText = '$math.isMultiple(1024, 64) = ' + $math.isMultiple(1024, 64);
$('isMult-2').innerText = '$math.isMultiple(965, 100) = ' + $math.isMultiple(965, 100);
$('isMult-3').innerText = '$math.isMultiple(125, 5, 7) = ' + $math.isMultiple(125, 5, 7);