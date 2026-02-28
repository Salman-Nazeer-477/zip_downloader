const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function downloadZip(url, outputFolder = "./downloads", filename) {
  const filePath = path.join(outputFolder, filename);

  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream", // IMPORTANT
  });

  const writer = fs.createWriteStream(filePath);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () => {
      console.log("Download complete:", filename);
      resolve();
    });
    writer.on("error", reject);
  });
}


for(let i = 2022; i < 2026; i++){
    downloadZip(`https://www.cbse.gov.in/cbsenew/question-paper/${i}-COMPTT/XII/Physics.zip`, "./downloads", `physics_${i}_supplementary.zip`)
  .catch(console.error);
}
