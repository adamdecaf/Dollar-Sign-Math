/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */
 
$('equal-1').innerText = '$math.equal(10, 10.000000001) = ' + $math.equal(10, 10.000000001).toString();
$('equal-2').innerText = '$math.equal(10, 100, 5) = ' + $math.equal(10, 100, 5).toString();

$('pow-1').innerText = '$math.pow(5, 3) = ' + $math.pow(5, 3);
$('pow-2').innerText = '$math.pow(10, 100) = ' + $math.pow(10, 10);
$('pow-3').innerText = '$math.pow(42, 7.2) = ' + $math.pow(42, 7.2);

$('log-1').innerText = '$math.log(45.2) = ' + $math.log(45.2);
$('log-2').innerText = '$math.log(10, 10) = ' + $math.log(10, 10);
$('log-3').innerText = '$math.log(2.718281828, 2.718281828) = ' + $math.log(2.718281828, 2.718281828);

$('sqrt-1').innerText = '$math.sqrt(16) = ' + $math.sqrt(16);
$('sqrt-2').innerText = '$math.sqrt(52.2) = ' + $math.sqrt(52.2);

$('even').innerText = '$math.even(42) = ' + $math.even(42);
$('odd').innerText = '$math.even(7341) = ' + $math.even(7341);