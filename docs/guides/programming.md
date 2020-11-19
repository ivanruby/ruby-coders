---
id: programming-part-1
title: Programming Part 1
sidebar_label: Programming Part 1
---

As a complement to creating electronic circuits, we can control how components behave using programming - **creating a set of instructions for the microcontroller to implement**. Although we can use both text as well as visual-based programming with Tinkercad Circuits, in our activities we will only focus on text-based programming.

## Basic rules
- One instruction per line
- Each line has to end with a semicolon and, in a few cases, a curly bracket `{ or }`
- Use vertical and horizontal spacing to make your program more legible


## Basic structure of an Arduino program
```Arduino
// Any line that starts with two forward slashes will be ignored by the microcontroller 
// They are called comments and we'll use them to describe what we want our program to do

void setup() {
    // Instructions to configure and initialize components
}

void loop() {
    // Instructions to perform the tasks we need our circuits to do
}
```

All programs must have a **setup** and **loop** functions/commands written with the structure above - except the comments. 

You can read more about the [setup](https://www.arduino.cc/reference/en/language/structure/sketch/setup/) and [loop](https://www.arduino.cc/reference/en/language/structure/sketch/loop/) functions on the Arduino reference website.

## Variables and Datatypes
We need to have a way to store data when creating, receiving, and manipulating it. To do so, we use variables which are **names for memory locations used to store values we use in our programs**.

A variable has three important parts:
1. **Name:** We can use a combination of letters, numbers and special characters ( _ and $ ) without spaces 
    
    **Example:** `sensor reading` is not a valid name. It should instead be `sensorReading` or `sensor_reading`
<br/><br/>
2. **Data type:** We use to specify which type of values we'll store in the variable
    
    **Common data types**
    | Datatype| Usage               | Example |
    |:--------|---------------------|---------|
    | byte    | Integer numbers between 0 and 255 | Variables for pin numbers on the Arduino |
    | int     | Integer numbers between -32768 and 32767 | Variables for readings from an analog sensor |
    | float   | Decimal numbers between ght-aligned | A variable holding the value calculated from the reading of a temperature sensor |

3. **Value stored:** This is the actual data we add to the variable and retrieve from it

    **Examples** 
    ```Arduino
    // We can create a variable and immediately add a value to it
    byte ledPin = 2;

    // We can also first create a variable
    byte buttonPin;

    // And add a value to it later
    buttonPin = 3;

    ```
> **Note:** It is a good practice to create or declare variables at the top of your program - right before the setup function