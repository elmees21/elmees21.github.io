const flashContainer = document.getElementById('flash-container');
const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
        const swfData = e.target.result;

        const player = RufflePlayer.newest();
        player.load(swfData);
        player.set_container(flashContainer);
        player.set_size(800, 600); // Cambia el tamaño según tus preferencias
        player.run();

        fileInput.classList.add('hidden');
        flashContainer.classList.remove('hidden');
    };

    fileReader.readAsArrayBuffer(file);
});
