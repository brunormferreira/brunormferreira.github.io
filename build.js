// =======================================================================================
// THIS FILE BASICALLY GET MARDOWN DATA YAML AND CONVERT TO .JS THAT EXPORT THE DATA FILE
// =======================================================================================

let fs = require("fs");
let yamlFront = require("yaml-front-matter");

fs.readdirSync("./content").forEach((file) => {
  fs.readFile(`./content/${file}`, "utf8", function (err, data) {
    if (err) throw err;

    const content = yamlFront.loadFront(data);
    delete content.__content;

    fs.writeFile(
      __dirname + "/src/content/" + file.split(".")[0] + ".js",
      `export default ${JSON.stringify(content)}`,
      function (err) {
        if (err) throw err;
      }
    );
  });
});
