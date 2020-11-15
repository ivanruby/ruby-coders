---
id: programming
title: Programming
sidebar_label: Programming
---

Programming

## Basic structure of an Arduino program
```Arduino
// Creation of variables

void setup() {
    // Configurations and initializations here
}

void loop() {
    // Instructions to be executed over and over again
}
```
## Variables and Datatypes
Variables are names we create to store values we use in our programs. They should not contain spaces, e.g. `sensor reading` should be `sensorReading` or `sensor_reading`, can contain letters, numbers and _, $ 

**Rule:** `<data type> variable_name`

Example: `byte ledPin;`

You can also create a variable and immediately assign it a value. In this case, the rule becomes:
`<data type> variable_name = initial_value`

Example: `byte ledPin = 2;`

<br/>
**Common data types**
| Keyword | Usage               | Example |
|:--------|---------------------|---------|
| byte    | Integer numbers between 0 and 255 | Variables for pin numbers on the Arduino |
| int     | Integer numbers between -32768 and 32767 | Variables for readings from an analog sensor |
| float   | Decimal numbers between ght-aligned | A variable holding the value calculated from the reading of a temperature sensor |

## Conditionals
Conditionals are how you implement **decision-making** in programming. They allow you to determine what should happen (which instructions should be executed) based on conditions you define.

**Syntax**
```Arduino
if (condition)
{
    // Instructions to be executed if condition is true
} 
else 
{
   // Instructions to be executed if condition is false 
}
```

Where `condition` can generally be one of the following:
| Operator | Description      | Example               |
|:-------- |------------------|-----------------------|
| ==       | Equality         | `buttonState == LOW`  |
| !=       | Inequality       | `buttonState != LOW`  |
| >        | Greater than     | `sensorReading > 300` |
| >=       | Greater than or equal    | `sensorReading >= 300`  |
| <        | Less than     | `sensorReading < 300`  |
| <        | Less than or equal    | `sensorReading <= 300`  |

## Errors

Syntax
Semantics