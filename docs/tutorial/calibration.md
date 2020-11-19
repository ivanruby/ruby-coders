---
id: tut-configuration
title: Configuration phase
---

**Task**: Establish an association between the physical components in a circuit and their representations in your program. 

You will do so by clicking on a link to a Tinkercad project and completing the activity there.
Here is a sample calibration task: <a href="https://www.tinkercad.com/things/2ZvvhqKoRWt" target="_blank">Using an LED with a Button - Part 2 - Calibration</a>

**Focus**: `Programming`, `Testing`

**What we learn**: How to include, configure and test physical components through programming

**Sample solution**: *Using Arduino C/C++, configure the pins where the LED and button are connected*

```C
/* Step 1. Create a variable for the pin connected to the LED
           and another for the pin connected to the button 
   Tip: Creating a variable allows you to call a pin by name
        instead of its number. */
byte LED = 2;
byte button = 3;

void setup()
{
  /* Step 2. Configure LED pin as an Output and button pin as an Input

     Reminder: Any programmable pin (GPIO) can be used either as
     an INPUT (receive data/voltage) or OUTPUT (send data/voltage) */
     pinMode(LED, OUTPUT);
     pinMode(button, INPUT_PULLUP);
}
```