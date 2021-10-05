const axios = require('axios')
const { exec } = require('child_process');
let io;
const PATH = process.cwd();
let instances_index = 2;
const ip_base = '119.18.0.';
let instances_amount = 0;
let on_dispute_amount = 0;
let dispute_list = [];

const launchNewInstance = (req, res) => {
    exec(PATH + '/scripts/launchInstance.sh ' + instances_index, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        exec(PATH + '/scripts/ip_appender.sh ' + ip_base + instances_index, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            instances_index++;
            instances_amount++;
        });
    });
}

const setIO = (in_io) => {
    io = in_io;
}

const freeDockerResources = (req, res) => {
    console.log(req.body);
    io.emit('free');
    res.send('ok')
}

const disputeFirst = (req, res) => {
    if (on_dispute_amount == 0) {
        instances_amount -= 1;
    }
    dispute_list.push(req.body.code);
    on_dispute_amount++;
    if (on_dispute_amount == instances_amount) {
        console.log('dispute winner: ' + dispute_list[0])
        axios.get('http://localhost:500'+ dispute_list[0] +'/disputeWinner').
            then(function (response) {
            }).catch(err => {
                console.log('errxd')
            });
            on_dispute_amount = 0;
            dispute_list = [];
    }
}

const killInstance = (req, res) => {
    console.log('Killing ' + req.body.code)
    exec(PATH + '/scripts/kill.sh ' + req.body.code, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        //LOGS HERE
    });
}

module.exports = {
    launchNewInstance,
    setIO,
    freeDockerResources,
    killInstance,
    disputeFirst
}