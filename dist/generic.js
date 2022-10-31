"use strict";
const cars = ["Ford", "Lada"];
const car2 = ["Ford", "Lada"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Woow");
    }, 1000);
});
promise.then((data) => {
    console.log(data.toLowerCase());
});
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: "Anton", age: 32 }, { model: "Ford", year: 2011 });
// const merged2 = mergeObject('aaaa', 'bbbbb')
console.log(merged.name);
function withCount(value) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`,
    };
}
console.log(withCount("Шишки"));
// console.log(withCount(23))
// =======================================
function getObjectValue(obj, key) {
    obj[key];
}
const person = {
    name: "Anton",
    age: 32,
};
getObjectValue(person, "name");
getObjectValue(person, "age");
// getObjectValue(person, 'job')
// =========================================
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(["I", "am", "strings"]);
const number = new Collection([2, 4, 6]);
console.log(strings);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
// =====================================
const Mycars = ["Lada", "Ford"];
// Mycars.shift()
const ford = {
    model: "Ford",
    year: 2020,
};
// ford.model = 'Ferari'
//# sourceMappingURL=generic.js.map