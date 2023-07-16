function animateButton() {
    let button = document.getElementById('demoButton');

    button.style.padding = '20px 40px';
    button.style.fontSize = '30px';
}

function freezePage() {
    // Infinite loop will cause the browser to freeze
    while (true) {}
}
