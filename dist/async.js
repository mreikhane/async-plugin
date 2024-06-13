"use strict";
// const a = 1
// const b = 2
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log(a)
// setTimeout(() => {
//     console.log(b)
// },3000)
const fetchapi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://expressdaffa-1-r3040328.deta.app/siswa");
        const data = yield response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
});
fetchapi();
