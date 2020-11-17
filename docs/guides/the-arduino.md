---
id: the-arduino
title: The Arduino
sidebar_label: The Arduino
---

<style>
article p img { max-width: 75% }
</style>

The Arduino board is a popular, open-source <a href="https://www.techopedia.com/definition/3641/microcontroller" target="_blank">microcontroller</a> used in a variety of projects. It behaves as a small computer and can perform tasks such as **read data from sensors**, **perform operations and decisions** based on this data, and **send data** to other devices.

You can read more about it from the [official Arduino guide](https://www.arduino.cc/en/Guide/Introduction).

![Arduino board](assets/img/arduino.png)

It includes a set of pins that can be connected, or wired, to other components. These pins can be classified into programmable and non-programmable.

## Non-programmable pins
These are pins that have a fixed behavior. The most used non-programmable pins are those that we will use to give power (voltage) to our circuits. These pins will be positive (3.3 Volts or 5 Volts) and negative (Ground - GND).

![Arduino board non-programmable pins](assets/img/arduino-non-programmable-pins.png)

## Programmable pins
We use programmable pins whenever we want to assign specific behaviors to components in our circuits. We will control these pins using our program and, in the Arduino Uno board, they are divided into Analog (A0 to A5) and Digital (0 to 13) pins.