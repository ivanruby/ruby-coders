---
id: programming-part-2
title: Programming Part 2
sidebar_label: Programming Part 2
---

After understanding the basic structure of our program and how to store values, we need to explore how to interact with the components in our circuits.

## Input
An input operation is one where we read or receive data from a component in our circuit - a sensor.
As discussed in the [Circuits](/ruby-coders/docs/guides/circuits) section, different sensors can have [digital as well as analog signals](/ruby-coders/docs/guides/circuits#analog-and-digital-signals).

| Signal | Arduino instruction | Explanation                                |
|:-------|-------------------|--------------------------------------------|
| Analog | analogRead(pin)   | Returns an integer value between 0 and 1023 read on `pin`|
| Digital| digitalRead(pin)  | Returns either 0 (LOW) or 1 (HIGH) read on `pin`         |

**Example**
```Arduino
// Read the value from a button connected to digital pin 2
buttonState = digitalRead(2);

// Read the value from a sensor connected to analog pin A3
sensorReading = analogRead(A3);
```
## Output
Conversely, an output operation is one where we send data to a component in our circuit - an actuator. 

| Signal | Arduino instruction       | Explanation                                |
|:-------|---------------------------|--------------------------------------------|
| Analog | analogWrite(pin, value)   | Sends a value between 0 and 1023 to `pin`  |
| Digital| digitalWrite(pin, value)  | Sends either 0 (LOW) or 1 (HIGH) to `pin`  |

**Example**
```Arduino
// Sending a HIGH signal (same as value 1) to pin 3
digitalWrite(3, HIGH);

// Sending a state of 123 to pin A1 
analogWrite(A1, 123);
```

## Decision-making
To implement decision-making in programming, we use **conditionals**. They allow us to determine what should happen (which instructions should be executed) based on conditions we define.

**Syntax**
```Arduino
// A simple if conditional
if (condition) {
    // Instructions to be executed only if condition is true
} 

// if-else conditional
// used when we check for two possible outcomes of a condition
if (condition) {
    // Instructions to be executed if condition is true
} else {
   // Instructions to be executed if condition is false 
}

// if-else-if conditional
// used when we check for more than two possible outcomes of a condition
if (condition1) {
    // Instructions to be executed if condition1 is true
} else if (condition2) {
   // Instructions to be executed if condition1 is false but condition2 is true 
} else {
    // Instructions to be executed if all conditions are false 
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

## Serial
A very important programming functionality we'll use has to do with **getting information from the Arduino as our program is being executed**. The Serial port provides this communication and we don't need to create a circuit for it. 

### Configuration
```Arduino
void setup() {
    // Initiate the serial port and configure it to the transfer speed of 9600 bits per second
    Serial.begin(9600);
}
```
### Manipulation
```Arduino
void loop(){
    // Print the reading from A0 always at a new line
    Serial.println( analogRead(A0) );

    // Wait 0.5seconds (500 milliseconds) before executing the loop function again
    delay(500);
}
```

## Delay
As we saw in the last example, the `delay()` function can be used to pause the execution of our program for a specified time. 

**Syntax** `delay(number_of_milliseconds)`

**Example:** delay(1000) for a 1sec pause, delay(5000) for 5secs, delay(50) for 50 milliseconds

This can be useful whenever when **we need a pause between the execution of instructions** and it is **commonly placed as the last instruction in the loop function** to provide a pause before executing it again.