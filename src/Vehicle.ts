/**
 * Example of decorators in classes
 */

import { Car, Wheels, HackWithText, Prop, Param, Logger } from './decorators'

@Wheels(30)
@Car
export class Vehicle {

  @Prop
  public make: string;

  private wheels: number;
  private type: string;

  constructor(make: string) {
    this.make = make;
  }

  @HackWithText("Hacking is my business!")
  @Logger
  printVehicle(@Param prefix: string = '') {
    console.log(`${prefix}: Our vehicle is a ${this.type} of make ${this.make} and has ${this.wheels} wheels.`)
  }
}