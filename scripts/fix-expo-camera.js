const fs = require("fs");
const path = require("path");

const tsConfigPath = path.resolve(
  __dirname,
  "../node_modules/expo-camera/tsconfig.json"
);

if (fs.existsSync(tsConfigPath)) {
  const tsConfig = require(tsConfigPath);
  delete tsConfig.extends;
  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
  console.log("Fixed expo-camera tsconfig.json");
}
