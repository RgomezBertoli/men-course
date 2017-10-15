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
    `Es un entorno de desarrollo que corre sobre el motor ${colors.cyan.bold('V8')} desarrollado`,
    `por Google en 2014 y está basado en un modelo de operaciones de E/S orientado a eventos.`,
    `En su última versión ya tiene incorporado el estandar de JS, ECMAScript2017, ${colors.cyan.bold('ES7')}`,
    '<white-space>',
    `El propio ecosistema incluye un gestor de paquetes, ${colors.cyan.bold('NPM')},`,
    'que nos permite controlar de forma sencilla las dependencias de nuestro proyecto',
    '<white-space>',
    'URL:',
    `${colors.green('https://nodejs.org/es/')}`,
    '<white-space>',
    'Para nosotros lanzar nuestros programas Javascript solo tenemos que lanzar este comando:',
    '<white-space>',
    `<center>${colors.cyan.bold('$ node path/to/script.js')}</center>`,
    '<white-space>',
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

const express = [
    `<center>${colors.blue('ExpressJS')}</center>`,
    '<br>',
    '<white-space>',
    `${colors.cyan.bold('ExpressJS')} es una ${colors.cyan.bold('librería Javascript')} para NodeJS que nos permite crear aplicaciones`,
    `de servidor de manera sencilla`,
    '<white-space>',
    'Express nos ofrece una serie de herramientas con las que poder gestionar el direccionamiento',
    'y las respuestas a los diferentes servicios que desarrollemos.',
    'Los objetos principales de la librería son:',
    '<white-space>',
    `   1. ${colors.cyan.bold('Application')}: Nos permitirá configurar nuestra aplicación`,
    '<white-space>',    
    `   2. ${colors.cyan.bold('Router')}: Se encargará del manejo de las llamadas a los diferentes endpoints`,
    '<white-space>',
    `   3. ${colors.cyan.bold('Request')} y ${colors.cyan.bold('Response')}: Son los objetos que representan las peticiones que realizamos`,
    '   a cada uno de los endpoint. El objeto Response es el encargado de generar la respuesta.',
    '<white-space>',
    'URL:',
    `${colors.green('http://expressjs.com/')}`,
];

const mongo = [
    `<center>${colors.blue('🍂  MongoDB')}</center>`,
    '<br>',
    '<white-space>',
    `${colors.cyan.bold('MongoDB')} es una base de datos ${colors.cyan.bold('NoSQL')}, lo que quiere decir que todos los datos`,
    `no son almacenados de forma relacional sino que se guardan como un objeto, ${colors.cyan.bold('JSON')}.`,
    '<white-space>',
    'A cada uno de estos objetos se le asigna un ID con el cual podríamos hacer las',
    'relaciones para poder obtener las relaciones entre los diferentes objetos',
    'y colecciones de la base de datos.',
    '<white-space>',
    'URL:',
    `${colors.green('https://www.mongodb.com/es')}`,
    '<white-space>',
    'Para hacer más facil el trato de los datos en MongoDB, se suele utilizar el ODM,',
    `${colors.cyan.bold('Mongoose')}, el cuál nos ofrece una serie de herramientas con las que podemos`,
    `crear los modelos que guardaremos en la ${colors.cyan.bold('BBDD')}. 💻`,
    '<white-space>',
    'URL:',
    `${colors.green('http://mongoosejs.com/docs/guide.html')}`, 
];

const end = [
    `<center>${colors.blue('FIN')}</center>`,
    '<br>',
    '<white-space>',
    colors.green('      __.,,------.._'),
    colors.green('    ,"   _      _   "`.'),
    colors.green('   /.__, ._  -=- _"`    Y'),
    colors.green('  (.____.-.`      ""`   j'),
    colors.green("   VvvvvvV`.Y,.    _.,-'       ,     ,     ,"),
    colors.green(`      Y    ||,   '"\         ,/    ,/    ./`),
    colors.green("      |   ,'  ,     `-..,'_,'/___,'/   ,'/   ,"),
    colors.green(` ..  ,;,,',-'"\\,'  ,  .     '     ' ""' '--,/    .. ..`),
    colors.green(",'. `.`---'     `, /  , Y -=-    ,'   ,   ,. .`-..||_|| .."),
    colors.green("ff\\\\`. `._        /f ,'j j , ,' ,   , f ,  \\=\\ Y   || ||`||_.."),
    colors.green('l` \` `.`."`-..,-\' j  /./ /, , / , / /l \\   \\=\\l   || `\' || ||...'),
    colors.green('`  `   `-._ `-.,-/ ,\' /`"/-/-/-/-"\'\'\'"`.`.  `\'.\--`\'--..`\'_`\' || ,'),
    colors.green("          \"`-_,',  ,'  f    ,   /      `._    ``._     ,  `-.`'//         ,"),
    colors.green('        ,-"\'\' _.,-\'    l_,-\'_,,\'          "`-._ . "`. /|     `.\'\ ,       |'),
    colors.green("      ,',.,-'\"          \=) ,`-.         ,    `-'._`.V |       \ // .. . /j"),
    colors.green('      |f\\\\               `._ )-."`.     /|         `.| |        `.`-||-\\\\/'),
    colors.green('      l` \`                 "`._   "`--\' j          j\' j          `-`---\''),
    colors.green('       `  `                     "`,-  ,\'/       ,-\'"  /'),
    colors.green(`                               ,'",__,-'       /,, ,-'`),
    colors.green("                               Vvv'            VVv'"),
    '<white-space>',    
    '<center>HASTA PRONTO  ✋</center>'
];

module.exports = {
    intro,
    indice,
    nodejs,
    npm,
    express,
    mongo,
    end
};