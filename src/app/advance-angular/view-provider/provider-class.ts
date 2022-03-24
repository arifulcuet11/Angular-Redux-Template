export class MyProvider {
    constructor() {
        console.log("provider property");
    }
    VarMyProvider = "VarMyProvider";
}

export class MyProvider1 {
    VarMyProvider1 = "VarMyProvider1";
    constructor() {
    }
    getString(name: string) {
        console.log("provider property1" + name);
    }
}