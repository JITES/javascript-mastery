# Javascript Mastery
 - Clear and concise of javascript fundamentals which every developer must know with examples

### Coercion
Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type. For instance, if you do:

### Execution context
Phase 1
- Memory creation phase (allocates memory)
- Hoisting
  
Phase 2 
- Execution phase
- Engine run its code line by linef

---
### Hoisting
In the Phase 1 of memory creation JS will reserve memory for funcitons and variable.

- Function declaration is hoisted while the expression is not


Global execution context is created 

### Closure

### Temporal Dead Zone / let and const
Phase from hoisting till it gets some value, it happens for let and const.
 It is the time since when the variable was hoisted and it was assigned a value

### Block scope & Shadowing
```
var a = 100; // global-scope
let b = 10; // script-scope
{ 
    var a = 10; // shadowing
    let b = 20;
    const c = 30;
}
log(a) // 100
```