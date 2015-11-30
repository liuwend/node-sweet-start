/**
 * Created by liuwendi on 15/11/22.
 */

/**
 * log 工厂对象
 * 对于没有特殊要求的log全部放在"$项目名.log"log文件里面
 * 对于有特殊有钱的log，单独创建log文件
 * @type {*|exports|module.exports}
 */
var log4js = require('log4js');
log4js.configure(__dirname + '/conf/log4js.json');

var fourtLog4js = log4js.getLogger('fourt');