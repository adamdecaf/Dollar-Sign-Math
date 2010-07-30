/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */
 
$('random').innerText = '$math.random() = ' + $math.random();
$('random-1').innerText = '$math.random(1, 10) = ' + $math.random(1, 10);
$('random-2').innerText = '$math.randomInt() = ' + $math.randomInt();


var total = 0;
for (var n = 0; n < 10000; n++) {
	total += $math.random();
}
$('mean').innerText = total / 10000;