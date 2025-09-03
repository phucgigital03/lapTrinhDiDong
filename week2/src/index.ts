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
import { fetchOneTodo } from "./bai21";
import { fetchSameTodoMultiple } from "./bai22";
import { fetchCompletedTodos } from "./bai23";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { waitFiveSeconds } from "./bai26";
import { fetchWithRetry } from "./bai27";
import { batchProcess } from "./bai28";
import { makeTask, queueProcess, Task } from "./bai29";
import { returnRej } from "./bai3";
import { demoFetchTodosAllSettled } from "./bai30";
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

// fetchWithTimeout()
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));


// fetchOneTodo()
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));


// fetchSameTodoMultiple(3)
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));

// fetchCompletedTodos()
//   .then(res => console.log(res))
//   .catch(err => console.error('Error:', err.message));

// (async () => {
//   const created = await postData({ title: "Test", body: "Hello world", userId: 1 });
//   console.log(created);
// })();

// downloadFile("example.txt").then(() => {
//   console.log("File downloaded successfully");
// }).catch(err => {
//   console.error("Error downloading file:", err);
// });

// waitFiveSeconds().then(res => {
//   console.log(res);
// }).catch(err => {
//   console.error(err);
// });

// (async () => {
//   const results = await batchProcess();
//   console.log(results);
// })();

// (async () => {
//   const tasks: Task<string>[] = [
//     makeTask("A", 500),
//     makeTask("B", 300),
//     makeTask("C", 700),
//   ];
//   const results = await queueProcess(tasks);
//   console.log("Results:", results);
// })();

// bai27
// (async () => {
//   try {
//     const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/todos/-1', 3);
//     console.log('Success:', data);
//   } catch (e) {
//     console.error('Failed:', e);
//   }
// })();

// bai30
(async () => {
  await demoFetchTodosAllSettled();
})();

