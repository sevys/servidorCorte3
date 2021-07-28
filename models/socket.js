class Sockets {
    arregloDatos = [];

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', client => {

            client.on('msj-input-server', (data) => {
                console.log(data);

                this.io.emit('msj-output-client', data);
            })

            client.on('conectado',() => {
                console.log('se conecto un clienteee!');
            })
            
            client.on('message', (nombre, mensaje) => {
                
                this.io.emit('mensajes', {nombre, mensaje});
            })
        });
    }

}

module.exports = Sockets;