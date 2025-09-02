import { returnHell0 } from "./bai1";
import { doneFunc } from "./bai10";
import { helloAsync } from "./bai11";
import { callSimulatedTask } from "./bai12";
import { fetchData } from "./bai13";
import { getNum } from "./bai14";
import { process2Func } from "./bai15";
import { process2FuncParallel } from "./bai16";
import { demoBai17, demoBai17_2 } from "./bai17";
import { getUserInfo } from "./bai18";
import { fetchUsers, fetchUsersSequential } from "./bai19";
import { return10 } from "./bai2";
import { fetchWithTimeout } from "./bai20";
import { returnRej } from "./bai3";
import { returnRandomNumber } from "./bai4";
import { getRandomNumber } from "./bai5";
import { task } from "./bai6";
import { raceFirst } from "./bai7";
import { addIt } from "./bai8";
import { processArray } from "./bai9";

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

fetchWithTimeout()
  .then(res => console.log(res))
  .catch(err => console.error('Error:', err.message));
