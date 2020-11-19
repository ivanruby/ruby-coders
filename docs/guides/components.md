---
id: components
title: Components
sidebar_label: Components
---

<style> img {max-width: 470px !important} </style>

In this page, you'll find a list of common circuit components and how to use them with an Arduino board.

The summarized information here will be divided into the same phases we will follow during our activities.Naamely: 

- **Wiring:** How to make the physical circuit connections
- **Configuration:** How to create a representation of the component in our program
- **Logic (Manipulation)** How to use it to read or write data

## LED
A component that lights up when given power. Read <a href="https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds/all" target="_blank">more</a>
![Sample project prompt image](assets/img/components/led.png)

- **Type:** Actuator
- **Signal:** Both analog and digital

**Wiring**
![Sample project prompt image](assets/img/components/led_wiring.png)

<!--DOCUSAURUS_CODE_TABS-->
<!--Configuration-->
```Arduino
// Creating the variable for the pin connected to the LED
byte ledPin = 2;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(ledPin, OUTPUT);
}
```
<!--Manipulation-->
```Arduino
void loop() {
    // Turn the LED On by sending 3.3v to the pin connected to it
    digitalWrite(ledPin, HIGH);
    
    // Pause for 1sec
    delay(1000);

    // Turn the LED Off by sending 0v to the pin connected to it
    digitalWrite(ledPin, LOW);
}
```
<!--Complete example-->
```Arduino
// Creating the variable for the pin connected to the LED
byte ledPin = 2;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(ledPin, OUTPUT);
}

void loop() {
    // Turn the LED On by sending 3.3v to the pin connected to it
    digitalWrite(ledPin, HIGH);

    // Pause for 1sec
    delay(1000);

    // Turn the LED Off by sending 0v to the pin connected to it
    digitalWrite(ledPin, LOW);
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Button
A component that, when pressed, sends a voltage value to the Arduino board. Read <a href="https://www.arduino.cc/en/Tutorial/DigitalInputPullup" target="_blank">more</a>

![Pushbutton](assets/img/components/button.png)

- **Type:** Sensor
- **Signal:** Digital

**Wiring**
![Pushbutton](assets/img/components/button_wiring.png)

<!--DOCUSAURUS_CODE_TABS-->
<!--Configuration-->
```Arduino
// Creating the variable for the pin connected to the button
byte buttonPin = 2;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(buttonPin, INPUT_PULLUP);

    // Initialize the serial port so we can know when the button is pressed
    Serial.begin(9600);
}
```
<!--Manipulation-->
```Arduino
void loop() {
    // Check if the button is pressed
    if ( digitalRead(buttonPin) == LOW ) {
        // If pressed, display the message "Button is pressed" on the Serial port
        Serial.println("Button is pressed");
    } else {
        // If not pressed, display the message "Button is not pressed" on the Serial port
        Serial.println("Button is not pressed");
    }

    // Pause for 250 miliseconds before executing the loop again
    delay(250);
}
```
<!--Complete example-->
```Arduino
// Creating the variable for the pin connected to the button
byte buttonPin = 2;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(buttonPin, INPUT_PULLUP);

    // Initialize the serial port so we can know when the button is pressed
    Serial.begin(9600);
}

void loop(){
    // Check if the button is pressed
    if ( digitalRead(buttonPin) == LOW) {
        // If pressed, display the message "Button is pressed" on the Serial port
        Serial.println("Button is pressed");
    } else {
        // If not pressed, display the message "Button is not pressed" on the Serial port
        Serial.println("Button is not pressed");
    }

    // Pause for 250 miliseconds before executing the loop again
    delay(250);
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Potentiometer
A component that, when turned, gradually changes the intensity of voltage sent to a pin. Read <a href="https://www.arduino.cc/en/tutorial/potentiometer" target="_blank">more</a>.

![Potentiometer](assets/img/components/potentiometer.png)

- **Type:** Sensor
- **Signal:** Analog

**Wiring**
![Potentiometer](assets/img/components/potentiometer_wiring.png)

<!--DOCUSAURUS_CODE_TABS-->
<!--Configuration-->
```Arduino
// Creating the variable for the pin connected to the potentiometer
byte potentiometerPin = A5;

void setup() {
    // Configuring the pin as an input pin, to receive data/voltage
    pinMode(potentiometerPin, INPUT);

    // Initialize the serial port so we can know when the button is pressed
    Serial.begin(9600);
}
```
<!--Manipulation-->
```Arduino
void loop() {
    // Show the current value (between 0 -1023) read from the potentiometer
    Serial.println( analogRead(potentiometerPin) );
    
    // Pause for 250 miliseconds before executing the loop again
    delay(250);
}
```
<!--Complete example-->
```Arduino
// Creating the variable for the pin connected to the potentiometer
byte potentiometerPin = A5;

void setup() {
    // Configuring the pin as an input pin, to receive data/voltage
    pinMode(potentiometerPin, INPUT);

    // Initialize the serial port so we can know the values read from the potentiometer
    Serial.begin(9600);
}

void loop() {
    // Show the current value (between 0 -1023) read from the potentiometer
    Serial.println( analogRead(potentiometerPin) );
    
    // Pause for 250 miliseconds before executing the loop again
    delay(250);
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Motor
A component that turns, spins or vibrates when given power. Read <a href="https://www.tutorialspoint.com/arduino/arduino_dc_motor.htm" target="_blank">more</a>.

![Motors](assets/img/components/motors.png)

- **Type:** Actuator
- **Signal:** Analog

**Wiring**
![Motors](assets/img/components/motor_wiring.png)

<!--DOCUSAURUS_CODE_TABS-->
<!--Configuration-->
```Arduino
// Creating the variable for the pin connected to the motor
byte motorPin = A5;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(motorPin, OUTPUT);

    // Initialize the serial port so we can know when the button is pressed
    Serial.begin(9600);
}
```
<!--Manipulation-->
```Arduino
void loop() {
    // Turning the motor On to its maximum intensity
    analogWrite(motorPin, 255);

    // Pause for 1 second
    delay(250);

    // Reducing the intensity of the motor by half
    analogWrite(motorPin, 127);

    // Pause for 1 second
    delay(250);

    // Turning the motor Off
    analogWrite(motorPin, 0);

    // Pause for 2 seconds before executing the loop again
    delay(2000);
}
```
<!--Complete example-->
```Arduino
// Creating the variable for the pin connected to the motor
byte motorPin = A5;

void setup() {
    // Configuring the pin as an output pin, to send data/voltage
    pinMode(motorPin, OUTPUT);

    // Initialize the serial port so we can know when the button is pressed
    Serial.begin(9600);
}

void loop() {
    // Turning the motor On to its maximum intensity
    analogWrite(motorPin, 255);

    // Pause for 1 second
    delay(250);

    // Reducing the intensity of the motor by half
    analogWrite(motorPin, 127);

    // Pause for 1 second
    delay(250);

    // Turning the motor Off
    analogWrite(motorPin, 0);

    // Pause for 2 seconds before executing the loop again
    delay(2000);
}
```
<!--END_DOCUSAURUS_CODE_TABS-->