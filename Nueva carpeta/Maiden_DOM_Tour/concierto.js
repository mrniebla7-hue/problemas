const pantalla = document.getElementById("pantalla-principal");

pantalla.innerText = "¡SCREAM FOR ME, DGETI!";

pantalla.style.color = "white";

const contenedorSetlist = document.getElementById("caja-canciones");

contenedorSetlist.innerHTML = `
    <ol>
        <li>1. The Number of the Beast</li>
        <li>2. Fear of the Dark</li>
        <li>3. Run to the Hills</li>
    </ol>
`;
const amplificador = document.querySelector(".estado-amp");

amplificador.innerText = "🔊 VOLUMEN AL 11 - ¡PREPARADOS PARA EL ROCK!";


/*
Durante la prueba de sonido tubimos algunos problemas
porque innerHTML interpreta y ejecuta código HTML que se inserta dentro
de la página. Si un locos lograra meter etiquetas maliciosas como
<script>, podría ejecutar JavaScript peligroso dentro del navegador.

En cambio, innerText es más seguro porque solo muestra texto plano.
Aunque alguien escriba etiquetas o scripts, el navegador no los ejecuta,
solamente los imprime como texto normal en pantalla.
*/