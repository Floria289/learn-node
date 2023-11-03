const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else {
    console.log(data);
    fs.unlinkSync("./operations/data.txt"); // delete the file
  }
});
// fs.unlinkSync("./operations/data.txt"); // delete the file
// it is non-blocking, so it will throw the previous to work later, so the system don't know we log an error or the file.