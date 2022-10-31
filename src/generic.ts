const cars: string[] = ["Ford", "Lada"];
const car2: Array<string> = ["Ford", "Lada"];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Woow");
  }, 1000);
});

promise.then((data) => {
  console.log(data.toLowerCase());
});

function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObject(
  { name: "Anton", age: 32 },
  { model: "Ford", year: 2011 }
);
// const merged2 = mergeObject('aaaa', 'bbbbb')

console.log(merged.name);

// ====================================

interface ILenght {
  length: number;
}

function withCount<T extends ILenght>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом обьекте ${value.length} символов`,
  };
}

console.log(withCount("Шишки"));
// console.log(withCount(23))

// =======================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
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

class Collection<T extends string | number | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(["I", "am", "strings"]);
const number = new Collection<number>([2, 4, 6]);
console.log(strings);

// =========================================

interface Car {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number) {
  const car: Partial<Car> = {};

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as Car;
}

// =====================================

const Mycars: Readonly<Array<string>> = ["Lada", "Ford"];
// Mycars.shift()

const ford: Readonly<Car> = {
  model: "Ford",
  year: 2020,
};

// ford.model = 'Ferari'
