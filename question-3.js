var fs = require('fs');

const dir = './Logs';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
for (let i = 0; i < 10; i++){
    fs.writeFileSync('./Logs/','logs'[i],'.txt', 'This is logs'[i]);
}
