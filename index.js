let primeironome = prompt("Digite seu primeiro nome.");
if (primeironome) { 
    let sobrenome = prompt("Digite seu sobrenome.");
    if (sobrenome) {
        alert(`Nome Completo: ${primeironome} ${sobrenome}.`);
        alert(`Nome de catálogo: ${sobrenome.toUpperCase()}, ${primeironome}.`);
    } else {
        close();
    }
}
else {
    close ();
}