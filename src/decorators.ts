/**
 * Class Decorator
 */

// Simple decorator

export const Car = (constructor: Function) => {
    constructor.prototype.type = "car";
}

// Factory

export const Wheels = (wheels: number) => {
   return function(constructor: Function): void {
    constructor.prototype.wheels = wheels;
   }
}

/**
 * Method Decorator
 */

export const Logger = (
        target: Object, // The class that the member is part of
        propertyKey: string, // the name of the function
        propertyDescriptor: PropertyDescriptor // the actual function
    ) => {
        console.info(`Calling ${propertyKey}`);
    }

export const HackWithText = (text: string) => {
    return (
        target: Object, // The class that the member is part of
        propertyKey: string, // the name of the function
        propertyDescriptor: PropertyDescriptor // the actual function
    ) => {
        const originalMethod = propertyDescriptor.value;
        // console.log(target);
        // console.log(propertyKey);
        propertyDescriptor.value = function (...args: any[]) {
            // console.log(`I just hacked the function with arguments ${args}!`);
            console.log(text);
            originalMethod.apply(this, args);
    }
}}

/**
 * Property Decorator
 */

export const Prop = (target: Object, propertyName: string) => {
    let internalValue: any;

    const get = () => {
        console.log('Getting value....');
        return internalValue;
    }

    const set = (newValue: any) => {
        console.log(`Setting value to ${newValue}`);
        internalValue = newValue;
    }

    Object.defineProperty(target, propertyName, { get, set });
}

/**
 * Parameter Decorator
 */

export const Param = (target: Object, propertyName: string, index: number) => {
    console.log(propertyName, index);
}