/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */

$('modulus').innerText = '$math.modulus(75, 10) = ' + $math.modulus(75, 10);

$('rounding').innerText = '$math.round(122.5213) = ' + $math.round(122.5213);
$('rounding-2').innerText += '$math.round(-7536.242, 5) = ' + $math.round(-7536.242, 5);
$('rounding-3').innerText += '$math.round(5356.2362563, -2) = ' + $math.round(5356.2362563, -2);

$('positive').innerText = '$math.positive(12) = ' + $math.positive(12).toString();
$('positive-2').innerText = '$math.positive(-37.5) = ' + $math.positive(-37.5).toString();

$('absolute-value').innerText = '$math.abs(-52) = ' + $math.abs(-52);
$('absolute-value-2').innerText = '$math.abs(42.75) = ' + $math.abs(42.75);

$('min').innerText = '$math.min([5,7,2,8,1]) = ' + $math.min([5,7,2,8,1]);
$('max').innerText = '$math.max([5,7,2,8,1]) = ' + $math.max([5,7,2,8,1]);

$('between-1').innerText = '$math.between(5, 1, 10) = ' + $math.between(5, 1, 10).toString();
$('between-2').innerText = '$math.between(12, 1, 10) = ' + $math.between(12, 1, 10).toString();