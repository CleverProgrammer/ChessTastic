---
layout: draft
title: Coursera Week 4: Lessons To Learn From Probability
subtitle:   "How can we use probability to understand better the world around us?"
categories: [coursera]
tags: [probability]
published: True
author: "Rafeh Qazi"

---

# The Joys of Probability
There are many questions that probability helps us answer:
1. How many possible 4-digit passcodes can you have on your iPhone 6?
2. How many centuries will it take to break a password with an entropy level of 77?
3. If you got heads on the first flip... What is the probability you will get heads again? (independent vs Dependent variables)

## So... Let's get started!
So let's start off with the iPhone 6 passcode question. How many possible ways of rearranging the 4 digit passcodes are there?
To answer that, we need to understand something important about probability. If we have some random **sequence** of some length (think of the 4 digit passcode) and we have a set of **outcomes** (think 0,1,2,3,4,5,6,7,8,9) we can use this information alone to get our answer. So let's start off with an easy example: If we were allowed to make a passcode with length of 1 (1 digit passcode instead of a 4 digit passcode), our passcode would only have 10 possible ways of rearranging it 
--> [ (0), (1) , (2) , (3) , (4), (5), (6), (7), (8), (9) ]. 
But now if we were allowed to make our passcode with length 2 (2 digit passcode) we would now have 100 possible ways of arranging the 2 digit passcodes! This means that if someone was given 81 tries and they tried every single possiblity, they would be able to break your passcode! Here's a cute little python list comprehension to generate all the possible permutations:

{%highlight python3 linenos%}
[ (row, col) for row in range(10) for col in range(10) ]
{%endhighlight%}
--> [ (0,0), (0,1), (0,2), (0,3), (0,4), (0,5), (0,6), (0,7), (0,8), (0,9) ]
--> [ (1,0), (1,1), (1,2), (1,3), (1,4), (1,5), (1,6), (1,7), (1,8), (1,9) ]
--> [ (2,0), (2,1), (2,2), (2,3), (2,4), (2,5), (2,6), (2,7), (2,8), (2,9) ]...
If we were to continue this pattern it would continue all the till:
--> [ (9,0), (9,1), (9,2), (9,3), (9,4), (9,5), (9,6), (9,7), (9,8), (9,9) ]
If we were to count all of these out, you would find that there are a 100 different **permutations** of a passcode with a sequence of 2 numbers and an outcome of 10 numbers (0-9 possible numbers)! Pretty cool huh?! But, what if we wanted to generalize it in a way where we could find all the permutations of any sequence with any number of outcomes? Here is a pattern to keep in mind:
Length of 1 digit passcode picked from 0-9: 10(outcomes) ^ 1(length)  --> There are 10 ways to arrange it.
Length of 2 digit passcode picked from 0-9: 10(outcomes) ^ 2(length) --> There are 100 ways to arrange it.
Length of 3 digit passcode picked from 0-9: 10(outcomes) ^ 3(length) --> There are 1,000 ways to arrange it.
Length of 4 digit passcode picked from 0-9: 10(outcomes) ^ 4(length) --> There are 10,000 ways to arrange it.
So to answer question 1 with a bang:
## <font color="red">There Are 10,000 Possible Combinations for Your iPhone 6 Four-Digit Passcode</font>