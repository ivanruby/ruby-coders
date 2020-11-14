---
id: components
title: Components
sidebar_label: Components
---

Components

## LED

A component that lights up when given power

### Wiring
![Sample project prompt image](assets/img/tutorial/sample-task-prompt.png)

### Configuration
```Arduino
// Creating the variable for the pin connected to the LED
byte ledPin = 2;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(ledPin, OUTPUT);
}
```

### Manipulation
```Arduino
void loop(){
    // Turn the LED On by sending 3.3v to the pin connected to it
    digitalWrite(ledPin, HIGH);

    // Turn the LED Off by sending 0v to the pin connected to it
    digitalWrite(ledPin, LOW);
}
```
### Complete example


## Button

A component that lights up when given power

### Wiring

### Configuration

### Manipulation

### Complete example


## LED

A component that lights up when given power

### Wiring

### Configuration

### Manipulation

### Complete example
Wire component 
Create virtual equivalent (declare variables)
Configure virtual component (pinModes and initialization)
Manipulate (read or write) (digital/analog write/read and operations)