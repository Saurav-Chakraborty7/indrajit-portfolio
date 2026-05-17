const Pageclip = require("pageclip");

async function test() {
  const apiKey = "api_LH1uFNHVIzuOA56oPmmOOalficagJWp0";
  const pageclip = new Pageclip(apiKey);

  console.log("Testing with default form...");
  let res1 = await pageclip.send({ test: "data" });
  console.log("Default response:", res1);

  console.log("Testing with 'contact' form...");
  let res2 = await pageclip.send("contact", { test: "data" });
  console.log("Contact response:", res2);
}

test();
