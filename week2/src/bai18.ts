// bai18 placeholder

const fakeUser = new Promise<{name: string, age: number}>((resolve) => {
  setTimeout(() => {
    resolve({ name: "John Doe", age: 30 });
  }, 5000);
});

export async function getUserInfo(): Promise<string> {
  const user = await fakeUser;
  return `User Info: Name - ${user.name}, Age - ${user.age}`;
}
