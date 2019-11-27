(($) => {
    console.log($)
    const socket = io('http://localhost:3001/chat');
    socket.on('connect', () => {
        console.log('CONNECT ON CLIENT ',socket.id); 
    });

    socket.on('msgToClient', (message) => {
        $('#message-block').append($('<div></div>').text(message));
        
    })
    const input = document.getElementById("input");
    const button = document.getElementById("message-button");
    button.addEventListener("click", (e) => {
        let value = input.value.trim() || null;
        e.preventDefault();
        socket.emit('message', value);
        $('#input').val('');
    });
})(jQuery)