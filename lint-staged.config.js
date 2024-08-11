const config = {
  '{src,test}/**/*.{js,ts}': 'eslint --cache --fix',
  '{src,test}/**': 'prettier --write'
};

export default config;
