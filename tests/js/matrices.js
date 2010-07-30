/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-05-01
 */

$('add1').innerText = '$math.addMatrices([[4, 5],[7, 2]], [[8, 1], [0, 5]]) = ' + $math.addMatrices([[4, 5],[7, 2]], [[8, 1], [0, 5]]);
$('add2').innerText = '$math.addMatrices([[1,6], [9,2], [4,2]], [[0,2], [7,2], [9,9]]) = ' + $math.addMatrices([[1,6], [9,2], [4,2]], [[0,2], [7,2], [9,9]]);

$('sub1').innerText = '$math.subtractMatrices([[4, 5],[7, 2]], [[8, 1], [0, 5]]) = ' + $math.subtractMatrices([[4, 5],[7, 2]], [[8, 1], [0, 5]]);
$('sub2').innerText = '$math.subtractMatrices([[1,6], [9,2], [4,2]], [[0,2], [7,2], [9,9]]) = ' + $math.subtractMatrices([[1,6], [9,2], [4,2]], [[0,2], [7,2], [9,9]]);

$('mult1').innerText = '$math.multiplyMatrices([[2,3],[6,6]], [[8,3],[5,2]]) = ' + $math.multiplyMatrices([[2,3],[6,6]], [[8,3],[5,2]]);

$('scalar1').innerText = '$math.scalar(5, [[1,0],[2,1]]) = ' + $math.scalar(5, [[1,0],[2,1]]);
$('scalar2').innerText = '$math.scalar(13, [[3,9],[5,8]]) = ' + $math.scalar(13, [[3,9],[5,8]]);

// $('').innerText = '$math.Matrices() = ' + $math.Matrices();
