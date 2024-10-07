const fs = require("fs");
const path = require("path");

function ensureFileExists(pathFile) {
  const dir = path.dirname(pathFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(pathFile))
    fs.writeFileSync(pathFile, JSON.stringify([]), "utf-8");
}

exports.readDataFile = (pathFile) => {
  ensureFileExists(pathFile);
  const data = fs.readFileSync(pathFile, "utf-8");
  return JSON.parse(data);
};

exports.writeDataFile = (pathFile, data) => {
  ensureFileExists(pathFile);
  fs.writeFileSync(pathFile, JSON.stringify(data, null, 2), "utf-8");
};
