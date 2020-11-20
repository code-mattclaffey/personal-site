module.exports = {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{ts,tsx,js,scss,json,md,html,yml}": ["prettier --write"],
};
