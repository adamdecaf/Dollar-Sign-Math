/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-25
 */

$('fraction-1').innerText = '$math.fraction(.42) = ' + $math.fraction(.42);
$('fraction-2').innerText = '$math.fraction(.63, true) = ' + $math.fraction(.63, true);
$('fraction-3').innerText = '$math.fraction(1.10) = ' + $math.fraction(1.10);
$('fraction-4').innerText = '$math.fraction(.5) = ' + $math.fraction(.5);

$('mixed-1').innerText = '$math.mixedNumber(5, 2) = ' + $math.mixedNumber(5, 2);
$('mixed-2').innerText = '$math.mixedNumber(21, 3) = ' + $math.mixedNumber(21, 3);
$('mixed-3').innerText = '$math.mixedNumber(11, 5, true) = ' + $math.mixedNumber(11, 5, true);
$('mixed-4').innerText = '$math.mixedNumber(8, 2, true) = ' + $math.mixedNumber(8, 2, true);

$('dec-1').innerText = '$math.decimal(16, 25) = ' + $math.decimal(16, 25);
$('dec-2').innerText = '$math.decimal(25, 5) = ' + $math.decimal(25, 5);

$('reduce-1').innerText = '$math.reduce([12, 24]) = ' + $math.reduce([12, 24]);
$('reduce-2').innerText = '$math.reduce([21,7]) = ' + $math.reduce([21,7]);