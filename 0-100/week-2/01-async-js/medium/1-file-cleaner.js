// Import the NodeJS module called filesystem to handle file operations.
const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("Before editing the file.");

  // Remove extra spaces using regular expression
  const editedData = data.replace(/\s+/g, " ");
  console.log(editedData);

  fs.writeFile("a.txt", editedData, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("After editing the file.");
    console.log(editedData);
  });
});
