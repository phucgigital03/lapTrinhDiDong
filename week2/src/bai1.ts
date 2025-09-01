
export const returnHell0 = new Promise((res)=>{
    setTimeout(()=>{
        res("Hello Async");
    },2000)
});
