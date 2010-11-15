# Testing for the Dollar Sign Math framework
from dollar_sign_math import dollar_sign_math
maths = dollar_sign_math()

if maths.sum([1,2,3,4,5]) == 15:
	print 'Sum = true'
	
if maths.diff([5,4,3,2,1]) == -5:
	print 'Diff = true'
	
if maths.product([1,2,3,4,5]) == 120:
	print 'Product = true'
	
if maths.quotient([6,3,0.5,2]) == 2.0:
	print 'Quotient = true'
	
if maths.mod(5,2) == 1 and maths.mod(5,-2) == -1:
	print 'Mod = true'
