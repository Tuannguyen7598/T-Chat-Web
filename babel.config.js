/**
 * npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript
 */
module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
};
