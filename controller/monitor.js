const axios = require('axios')
const { exec } = require('child_process');
const PATH = process.cwd();
let instances_index = 2;

const launchNewInstance = (req, res) => {
    exec(PATH + '/scripts/build.sh ' + instances_index, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
    });
    instances_index++;
}

module.exports = {
    launchNewInstance
}