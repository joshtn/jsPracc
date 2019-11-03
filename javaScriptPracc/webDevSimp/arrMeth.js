const items = [ 
    { name: 'Bike', price: 100 },
     { name: 'Tv', price: 200 },
     { name: 'Album', price: 10 },
     { name: 'Book', price: 5 },
     { name: 'Phone', price: 500 },
     { name: 'Computer', price: 1000 },
     { name: 'Keyboard', price: 25 }
    ];


    //filter, can get back array meeting requirement
    const filteredItems = items.filter((item) => {
         return item.price <= 100; 
        });


    //map, gives back array with the names
        const itemNames = items.map((item) => {
             return item.name 
            });
        //map with `` 
         const itemNP = items.map((item) => {
              return `item name ${item.name} item price ${item.price}`
            });

//find
const foundItem = items.find((item) => {
    return item.name === 'Album';
});

//forEach 
items.forEach((item) => {
    console.log(item.name);
});

//some, returns true or false '''anything in the array fufuils condi
const hasCheapItems = items.some((item) => {
    return item.price <= 100;
});

//every, all 'items' need to fufuil cond
const everyItem = items.every((item) => {
    return item.price <= 100;
});

//reduce, does operation on array, ex sum all items in the array
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);


//includes, is x in the array
const nums = [1,2,3,4,5];

const includesThree = nums.includes(3);
console.log(includesThree);
