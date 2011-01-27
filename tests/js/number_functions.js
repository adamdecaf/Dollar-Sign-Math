/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-25
 */

$('range-1').innerText = '$math.range([6,2,6,8,2,7,9,10]) = ' + $math.range([6,2,6,8,2,7,9,10]);

$('csl-1').innerText = '$math.csl([1,5,7,8,8,3,5,8]) = ' + $math.csl([1,5,7,8,8,3,5,8]);

$('factors-1').innerText = '$math.factors(24) = ' + $math.factors(24).toString();
$('factors-2').innerText = '$math.factors(42, true) = ' + $math.factors(42, true).toString();
$('factors-3').innerText = '$math.factors(128, true) = ' + $math.factors(128, true).toString();
$('factors-4').innerText = '$math.factors(1000, true) = ' + $math.factors(1000, true).toString();

$('multiples-1').innerText = '$math.multiples(10) = ' + $math.multiples(10).toString();
$('multiples-2').innerText = '$math.multiples(24, 10) = ' + $math.multiples(24, 10).toString();

$('gcf-1').innerText = '$math.gcf(24, 42) = ' + $math.gcf(24, 42);
$('gcf-2').innerText = '$math.gcf(64, 1024) = ' + $math.gcf(64, 1024);

$('lcm-1').innerText = '$math.lcm(24, 42) = ' + $math.lcm(24, 42);
$('lcm-2').innerText = '$math.lcm(5, 125) = ' + $math.lcm(5, 125);