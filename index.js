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



const subject = "cs"
// main paper https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/Computer_Science.zip
// supplementary paper https://www.cbse.gov.in/cbsenew/question-paper/2022-COMPTT/XII/computer_science.zip
// main scheme https://www.cbse.gov.in/cbsenew/Marking-Scheme/2022/XII/COMPUTER_SCIENCE.zip
// supplementary scheme https://www.cbse.gov.in/cbsenew/marking-scheme/2022-COMPTT/XII/Computer_Science.zip
for (let i = 2022; i < 2026; i++) {
  downloadZip(`https://www.cbse.gov.in/cbsenew/question-paper/${i}/XII/Computer_Science.zip`, `./downloads/`, `${subject}_${i}.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/question-paper/${i}-COMPTT/XII/computer_science.zip`, `./downloads/`, `${subject}_${i}_supplementary.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/Marking-Scheme/${i}/XII/COMPUTER_SCIENCE.zip`, `./downloads/`, `${subject}_${i}_scheme.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/marking-scheme/${i}-COMPTT/XII/Computer_Science.zip`, `./downloads/`, `${subject}_${i}_supplementary_scheme.zip`)
    .catch(console.error);
  // for 91_computer_science.zip
  downloadZip(`https://www.cbse.gov.in/cbsenew/question-paper/${i}/XII/91_Computer_Science.zip`, `./downloads/`, `${subject}_${i}.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/question-paper/${i}-COMPTT/XII/91_computer_science.zip`, `./downloads/`, `${subject}_${i}_supplementary.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/Marking-Scheme/${i}/XII/91_COMPUTER_SCIENCE.zip`, `./downloads/`, `${subject}_${i}_scheme.zip`)
    .catch(console.error);
  downloadZip(`https://www.cbse.gov.in/cbsenew/marking-scheme/${i}-COMPTT/XII/91_Computer_Science.zip`, `./downloads/`, `${subject}_${i}_supplementary_scheme.zip`)
    .catch(console.error);
}
