/**
 * dollar-sign-math.js
 * Adam Shannon
 * 2010-02-10
 *
 * Copyright (c) 2010 Adam Shannon & Decaf Productions
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Let's keep all of the $math data in a separate namespace.
(function () {

var $math = {
	/**
	 * Version
	 */
	version: '0.3.0',

	/**
	 * Constants
	 */
	e: 2.718281828459045,
	pi: 3.1415926535897932384626433,
	
	/**
	 * .sum(array)
	 * Performs summation on an array of numbers.
	 */
	sum: function (numbs, pos, total) {
		window.total = total || 0;
		pos = pos || 0;
		
		if (pos != numbs.length)
			this.sum(numbs, (pos + 1), (window.total + numbs[pos]));
		
		return window.total;
	},
	
	/**
	 * .diff(array)
	 * Subtracts numbs[n+1] from numbs[n], then returns the result after n trials.
	 */
	diff: function (numbs, pos, total) {
		window.total = total || 0;
		pos = pos || 0;
		
		if (pos != numbs.length)
			this.sum(numbs, (pos + 1), (window.total - numbs[pos]));
		
		return window.total;
	},
	
	/**
	 * .product(array)
	 * Multiplies an array of numbers.
	 */
	product: function (numbs, a) {
		// Check to see if we've been given two arguments.
		if (arguments.length > 1) {
			return numbs * a;
		}
		
		// Declare the size and current element for a quick total.
		var count = numbs.length, i = 0, total = 1;
		
		// Multiply each element
		while (i < count) {
			total *= numbs[i++];
		}
		
		return total;
	},
	
	/**
	 * .quotient(array)
	 * Divides an array of numbers.
	 */
	quotient: function (numbs, a) {
		// Check to see if we've been given two arguments.
		if (arguments.length > 1) {
			return numbs / a;
		}
		
		// Declare the size and current element for a quick total.
		var count = numbs.length, i = 1, total = numbs[0];
		
		// Subtract the numbers from each other.
		while (i < count) {
			total /= numbs[i++];
		}
		
		return total;
	},
	
	/**
	 * .modulus(value, a)
	 * Performs modulus on an array
	 */
	modulus: function (value, a) {		
		return value % a;
	}, 
	
	/**
	 * paddFront(value, times)
	 * Padd a value at the front
	 */
	paddFront: function (value, times) {
		
		// Declare the value as a string
		value = value.toString();
		
		while (times-- > 0) {
			value = '0' + value;
		}
		
		return value;
		
	},
	
	/**
	 * .paddEnd(value, times)
	 * Padd a value at the end.
	 */
	paddEnd: function (value, times) {
		
		// Declare the value as a string
		value = value.toString();
		
		while (times-- > 0) {
			value = value.toString() + '0';
		}
		
		return value;
		
	},
	
	/**
	 * .round(value[,places[,base]])
	 * Round _value_ to _places_
	 */
	round: function (value, places, base) {
		// Convert the value to a string and then split it at the first decimal.
		value = value.toString().split(/\./);
		places = this.abs(places);
		
		// Put a check in to catch integers.
		// Remember to put it as a string.
		value[1] = value[1] || '0';
		
		// Check to see if we have a base or places value in tact.
		places = places || 2;
		base = base || 10;
		
		// Check to see if we need to padd the value.
		if (value[1].length < places) {
			value[1] = this.paddEnd(value[1], (places - value[1].length));
		}
		
		// Send the truncated value back.
		return value[0] + '.' + value[1].toString().substr(0, places);
	},
	
	/**
	 * .positive(value)
	 * Return true if the value is positive
	 */
	positive: function (value) {
		return (value < 0.0) ? false : true;
	},
	
	/**
	 * .abs(value)
	 * Return the abs of a value
	 */
	abs: function (value) {
		return (this.positive(value)) ? value : (-1) * value;
	},
	
	/**
	 * .min(numbs)
	 * Return the lowest number from an array
	 */
	min: function (numbs) {
		// Define
		var count = numbs.length, i = 0, min = numbs[0];
		
		while (i < count) {
			if (numbs[i++] < min) {
				min = numbs[i-1];
			}
		}
		
		return min;
	},
	
	/**
	 * .max(numbs)
	 * Return the highest number from an array
	 */
	max: function (numbs) {
		// Define
		var count = numbs.length, i = 0, max = numbs[0];
		
		while (i < count) {
			if (numbs[i++] > max) {
				max = numbs[i-1];
			}
		}
		
		return max;
	},
	
	/**
	 * .between(value, min, max)
	 * Return true if _value_ is bewteen _min_ and _max_;
	 */
	between: function (value, min, max) {
		return (this.min([value, min]) != value) && (this.max([value, max]) != value);
	},
	
	/**
	 * .percent(value)
	 * Change a number to a percent, given that the last character isn't a '%'.
	 */
	percent: function (value, sign) {	
		var tmp = (value * 100);
		
		// Check to send a '%' along.
		if (sign === undefined) {
			return tmp;
		} else {
			return tmp.toString() + '%';
		}
	}, 
	
	/**
	 * .decimal(value)
	 * Change a percent to a value.
	 */
	decimal: function (top, bottom) {
		if (bottom === undefined) {
			return top / 100;
		}
		
		return top / bottom;
	},
	
	/**
	 * .degrees(value)
	 * Convert radians to degrees
	 */
	degrees: function (value) {
		return value * 180 / this.pi;
	},
	
	/**
	 * .radians(value) 
	 * Convert degrees to radians
	 */
	radians: function (value) {
		return value * this.pi / 180;
	},
	
	/**
	 * .int(value[,base])
	 * Return the integer value of a number.
	 */
	int: function (value, base) {
		return parseInt(value, (base === undefined) ? 10 : base);
	},
	
	/**
	 * .isInt(value)
	 * Returns true/false if _value_ is an integers.
	 */
	isInt: function (value) {
		return (value % 1 === 0) && isFinite(value);
	},
	
	/**
	 * .float(value[,base])
	 * Return the float value of a number. (Assume two decimal places)
	 */
	float: function (value, base) {
		return this.round(value, 2, (base === undefined) ? 10 : base);
	},
	
	/**
	 * .random([a, b])
	 * Return a PseudoRandom Number between _a_ and _b_.
	 */
	random: function (a, b, count) {
		
		// Check for valid submissions
		// Shorthand, I know...
		a = a || 0;
		b = b || 1;
		
		return a + Math.random() * (b - a);
	},
	
	/**
	 * .randomInt([a, b])
	 * Return a PseudoRandom Integer between _a_ and _b_.
	 */
	randomInt: function (a, b) {
		return this.int(this.random(a, b) * 10);
	},
	
	/**
	 * .equal(a, b, offset)
	 * Check if two values are equal to each other (between a specified offset).
	 */
	equal: function (a, b, offset) {
		return (Math.abs(a - b) <= (offset || 0.0001 ));
	},
	
	/**
	 * .pow(a, x)
	 * Raise a to the xth power.
	 */
	pow: function (a, x) {
		// Check to see if we should just use Math.pow here.
		if (!this.isInt(x)) {
			return Math.pow(a, x);
		}
		
		// Otherwise use this custom method to get the power.
		var tmp = 1;
		
		while(x--) {
			tmp *= a;
		}
		
		return tmp;
	},
	
	/**
	 * .sin(a[, cycles])
	 * Return the sin(a), this function always expects radians.
	 */
	sin: function (x) {
		// Check revisions #00071 and #00072 for attempted revisions of sin()
		return Math.sin(x);
	},
	
	/**
	 * .csc(a[,radians])
	 * Returns the csc(a), and converts _a_ to radians based on _radians_.
	 */
	csc: function (a, radians) {
		return 1 / this.sin(a, radians);
	},
	
	/**
	 * .cos(a[,radians])
	 * Returns the cos(a), and converts _a_ to radians based on _radians_.
	 */
	cos: function (x) {
		return Math.cos(x);
	},
	
	/**
	 * .sec(a[,radians])
	 * Returns the sec(a), and converts _a_ to radians based on _radians_.
	 */
	sec: function (a, radians) {
		return 1 / this.cos(a, radians);
	},
	
	/**
	 * .tan(a[,radians])
	 * Returns the tan(a), and converts _a_ to radians based on _radians_.
	 */
	tan: function (a, radians) {
		return this.sin(a, radians) / this.cos(a, radians);
	},
	
	/**
	 * .cot(a[,radians])
	 * Returns the cot(a), and converts _a_ to radians based on _radians_.
	 */
	cot: function (a, radians) {
		return 1 / this.tan(a, radians);
	},
	
	/**
	 * .log(value[,base])
	 * The "Normal" (base 10/_base_) log of _value_.
	 * We're just using the Change of Base formula.
	 */
	log: function (value, base) {
		base = base || 10;
		return Math.log(value) / Math.log(base);
	},
	
	/**
	 * .sqrt(value)
	 * Perform a square root on a _value_ from this forumula.
	 * http://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Exponential_identity
	 */
	sqrt: function (value) {
		return this.pow(this.e, (1/2) * Math.log(value));
	},
	
	/**
	 * .even(value) 
	 * Check to see if a value is even.
	 */
	even: function (value) {
		// return (this.modulus(value) === 0);
		return (this.modulus([value], 2) === 0);
	},
	
	/**
	 * .mean(values)
	 * Find the mean (average) of _values_.
	 */
	mean: function (values) {
		return this.sum(values) / values.length;
	},
	
	/**
	 * .medium(values)
	 * Find the medium of _values_.
	 */
	medium: function (values) {
		var length = values.length;
		values = this.sortAsc(values);
		
		// Return the correct value based on what's given.
		if (this.even(length)) {
		
			return this.mean([values[(length / 2) - 1], values[(length / 2)]]);
			
		} else {
		
			return values[(length - 1) / 2];
			
		}
	},
	
	/**
	 * .mode(values)
	 * Return the mode (most occurrent) value in _values.
	 */
	mode: function (values) {
		var 
			count = [],
			length = values.length,
			largest_count = 0,
			largest_number = 0;
			
		for (var n = 0; n < length; n++) {
			
			// Check for the number already in the array.
			if (count[values[n]] !== undefined) {
				count[values[n]][1]++;
				
			} else {
				count[values[n]] = [values[n], 1];
				
			}
			
		}
		
		// Find where the [1] is the largest and return the [0].
		for (var number in count) {
			if (count.hasOwnProperty(number)) {
				var 
					current_count = count[number][1],
					current_number = count[number][0];
				
				if (current_count > largest_count) {
					largest_number = current_number;
					largest_count = current_count;
				}
			}
		}
		
		return largest_number;
		
	},
	
	/**
	 * .sortDesc(values)
	 * Sort the list in a decending order.
	 * For now we will use a bubble sort.
	 */
	sortDesc: function (values) {
		var length = values.length;
		var tmp = 0;
		
		for (var n = 0; n < length; n++) {
			
			for (var i = 0; i < length; i++) {
				
				if (values[i + 1] > values[i]) {
				
					tmp = values[i];
					values[i] = values[i + 1];
					values[i + 1] = tmp;
					
				}
				
			}
			
			i = n;
			
		}
		
		return values;
	},
	
	/**
	 * .sortDesc(values)
	 * Sort the list in a decending order.
	 * For now we will use a bubble sort.
	 */
	sortAsc: function (values) {
		var length = values.length;
		var tmp = 0;
		
		for (var n = 0; n < length; n++) {
			
			for (var i = 0; i < length; i++) {
				
				if (values[i + 1] < values[i]) {
				
					tmp = values[i];
					values[i] = values[i + 1];
					values[i + 1] = tmp;
					
				}
				
			}
			
			i = n;
			
		}
		
		return values;
	},
	
	/** 
	 * .range(values)
	 * Return the lowest (min) and highest (max) values from _values_.
	 */
	range: function (values) {
		
		return [this.min(values), this.max(values)];
		
	},
	
	/**
	 * .csl(values)
	 * This will return an array of values separated by a comma and _offset_.
	 */
	csl: function (values, offset) {
		
		offset = offset || '';
		
		var length = values.length;
		var list = '';
		
		for (var n = 0; n < length; n++) {
		
			list += values[n];
			
			if (!this.equal(n + 1, length, 0)) {
				list +=  ',' + offset;
			}
			
		}
		
		return list;
		
	},
	
	/**
	 * .factors(number)
	 * Returns an array or arrays of factors for _number_.
	 * 24: [[1,24], [2,12], [3,8], [4,6]]
	 */
	factors: function (number, list) {
		
		// Clean up some possibly accidental data.
		number = this.abs(this.int(number));
		
		// I'm testing to see if the uncommented statement works better, 
		// jsLint seems to think it does.
		// (list === true) ? list = true : list = false;
		list = list || false;
		
		var factors = [];
		var lowest_upper_factor = number;
		
		// Process each integer until you hit _number_ and see if it's divisible.
		for (var n = 0; n < number; n++) {
			
			if ((number % n) === 0 && n < lowest_upper_factor) {
			
				var f = number / n;
				lowest_upper_factor = f;
				
				if (list === true) {
					factors[factors.length] = n;
					factors[factors.length] = f;
				} else {
					factors[factors.length] = [n, f];
				}
				
			}
			
		}
		
		return (list === true) ? this.sortAsc(factors) : factors;
		
	},
	
	/**
	 * .multiples(number[, count])
	 * Return _count_ multiples of _number
	 */
	multiples: function (number, count, start) {
		
		count = count || 5;
		start = start || 0;
		
		var multiples = [];
		
		for (var n = start; n <= count; n++) {
			multiples[n] = n * number;
		}
		
		return multiples;
		
	},
	
	/**
	 * .stDev(numbers)
	 * Return the standard deviation of _numbers_.
	 */
	stDev: function (numbers) {
		var mean = this.mean(numbers);
		var length = numbers.length;
		var exp = 0;
		
		for (var n = 0; n < length; n++) {
			
			exp += this.pow(numbers[n] - mean, 2);
			
		}
		
		// Don't forget that the array is 0-base and the count of elements is +1 the
		// number we should divide by.
		return this.sqrt(exp / (length - 1));
	},
	
	/**
	 * .var(numbers)
	 * Return the variance of _numbers_.
	 */
	variance: function (numbers) {
		return this.pow(this.stDev(numbers), 2);
	},
	
	/**
	 * .gcf(a, b)
	 * Return the greatest common factor between _a_ and _b_.
	 */
	gcf: function (a, b) {
		var fact_a = this.factors(a, true);
		var fact_b = this.factors(b, true);
		
		var a_len = fact_a.length;
		var b_len = fact_b.length;
		
		var gcf = 0;
		
		for (var n = 0; n < a_len; n++) {
			
			for (var i = 0; i < b_len; i++) {
				
				if (fact_a[n] === fact_b[i]) {
					
					if (gcf < fact_b[i]) {
						gcf = fact_b[i];
					}
					
				}
				
			}
			
		}
		
		return gcf;
	},
	
	/**
	 * lcm(a, b)
	 * Return the least common multiple of a, b.
	 */
	lcm: function (a, b) {
		var mult_a = this.multiples(a, 25, 1);
		var mult_b = this.multiples(b, 25, 1);
		
		var a_len = mult_a.length;
		var b_len = mult_b.length;
		
		var lcm = 10000000000000;
		
		for (var n = 0; n < a_len; n++) {
			
			for (var i = 0; i < b_len; i++) {
				
				if (mult_a[n] === mult_b[i]) {
					
					if (lcm > mult_b[i]) {
						lcm = mult_b[i];
					}
					
				}
				
			}
			
		}
		
		return lcm;
	},
	
	/**
	 * .fraction(value)
	 * Returns the fraction value of _value_.
	 */
	fraction: function (value, array) {
		var top = value * (1 + this.paddEnd(0, value.toString().length - 3));
		var bottom = 1 + this.paddEnd(0, value.toString().length - 3);

		// Find the gcf of both numbers.
		var gcf = this.gcf(top, bottom);
		
		if (array === true) {
		
			return [top / gcf, bottom / gcf];
		
		} else {
		
			return top / gcf + ' / ' + bottom / gcf;
			
		}
	},
	
	/**
	 * .floor(value)
	 * Returns the floor (rounded down) value of _value_.
	 */
	floor: function (value) {
		return this.int(value);
	},
	
	/**
	 * .celi(value)
	 * Return the celi (rounded up) value of _value_.
	 */
	celi: function (value) {
		return this.int(value) + 1;
	},
	
	/**
	 * .isFinite(value)
	 * Returns a bool which represents if _value_ is finite.
	 */
	isFinite: function (value) {
		return isFinite(value);
	},
	
	/**
	 * .summation(equation, start, end)
	 * Performs a finite summation operation on _equation_ with 
	 * the _start_ (lower) and _end_ (upper) bounds.
	 */
	summation: function (equation, start, end) {
	
		var total = 0;
		var x = start;
		
		// Alright, we're going to take _equation_ and sum it from _start_ to _end_.
		for (var n = start; n <= end; n++) {
			
			// x = n;
			total += equation(x = n);
			
		}
		
		return total;
	},
	
	/**
	 * .productSeq(equation, start, end)
	 * Performs a finite multiplication on _equation_ with
	 * the _start_ (lower) and _end_ (upper) bounds.
	 */
	productSeq: function (equation, start, end) {
		
		var total = 1;
		var x = start;
		
		// Alright, we're going to take _equation_ and sum it from _start_ to _end_.
		for (var n = start; n <= end; n++) {
			
			// x = n;
			total *= equation(x = n);
			
		}
		
		return total;
	},
	
	/**
	 * .factorial(numb) 
	 * Performs a factorial operation (e.g. 7!) on _numb_.
	 */
	factorial: function (numb) {
		return this.productSeq(function (x) { return x; }, 1, numb);
	},
	
	/**
	 * .isFactor(factor, numb[, offset])
	 * Return a bool to represent of _factor_ is a factor of _numb_.
	 */
	isFactor: function (factor, numb, offset) {
		
		var factors = this.factors(numb, true);
		var length = factors.length;
		offset = offset || 0.00001;
		
		for (var n = 0; n < length; n++) {
			if (this.equal(factors[n], factor, offset)) {
				return true;
			}
		}
		
		return false;
		
	},
	
	/**
	 * .isMultiple(multiple, numb[, count[, offset]])
	 * Return a bool to represent of _multiple_ is a multiple of _numb_ after _count_ multiples.
	 */
	isMultiple: function (multiple, numb, count, offset) {
		
		count = count || 25;
		offset = offset || 0.00001;
		var multiples = this.multiples(numb, count);
		var length = multiples.length;
		
		for (var n = 0; n < length; n++) {
			if (this.equal(multiples[n], multiple, offset)) {
				return true;
			}
		}
		
		return false;
	},
	
	/**
	 * .mixedNumber(top, bottom[, array])
	 * Return the mixed number of the fraction (_top_ / _bottom_).
	 */
	mixedNumber: function (top, bottom, array) {
		
		var factor;
		
		if (top > bottom) {
			
			factor = this.int(top / bottom);
			top -= (factor * bottom);
			
		}
		
		if (array === true) {
			return [factor, top, bottom];
		} else {
			return factor + '(' + top + ' / ' + bottom + ')';
		}
		
	},
	
	/**
	 * .sequence(initinal, equation, cycles)
	 * Run a sequence on _equation_ with _initinals_.
	 */
	sequence: function (initinal, equation, cycles) {
	
		var results = [];
		var count = 1;
			results[0] = equation(initinal);
		
		for (count = 1; count < cycles; count++) {
			results[count] = equation(results[count - 1]);
		}
		
		return results;
		
	},
	
	/**
	 * .addFract(fraction1, fraction2)
	 * Array: Sum the N fractions
	 * Fraction(1|2): Sum the two fractions.
	 */
	addFract: function (fraction1, fraction2) {
		
		if (fraction2 !== undefined) {
		
			var lcm = this.lcm(fraction1[1], fraction2[1]);
			var top_m = lcm / fraction1[1];
			var bot_m = lcm / fraction2[1];
			
			return [(fraction1[0] * top_m) + (fraction2[0] * bot_m), (fraction1[1] * top_m)];
			
		} else {
			
			return fraction1;
			
		}
		
	},
	
	/**
	 * .diffFract(fraction1, fraction2)
	 * Find the difference between the two fractions
	 */
	diffFract: function (fraction1, fraction2) {
		
		if (fraction2 !== undefined) {
		
			var lcm = this.lcm(fraction1[1], fraction2[1]);
			var top_m = lcm / fraction1[1];
			var bot_m = lcm / fraction2[1];
			
			return [(fraction1[0] * top_m) - (fraction2[0] * bot_m), (fraction1[1] * top_m)];
			
		} else {
			
			return fraction1;
			
		}
		
	},
	
	/**
	 * .productFract(fraction1, fraction2)
	 * Return the product between the two fractions
	 */
	productFract: function (fraction1, fraction2) {
		
		return [(fraction1[0] * fraction2[0]), (fraction1[1] * fraction2[1])];
		
	},
	
	/**
	 * .quotientFract(fraction1, fraction2)
	 * Return the quotient between the two fractions.
	 */
	quotientFract: function (fraction1, fraction2) {
		
		return [(fraction1[0] * fraction2[1]), (fraction1[1] * fraction2[0])];
		
	},
	
	/**
	 * .reduce(fraction)
	 * Reduce a fraction to simple terms
	 */
	reduce: function (fraction) {
		
		var gcf = this.gcf(fraction[0], fraction[1]);
		
		return [(fraction[0] / gcf), (fraction[1] / gcf)];
		
	},
	
	/**
	 * .format(number[, seperator])
	 * Format a number 10000 -> 10,000
	 */
	format: function (number, integer, seperator) {
		
		integer = (integer === undefined) ? true : false;
		seperator = seperator || ',';
		
		var decimal = number.toString().split('.');
		var length = decimal[0].length;
		var formatted = '', n;
		
			// If we want an empty decimal value to be chopped off we do it here
			var tail = '';
			
				if (decimal[1] === undefined && integer === true) {
					
					tail = '';
					
				} else {
					
					tail = '.' + (decimal[1] || '0');
					
				}
			
			// Now for each 3 characters insert a _seperator_
			if (length < 3) {
				
				return decimal[0] + tail;
				
			} else {
				
				for (n = length; n >= 0; n -= 3) {
					
					formatted = seperator + decimal[0].substr(n, 3) + formatted;
					
				}
				
				// Find the extra stuff we have to append
				var extra_length;
				
				if (n == -1) {
					extra_length = decimal[0].substr(0, this.abs(n) + 1) + seperator;
				}
				
				if (n == -2) {
					extra_length = decimal[0].substr(0, this.abs(n) - 1) + seperator;
				}
				
				if (extra_length === undefined) {
					extra_length = '';
				}
				
				return extra_length + formatted.substr(1, formatted.length - 2) + tail;
				
			}
		
	},
	
	/**
	 * .deFormat(value)
	 * Change a number like 1,252.63 to 1252.63
	 */
	deFormat: function (value, seperator) {
	
			seperator = seperator || (/,/ig);
		
		// If the seperator is a '.' then it will remove the last one.
		return value.toString().replace(seperator, '');
		
	},
	
	/**
	 * .createMatrix(matrix, rows, cols[, value])
	 * Create a matrix to the dimensions and with a value.
	 */
	createMatrix: function (rows, cols, value) {
		
		// Validate the rows and colums.
		var matrix = [], i, w;
		rows = rows || 1;
		cols = cols || 1;
		value = value || 0;
		
		// Now fill the matrix
		for (i = 0; i < rows; i++) {
			
			matrix[i] = [];
			
			for (w = 0; w < cols; w++) {
				matrix[i][w] = value;
			}
		}
		
		return matrix;
	
	},
	
	/**
	 * .validateMatricesDimensions([matrixA, matrixB[, matrixC...]])
	 * Validate that all of the matrices are the same size and return a bool
	 */
	validateMatricesDimensions: function () {
	
		var numMatrices = arguments.length;
		var firstCols = arguments[0][0].length;
		var firstRows = arguments[0].length;
		var n;
	
		// Validate all of the matrices dimensions
		// TODO: Validate all of the row's colum counts, not just the first row.
		for (n = 0; n < numMatrices; n++) {
			
			if (arguments[n][0].length !== firstCols || arguments[n].length !== firstRows) {
				return false;
			}
			
		}
		
		return true;
	
	},
	
	/**
	 * .addMatrices([matrixA, matrixB[, matrixC...]])
	 * Add an array of matrices and return the resulting matrix.
	 */
	addMatrices: function () {
		
		var numMatrices = arguments.length;
		var firstCols = arguments[0][0].length;
		var firstRows = arguments[0].length;
		var i = 0, n = 0, w = 0;
		
		// In order for matrices to be added the dimensions need to be the same
		var validMatricesDimensions = this.validateMatricesDimensions(arguments);
		
			if (validMatricesDimensions === false) {
				return null;
			}
		
		// Now that we've passed the validation, add the matrices in a new matrix.
		var total = this.createMatrix(firstRows, firstCols, 0);
		
		// Perform the operation.
		for (n = 0; n < numMatrices; n++) {
			
			for (i = 0; i < firstRows; i++) {
			
				for (w = 0; w < firstCols; w++) {
					
					total[i][w] += arguments[n][i][w];
					
				}
			
			}
			
		}
			
		return total;
		
	},
	
	/**
	 * .subtractMatrices([matrixA, matrixB[, matrixC...]])
	 * Subtract an array of matrices and return the result in a matrix.
	 */
	subtractMatrices: function () {
	
		var numMatrices = arguments.length;
		var firstCols = arguments[0][0].length;
		var firstRows = arguments[0].length;
		var i = 0, n = 0, w = 0;
		
		// In order for matrices to be added the dimensions need to be the same
		var validMatricesDimensions = this.validateMatricesDimensions(arguments);
		
			if (validMatricesDimensions === false) {
				return null;
			}
		
		// Now that we've passed the validation, add the matrices in a new matrix.
		var total = this.createMatrix(firstRows, firstCols, 0);
		
		// Perform the operation.
		for (n = 0; n < numMatrices; n++) {
			
			for (i = 0; i < firstRows; i++) {
			
				for (w = 0; w < firstCols; w++) {
					
					if (n === 1) {
						total[i][w] = arguments[0][i][w];
					}
					
					total[i][w] -= arguments[n][i][w];
					
				}
			
			}
			
		}
			
		return total;
		
	},
	
	/**
	 * scalar(value, matrix)
	 * Multiply each value in _matrix_ by _value_. 
	 */
	scalar: function (value, matrix) {
		
		// Validate that _value_ is a real number.
		value = this.float(value) || 1;
		
		var cols = matrix.length;
		var rows = matrix[0].length;
		var i, n;
		
		for (n = 0; n < rows; n++) {
			for (i = 0; i < cols; i++) {
				matrix[n][i] *= value;
			}
		}
		
		return matrix;
		
	}
};

// Give the global name space access to only $math (and it's sub functions,
// but not the inner variables).
window.$math = $math;

})();
