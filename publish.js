let gh_pages = require("gh-pages");

gh_pages.publish("build", (e) => {
  if (e) throw new Error(e);

  console.log("Success Publish");
});
