var config = require('config-lite');
delete config._;
delete config.$0;
delete config.config;

module.exports=config;