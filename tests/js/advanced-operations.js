/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-28
 */

var x = 1;

$('sum-1').innerText = '$math.summation(function (x) { return x; }, 1, 10) = ' + $math.summation(function (x) { return x; }, 1, 10);
$('sum-2').innerText = '$math.summation(function (x) { return (x * x) + (4 * x); }, 10, 100) = ' + $math.summation(function (x) { return (x * x) + (4 * x); }, 10, 100);
$('sum-3').innerText = '$math.summation(function (x) { return (x * 3) + (x - 2) + x }, 5, 10) = ' + $math.summation(function (x) { return (x * 3) + (x - 2) + x }, 5, 10);
$('sum-4').innerText = '$math.summation(function (x) { return x; }, 1, 10000) = ' + $math.summation(function (x) { return x; }, 1, 10000);

$('prod-1').innerText = '$math.productSeq(function (x) { return x; }, 1, 10) = ' + $math.productSeq(function (x) { return x; }, 1, 10);
$('prod-2').innerText = '$math.productSeq(function (x) { return x + (x * x); }, 1, 20) = ' + $math.productSeq(function (x) { return x + (x * x); }, 1, 5);

$('fact-1').innerText = '$math.factorial(7) = ' + $math.factorial(7);
$('fact-2').innerText = '$math.factorial(10) = ' + $math.factorial(10);
$('fact-3').innerText = '$math.factorial(-5) = ' + $math.factorial(-5);

$('seq-1').innerText = '$math.sequence(0, function (x) { return x+1; }, 10) = ' + $math.sequence(0, function (x) { return x+1; }, 10);
$('seq-2').innerText = '$math.sequence(0, function (x) { return $math.pow(2, x); }, 5) = ' + $math.sequence(0, function (x) { return $math.pow(2, x); }, 5);
