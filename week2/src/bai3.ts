
export const returnRej = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej("Something went wrong");
    },3000)
});
