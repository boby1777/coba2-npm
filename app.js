const validator = require('validator');

validator.isEmail('bob@gmail.com'); //=> true
console.log(validator.isEmail('bob@gmail.com'));
console.log(validator.isMobilePhone('0802345678', 'id-ID'));
console.log(validator.isNumeric('080234567a8'));

const chalk = require('chalk');
const nama= 'BOB';
console.log(chalk.italic.bgBlue.black('Hello world'));
const pesan = chalk `lorem {bgYellow aaaaa} {bgRed.black bbbb cccc} dddd {bgBlue.red eeee} {bgGreen.black ffff}
{bgGray.white.italic Nama Saya : ${nama}}`;
// console.log(chalk.bgRed.black(pesan));
console.log(pesan);
console.log(chalk.hex('#DEADED').underline('Hello, world!'));