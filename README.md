# changeConverter
Given a number in pounds and pence, work out the most efficient way of breaking it down into notes and coins, e.g. 11.55 becomes ["£10", "£1", "50p", "5p"]

## Acceptance Criteria
change_generator.convert(6.42)
 => ["£5", "£1", "20p", "20p", "2p"]
change_generator.convert(40)
 => ["£20", "£20"]
change_generator.convert(16.30)
 => ["£10", "£5", "£1", "20p", "10p"]
change_generator.convert(19.99)
 => ["£10", "£5", "£2", "£2", "50p", "20p", "20p", "5p", "2p", "2p"]
change_generator.convert(76.81)
 => ["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"]

### How can we do this?
First ask is the number greater than or less than 1. 
  if less than 1 go to the coin section
  if more than one go to notes section. 
In notes section as Are you greater than £50- then use £50 logic
  else if you are less than 50 but greater than 20
  else if you are less than 20 but greaten that 10
  else if you are less that 10 but greatr than 5
  else if go to coin section. 

### Extension 1
- Write a programe that take and array of notes and coin values and returns the result of summing these amounts, in £00.00 format. 
| input | output |
| ----- | ------ |
|£10,£10, 50p, 50p| £21.00|
|£5,20p | £5.20 |
- Do probably a for each loop of the array- and then say if number contains '£' then add before decimal, but if contains 'p' - number/100 then add to total. 
-
