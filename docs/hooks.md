# ByteCraft Reactive hooks

## **`useObject`** - Hook for Stateful Object Properties

### **Short Description:**
`useObject` is a hook that enables you to define stateful properties on an object. It allows for dynamic changes to object properties with reactivity, making them capable of triggering side effects when their values are updated.

### **Features:**
- Define stateful properties on plain objects.
- Reactive updates: Trigger side effects when property values change.
- Allows custom handlers for state changes.
- Efficiently manage stateful properties in your objects with minimal overhead.

### **How to Use:**

```js
import { useObject } from "bytecraft/hooks";

// Define an object with stateful properties
const user = {
    name: "John",
    age: 25
};

// Define a handler function for stateful property changes
const objectHandler = (useProp) => {
    useProp("name", (value) => {
        console.log(`Name changed to: ${value}`);
    });

    useProp("age", (value) => {
        console.log(`Age changed to: ${value}`);
    });
};

// Apply the useObject hook to add stateful properties
useObject(user, objectHandler);

// Modify the object's properties to trigger state changes
user.name = "Jane";  // Logs: Name changed to: Jane
user.age = 26;       // Logs: Age changed to: 26
```

---

## **`useArray`** - Hook for Stateful Array Mutations

### **Short Description:**
`useArray` is a hook that adds stateful behavior to arrays, making them capable of reacting to array mutations like `push`, `pop`, `shift`, `unshift`, and `splice`. It provides an API to listen for item additions, removals, and replacements.

### **Features:**
- Stateful behavior for array mutations (`push`, `pop`, `shift`, `unshift`, `splice`).
- Reactivity: Attach custom handlers to item additions, removals, and replacements.
- Efficiently track array changes and trigger side effects.
- Enhance the reactivity of arrays in your applications.

### **How to Use:**

```js
import { useArray } from "bytecraft/hooks";

// Define an array with some items
const items = ["apple", "banana", "cherry"];

// Define a handler function for array mutations
const arrayHandler = (useItem, addAdditionListener, addRemovalListener, addReplaceListener) => {
    // Set up item-specific handlers
    useItem(0, (item, onRemove, onReplace) => {
        onRemove(() => console.log(`Removed item: ${item}`));
        onReplace(() => console.log(`Replaced item: ${item}`));
    });

    // Add custom listeners for array operations
    addAdditionListener(() => console.log("Item added"));
    addRemovalListener(1, () => console.log("Item removed"));
};

// Apply the useArray hook to add stateful behavior
useArray(items, arrayHandler);

// Mutate the array
items.push("date");    // Logs: Item added
items.splice(1, 1);    // Logs: Item removed
```

---

This `README.md` covers the basics of both `useObject` and `useArray`, their features, and how to use them within the ByteCraft framework. Let me know if you'd like any adjustments!