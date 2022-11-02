"use strict";
/// <reference path="form-namespaces.ts" />
var FormSpace;
(function (FormSpace) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = "inline";
            this.state = "active";
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    FormSpace.Newform = new MyForm("a@mail.ru");
})(FormSpace || (FormSpace = {}));
