const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const SRC_FOLDER = "./output/js";
const DEST_FOLDER = "../tailwind/tokens/";

fs.readdirSync(SRC_FOLDER).forEach((file) => {
  const { base } = path.parse(file);
  const contents = fs.readFileSync(`${SRC_FOLDER}/${base}`, "utf-8");

  const data = prettier.format(contents, { parser: "babel" });

  fs.writeFileSync(`${DEST_FOLDER}${base}`, data);
});