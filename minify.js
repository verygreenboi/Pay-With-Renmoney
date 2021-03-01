const fs = require('fs-extra');
const concat = require('concat');
(async function compile() {
  const project = 'pay-with-renmoney-btn';
  const files = [
    `./dist/${project}/runtime.js`,
    `./dist/${project}/polyfills.js`,
    `./dist/${project}/main.js`,
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/renmoney-pay-btn.js');
  await fs.copyFile('./dist/pay-with-renmoney-btn/styles.css', 'elements/styles.css');
  try {
    await fs.copy('./dist/pay-with-renmoney-btn/assets/', 'elements/assets/');
  } catch (e) {
    console.log('No assets')
  }
})()
