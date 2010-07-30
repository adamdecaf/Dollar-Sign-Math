/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-04-30
 */
 
$('format1').innerText = '$math.format(152) = ' + $math.format(152);
$('format2').innerText = '$math.format(582925) = ' + $math.format(582925);
$('format3').innerText = '$math.format(24598, false) = ' + $math.format(24598, false);
$('format4').innerText = '$math.format(825241.215) = ' + $math.format(825241.215);
$('format5').innerText = '$math.format(2598762, false, "/") = ' + $math.format(2598762, false, '/');
$('format6').innerText = '$math.format(1000000.00001) = ' + $math.format(1000000.00001);

$('deFormat1').innerText = '$math.deFormat(1000) = ' + $math.deFormat(1000);
$('deFormat2').innerText = '$math.deFormat(\'152,256,322\') = ' + $math.deFormat('152,256,322');
$('deFormat3').innerText = '$math.deFormat(\'828,525.734\') = ' + $math.deFormat('828,525.734');

// $('text1').innerText = '$math.text(1) = ' + $math.text(1);
// $('text2').innerText = '$math.text(125.1) = ' + $math.text(125.1);
// $('text3').innerText = '$math.text(237.42) = ' + $math.text(237.42);
// $('text4').innerText = '$math.text(2727522.0001) = ' + $math.text(2727522.0001);
// $('text5').innerText = '$math.text(Math.pow(10, 9)) = ' + $math.text(Math.pow(10, 9));