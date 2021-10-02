const axios = require('axios')
const { exec } = require('child_process');
let io;
const PATH = process.cwd();
let instances_index = 2;
const ip_base = '119.18.0.';

const launchNewInstance = (req, res) => {
    exec(PATH + '/scripts/build.sh ' + instances_index, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        exec(PATH + '/scripts/ip_appender.sh ' + ip_base + instances_index, (err,stdout, stderr) => {
            if(err) {
                console.error(err);
                return;
            }
            instances_index++;
        });
    });
}

const setIO = (in_io) => {
    io = in_io;
}

const freeDockerResources = (req, res) =>{ 
    console.log(req.body);
    io.emit('free');
    res.send('ok')
}

module.exports = {
    launchNewInstance, 
    setIO,
    freeDockerResources
}