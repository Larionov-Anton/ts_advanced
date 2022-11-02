/// <reference path="form-namespaces.ts" />

namespace FormSpace {
  class MyForm {
    private type: FormType = "inline";
    private state: FormState = "active";

    constructor(public email: string) {}

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state,
      };
    }
  }

  export const Newform = new MyForm("a@mail.ru");
}
