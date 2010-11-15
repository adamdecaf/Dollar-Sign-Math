"""
 * dollar-sign-math.py
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
"""

from random import random

class maths:
	def __init__(self):
		self.version = '0.4.0'
		self.e = 2.718281828459045235
		self.pi = 3.1415926535897932384626433
		self.i, self.k, self.total = 0
		
	def sum(numbs):
		self.total = numbs[0]
		for self.i in xrange(1,len(numbs)):
			self.total += numbs[self.i]
		return self.total
	
	def diff(numbs):
		self.total = numbs[0]
		for self.i in xrange(1,len(numbs)):
			self.total -= numbs[self.i]
		return self.total
		
	def product(numbs):
		self.total = numbs[0]
		for self.i in xrange(1,len(numbs)):
			self.total *= numbs[self.i]
		return self.total
	
	def quotient(numbs):
		self.total = numbs[0]
		for self.i in xrange(1,len(numbs)):
			self.total /= numbs[self.i]
		return self.total
		
	def mod(a,b):
		# This is supposed to return the sign
		# of the operand
		return a % b
