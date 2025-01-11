These types are immutable and stored directly in the variable. When you store a value of a primitive type in one variable, the new variable buys a copy of it.
In JavaScript, data types are classified into two main categories: primitive and reference (non-primitive) types.
1. Primitive Types:
These types are immutable (unchangeable) and their value is directly stored in the variable. When assigning a primitive type to another variable, it creates a copy of the value.
1.String: A sequence of characters (e.g., "hello", 'JavaScript').
2.Number: Numeric values (e.g., 42, 3.14).
3.BigInt: Very large integers (e.g., 100n).
4.Boolean: Can only be true or false.
5.undefined: Represents a variable that has been declared but not assigned a value.
6.null: Represents intentional absence of any value.
7.Symbol: A unique and immutable value, often used for object property keys.
2. Reference (Non-Primitive) Types:
These types are mutable (changeable) and are stored by reference. When assigning a reference type to another variable, both variables point to the same object in memory.
Object: A complex data type that can store various key-value pairs of different types (e.g., {name: "Sergi", age: 25}).
primitive- no changes
let a = 5;
let b = a;
b = 10
console.log(a,b)
non primitive - changing
let obj1 = {
    name:'sergi'
}
let obj2 = obj1
obj2.name = 'gio'
console.log(obj1)
