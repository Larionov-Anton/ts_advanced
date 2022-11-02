"use strict";
/*
function Log(constructor: Function) {}

function Log2(target: any, propName: string | Symbol) {}

function Log3(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {}

@Log
class Component {
  @Log2
  name: string;

  constructor(name: string) {
    this.name = name;
  }

    @Log3
    get componentName() {
        return this.name
    }

  @Log3
  logName(): void {
    console.log(`Component name: ${this.name}`);
  }
}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        },
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
__decorate([
    Bind
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    Component({
        selector: "#card",
        template: `
    <div class="card">
      <div class="card-content">
        <span class="card-tittle">Card Component</span>
      </div>
    </div>
  `,
    })
], CardComponent);
const card = new CardComponent("My Card Component");
// ================================================
const btn = document.querySelector(".btn");
btn.addEventListener("click", card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: "required" });
}
function validate(obj) {
    const objconfig = validators[obj.constructor.name];
    if (!objconfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objconfig).forEach((key) => {
        if (objconfig[key] === "required") {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
const form = new Form("gfh");
if (validate(form)) {
    console.log("Valid: ", form);
}
else {
    console.log("Validation Error");
}
