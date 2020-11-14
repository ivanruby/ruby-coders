---
id: programming
title: Programming
sidebar_label: Programming
---

Programming

## Basic structure of a program
```C
// Creation of variables

void setup() {
    // Configurations and initializations here
}

void loop() {
    // Instructions to be executed over and over again
}
```
## Variables and Datatypes
Definition

**Rule:** `<data type> variable_name`

You can also create a variable and immediately assign it a value. In this case, the rule becomes:
`<data type> variable_name = initial_value`


**Common data types**
| Keyword | Usage               | Example |
|:--------|---------------------|---------|
| byte    | Integer numbers between 0 and 255 | Variables for pin numbers on the Arduino |
| int     | Integer numbers between -32768 and 32767 | Variables for readings from an analog sensor |
| float   | Decimal numbers between ght-aligned | A variable holding the value calculated from the reading of a temperature sensor |

## Conditionals
Definition

**Syntax**
```C
if (condition)
{
    // Instructions to be executed if condition is true
} 
else 
{
   // Instructions to be executed if condition is false 
}
```

## Errors

Syntax
Semantics