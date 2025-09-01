
export const returnRandomNumber = new Promise((res, rej)=>{
    setTimeout(()=>{
        res(Math.random());
    },1000)
});
