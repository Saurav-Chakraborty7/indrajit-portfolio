const Pageclip = require("pageclip");

async function test() {
  const apiKey = "api_LH1uFNHVIzuOA56oPmmOOalficagJWp0";
  const pageclip = new Pageclip(apiKey);

  console.log("Fetching default form...");
  let res1 = await pageclip.fetch();
  console.log("Total items:", res1.data.length);
  console.log("Latest item:", res1.data[0]);
}

test();
