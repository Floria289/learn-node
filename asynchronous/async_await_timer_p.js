const { resolve } = require("path");

function foo() {
  new Promise((resolve) => setTimeout(() => resolve("1"))).then((res) => {
    console.log(res);
    new Promise((resolve) => setTimeout(() => resolve("2"))).then((res) =>
      console.log(res)
    );
  });
}
foo();

async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1"))
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2"))
  );
  console.log(result1);
  console.log(result2);
}

foo();
