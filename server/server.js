const PORT = 8000;
const express = require('express');
const cors = require('cors');
const {setIO} = require('../controller/monitor');

class MyServer{
    constructor(){
        this.port = PORT;
        this.app = express();
        this.server = require("http").createServer(this.app);
        this.io = require("./sockets/sockets").initialize(this.server);
        require('./consumer/consumer');
        this.exportIO();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    
    routes(){
        this.app.use('/freeDockerResources', require('../routes/routes'));
        this.app.use('/launchNew', require('../routes/routes'));
        this.app.use('/', require('../routes/routes'));
    }

    exportIO() {
        setIO(this.io);
    }

    listen(){
        this.server.listen(this.port);
        console.log(`Server on! PORT ${this.port}`);
    }
}

module.exports = MyServer