(() => {
    console.log(io)
    const socket = io('http://localhost:3001');
    socket.on('connect', () => {
        console.log('CONNECT ON CLIENT ',socket.id); 
    });


    const button = document.getElementById("message-button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        socket.emit('message', "DATA")
    });
})()