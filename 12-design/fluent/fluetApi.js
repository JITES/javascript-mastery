import api from "./api";

const obj = new api();

const output = obj.method1('hi')
.method2();

console.log(output);