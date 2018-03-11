/**
 * Created by admin on 2018/3/11. 三月
 * yujie
 */

const path = require('path');
const { exec } = require('child_process');
const devDir = path.resolve(__dirname, 'dist');
const proDir = path.resolve(__dirname, '../personalWeb-server/public');
const productionDir = path.resolve(__dirname, '../personalWeb-server/public');

exec(`del /q ${proDir}`, () =>
{
  exec(`move "${devDir}" "${productionDir}"`);
});
