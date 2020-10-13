// foreach

const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Chocho'];

shoppingList.forEach((item, index) => {
    console.log(`${item} at ${index}`);
})

// Map

const newObject = shoppingList.map((item, index)=>{
    return `${item} ${index}`
})

console.log(newObject);

// filter

const filter = shoppingList.filter(item => {
    return item === 'Eggs';
}) 

const not$eggs = shoppingList.filter(item => item !== 'Eggs');

console.log(not$eggs);