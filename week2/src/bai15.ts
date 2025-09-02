// bai15 placeholder

const func = async function (){
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
    return 1;
};

const func2 = async function (){
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
    return 2;
};

export async function process2Func() : Promise<number>{
    const res1 = await func();
    const res2 = await func2();
    return res1 + res2;
}
