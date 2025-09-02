// bai14 placeholder


export async function getNum(num: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
    return num*3;
}
