const colors = require('colors');

const intro = [
    `<center>${colors.blue('Curso de MEN')}</center>`,
    '<br>',
    '<white-space>',
    '<white-space><center>Profesor: 📚  Rubén Gómez Bertoli</center>',
    '<white-space><center>Correo: 💾  ruben.gomezbertoli@altran.com</center>',
    '<white-space><center>Twitter: 👨  @rgomezbertoli</center>'

];

const indice = [
    `<center>${colors.blue('Introducción al curso')}</center>`,
    '<br>',
    '<white-space>',
    `${colors.bold('Índice')}`,
    `<white-space>`,
    '   1. NodeJS',
    '   2. Express JS',
    '   3. MongoDB'
];

const nodejs = [
    `<center>${colors.blue('NodeJS')}</center>`,
    '<br>',
    '<white-space>',
    `Es un entorno de desarrollo que corre sobre el motor ${colors.cyan.bold('V8')} desarrollado por Google en 2014`,
    '<white-space>',
    `Esta basado en un modelo de operaciones de E/S orientado a eventos`,
    '<white-space>',
    `El propio ecosistema incluye un gestor de paquetes, ${colors.cyan.bold('NPM')},`,
    'que nos permite controlar de forma sencilla las dependencias de nuestro proyecto',
    '<white-space>',
    `Actualmente, en su última versión ya tiene incorporado el estandar de JS, ECMAScript2017, ${colors.cyan.bold('ES7')}`,
    '<white-space>',
    'URL:',
    `${colors.green('https://nodejs.org/es/')}`
];

const npm = [
    `<center>${colors.blue('NPM')}</center>`,
    '<br>',
    '<white-space>',
    'El gestor de paquetes de Node nos permite instalar paquetes tanto de forma local',
    'como global a partir de un flag',
    '<white-space>',
    `<center>${colors.cyan.bold('$ npm install -g gulp')}</center>`,
    '<white-space>',
    `Utilizando ese ${colors.cyan.bold('-g')} el paquete se instalará en el entorno global`,
    'y será accesible desde cualquier carpeta como un comando de terminal más.',
    'Sin embargo si usamos el siguiente comando',
    '<white-space>',
    `<center>${colors.cyan.bold('$ npm install --save gulp')}</center>`,
    '<white-space>',
    `Se guardará una referencia en nuestro ${colors.cyan.bold('package.json')} como una dependencia,`,
    'así cualquier persona ajena puede saber que necesita para ejecutar el proyecto,',
    'y usando este comando sobre la raiz del proyecto se le instalarán todas las dependencias',
    '<white-space>',
    `<center>${colors.cyan.bold('$ npm install')}</center>`,
    '<white-space>',
];

const end = [
    `<center>${colors.blue('FIN')}</center>`,
    '<br>',
    '<white-space>',
    '    __.,,------.._',
    '    ,"   _      _   "`.',
    '   /.__, ._  -=- _"`    Y',
    '  (.____.-.`      ""`   j',
    "   VvvvvvV`.Y,.    _.,-'       ,     ,     ,",
    `      Y    ||,   '"\         ,/    ,/    ./`,
    "      |   ,'  ,     `-..,'_,'/___,'/   ,'/   ,",
    ` ..  ,;,,',-'"\\,'  ,  .     '     ' ""' '--,/    .. ..`,
    ",'. `.`---'     `, /  , Y -=-    ,'   ,   ,. .`-..||_|| ..",
    "ff\\\\`. `._        /f ,'j j , ,' ,   , f ,  \\=\\ Y   || ||`||_..",
    'l` \` `.`."`-..,-\' j  /./ /, , / , / /l \\   \\=\\l   || `\' || ||...',
    '`  `   `-._ `-.,-/ ,\' /`"/-/-/-/-"\'\'\'"`.`.  `\'.\--`\'--..`\'_`\' || ,',
    "          \"`-_,',  ,'  f    ,   /      `._    ``._     ,  `-.`'//         ,",
    '        ,-"\'\' _.,-\'    l_,-\'_,,\'          "`-._ . "`. /|     `.\'\ ,       |',
    "      ,',.,-'\"          \=) ,`-.         ,    `-'._`.V |       \ // .. . /j",
    '      |f\\\\               `._ )-."`.     /|         `.| |        `.`-||-\\\\/',
    '      l` \`                 "`._   "`--\' j          j\' j          `-`---\'',
    '       `  `                     "`,-  ,\'/       ,-\'"  /',
    `                               ,'",__,-'       /,, ,-'`,
    "                               Vvv'            VVv'"
]

module.exports = {
    intro,
    indice,
    nodejs,
    npm,
    end
};