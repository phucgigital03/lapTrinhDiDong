"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai20_1 = require("./bai20");
// return10.then((res)=>{
//     console.log(res);
// });
// returnHell0.then((res)=>{
//     console.log(res);
// });
// returnRej.catch((err)=>{
//     console.log(err);
// });
// returnRandomNumber
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// getRandomNumber().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// const p1 = task("Task1", 500, 10);
// const p2 = task("Task2", 300, 20);
// const p3 = task("Task3", 800, 30);
// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log("All results:", results);          // [10, 20, 30]
//     const sum = results.reduce((a, b) => a + b, 0);
//     console.log("Sum:", sum);
//   })
//   .catch(err => {
//     console.error("One task failed:", err);
//   });
// raceFirst()
// .then(res=>{
//     console.log("Race result:", res);
// })
// .catch(err=>{
//     console.error("Race error:", err);
// });
// addIt(4)
//   .then(res => {
//     console.log("Add result:", res);
//   })
//   .catch(err => {
//     console.error("Add error:", err);
//   });
// processArray([1, 2, 3, 4, 5])
//   .then(res => {
//     console.log("Processed array:", res);
//   })
//   .catch(err => {
//     console.error("Processing error:", err);
//   });
// doneFunc();
// helloAsync().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });
// callSimulatedTask();
// fetchData();
// getNum(2).then(res=>{
//     console.log(res);
// }); 
// process2Func().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.error(err);
// });
// process2FuncParallel().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.error(err);
// });
// demoBai17();
// demoBai17_2();
// getUserInfo().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });
// fetchUsersSequential([1,2,3,4]).then((res)=>{
//     console.log("sequentially running");
//     console.log(res);
// });
// fetchUsers([1,2,3,4]).then((res)=>{
//     console.log("parallely running");
//     console.log(res);
// });
(0, bai20_1.fetchWithTimeout)()
    .then(res => console.log(res))
    .catch(err => console.error('Error:', err.message));
