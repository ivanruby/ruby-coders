---
id: tut-logic
title: Logic phase
---

**Task**: After wiring and configuring the physical components, design, test and implement the logical steps/operations to make the project work. 

You will do so by clicking on a link to a Tinkercad project and completing the activity there.
Here is a sample calibration task: <a href="https://www.tinkercad.com/things/5IvAKVC2TOg" target="_blank">Using an LED with a Button - Part 3 - Logic</a>

**Focus**: `Problem-solving`, `Algorithmic thinking`, `Programming`, `Testing`

**What we learn**: About how to generate algorithms, implement and test different Arduino C/C++ instructions

**Sample solution**: *Completing the circuit that connects an Arduino microcontroller, an LED and a button*

<!--DOCUSAURUS_CODE_TABS-->
<!--Algorithm-->
```C
void loop()
{
	/* Step 3. Check if the button is pressed  */
  	/* Step 4. If pressed, turn the LED on */
  	/* Step 5. If not pressed, turn the LED off */
}
```

<!--Equivalent programming instructions-->
```C
void loop()
{
	/* Step 3. Check if the button is pressed  */
 	if ( digitalRead(button) == LOW ) {
    
  		/* Step 4. If pressed, turn the LED on */
      	digitalWrite(LED, HIGH);
    }
    
  	/* Step 5. If not pressed */
  	if ( digitalRead(button) == HIGH ) {
    
  		/* turn the LED off */
      	digitalWrite(LED, LOW);
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

After the logic phase, a solution is always shared to allow the group or individual to validate ideas.