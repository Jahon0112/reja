//MITASK I-TASK
function majorityElement(arr) {
  const counts = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// //MITASK G-Task
// function getPositive(arr) {
//   return arr.filter((num) => num > 0).join(" ");
// }
// console.log(getPositive([1, -4, 2]));

// //MITASK G-Task
// function getHighestIndex(arr) {
//   let max = Math.max(...arr);
//   return arr.indexOf(max);
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// //MITASK E-Task
// let newStr = "hello";
// let countReverse = "";
// for (let i = newStr.length - 1; i >= 0; i--) {
//   countReverse += newStr[i];
// }
// console.log(countReverse);

// //MITASK F-Task
// function getReverse(str) {
//   return new Set(str).size !== str.length;
// }

// console.log(getReverse("hello"));

// //MITASK D-Task
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola
//     };
//   }

//   _getTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     return `${hours}:${minutes}`;
//   }

//   qoldiq() {
//     const time = this._getTime();
//     const { non, lagmon, cola } = this.products;
//     const result = `hozir ${time}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//     console.log(result);
//     return result;
//   }

//   sotish(productName, quantity) {
//     const time = this._getTime();
//     if (this.products[productName] !== undefined) {
//       if (this.products[productName] >= quantity) {
//         this.products[productName] -= quantity;
//         console.log(`[${time}] Sotildi: ${quantity}ta ${productName}`);
//       } else {
//         console.log(`[${time}] Xatolik: Omborda yetarli ${productName} yo'q!`);
//       }
//     } else {
//       console.log(`[${time}] Xatolik: Bunday mahsulot mavjud emas!`);
//     }
//   }

//   qabul(productName, quantity) {
//     const time = this._getTime();
//     if (this.products[productName] !== undefined) {
//       this.products[productName] += quantity;
//       console.log(`[${time}] Qabul qilindi: ${quantity}ta ${productName}`);
//     } else {
//       console.log(`[${time}] Xatolik: Bunday mahsulot mavjud emas!`);
//     }
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 3);
// shop.qabul('cola', 4);
// shop.qoldiq();

// //MITASK C-Task
// function checkContent(str1, str2) {
//     let str1Sorted = str1.split("").sort().join("");
//     let str2Sorted = str2.split("").sort().join("");
//     return str1Sorted === str2Sorted;
// }

// console.log(checkContent("mitgroup", "gmtiprou"))

// //MITASK -Task
// function countDigits(son) {
//     let count = 0;
//     for (let x of son) {
//       if (x >= 0 && x <=9) {
//         count += 1;
//       }
//     }
//     return count
// };
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// //MITASK -Task
// function countLetter(soz, harf) {
//     let count = 0;
//     for (x of soz) {
//       if (harf === x) {
//         count = count + 1;
//       }
//     }
//     return count;
//   }
// console.log(countLetter("engineer", "e"))

//B-Task,
//Asynchronous function
//console.log("Jck Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",  //0-20
//     "tog'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "uzingizga ishlashningizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi" //60
// ];

// async function maslahatBering(a){
//     if (typeof a !==  "number") throw new Error("insert a number", null);
//     else if (a <= 20) return  list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout (() => {
//                 resolve(list[5]);
//             },5000);

//         });
//     //  setTimeout(function() {
//     //    return list[5]);
//     //   }, 5000);
//     }
// }
// //call via then/catch
// // console.log('passed here 0');
// // maslahatBering(45) .then((data) =>{
// //     console.log('javob:',data);
// // }).catch((err) =>{
// //     console.log("ERROR:", err);
// // });
// // console.log('passed here 1');

// //call via asyn/await
// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//A-Task,NodeJS event loop
// console.log("Jck Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",  //0-20
//     "tog'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "uzingizga ishlashningizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi" //60
// ];

//CALLBACK function
// function maslahatBering(a, callback){
//     if (typeof a !==  "number") callback ("insert a number", null);
//     else if (a <= 20) callback (null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else{
//      setTimeout(function() {
//         callback(null, list[5]);
//      }, 5000);
//     callback(null, list[5]);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) =>{
//     if (err) console.log('ERROR:', err);
//     else{
//     console.log('javob:', data);
//     }
// });
// console.log('passed here 1');
