// bai16 placeholder


const func = async function (){
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
    return 1;
};

const func2 = async function (){
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
    return 2;
};

export async function process2FuncParallel() : Promise<number>{
    const [res1, res2] = await Promise.all([func(), func2()]);
    return res1 + res2;
}



