function calcularCilindro() {
    document.getElementById('resultado-cone').innerHTML = '';
    document.getElementById('resultado-tronco').innerHTML = '';
    document.getElementById('resultado-esfera').innerHTML = '';

    const altura = parseFloat(document.getElementById('cilindro-altura').value);
    const raio = parseFloat(document.getElementById('cilindro-raio').value);

    if (isNaN(altura) || isNaN(raio)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Fórmulas para Cilindro
    const areaCilindro = 2 * Math.PI * raio * (raio + altura);
    const volumeCilindro = Math.PI * Math.pow(raio, 2) * altura;

    // Fórmulas
    const formulaAreaCilindro = `A = 2π·r·(r + h)`;
    const formulaVolumeCilindro = `V = π·r²·h`;

    // Substitui os valores nos divs
    document.getElementById('altura-cilindro').textContent = `${altura}`;
    document.getElementById('raio-cilindro').textContent = `${raio}`;
    document.getElementById('resultado-cilindro').innerHTML = 
        `Área: ${areaCilindro.toFixed(2)} m² <br> Volume: ${volumeCilindro.toFixed(2)} m³ <br>
         Fórmula da área: ${formulaAreaCilindro} <br> Fórmula do volume: ${formulaVolumeCilindro}`;
}

function calcularCone() {

    document.getElementById('resultado-cilindro').innerHTML = '';
    document.getElementById('resultado-tronco').innerHTML = '';
    document.getElementById('resultado-esfera').innerHTML = '';

    const altura = parseFloat(document.getElementById('cone-altura').value);
    const raio = parseFloat(document.getElementById('cone-raio').value);

    if (isNaN(altura) || isNaN(raio)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Fórmulas para Cone
    const areaCone = Math.PI * raio * (raio + Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2)));
    const volumeCone = (1 / 3) * Math.PI * Math.pow(raio, 2) * altura;

    // Fórmulas
    const formulaAreaCone = `A = π·r·(r + √(r² + h²))`;
    const formulaVolumeCone = `V = (1/3)·π·r²·h`;

    // Substitui os valores nos divs
    document.getElementById('altura-cone').textContent = `${altura}`;
    document.getElementById('raio-cone').textContent = `${raio}`;
    document.getElementById('resultado-cone').innerHTML = 
        `Área: ${areaCone.toFixed(2)} m² <br> Volume: ${volumeCone.toFixed(2)} m³ <br>
         Fórmula da área: ${formulaAreaCone} <br> Fórmula do volume: ${formulaVolumeCone}`;
}

function calcularTronco() {

    document.getElementById('resultado-cilindro').innerHTML = '';
    document.getElementById('resultado-cone').innerHTML = '';
    document.getElementById('resultado-esfera').innerHTML = '';

    const altura = parseFloat(document.getElementById('tronco-altura').value);
    const raioMenor = parseFloat(document.getElementById('tronco-raio-menor').value);
    const raioMaior = parseFloat(document.getElementById('tronco-raio-maior').value);

    if (isNaN(altura) || isNaN(raioMenor) || isNaN(raioMaior)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Fórmulas para Tronco de Cone
    const areaTronco = Math.PI * (raioMenor + raioMaior) * altura + Math.PI * Math.pow(raioMenor, 2) + Math.PI * Math.pow(raioMaior, 2);
    const volumeTronco = (1 / 3) * Math.PI * altura * (Math.pow(raioMenor, 2) + raioMenor * raioMaior + Math.pow(raioMaior, 2));

    // Fórmulas
    const formulaAreaTronco = `A = π·(r₁ + r₂)·h + π·r₁² + π·r₂²`;
    const formulaVolumeTronco = `V = (1/3)·π·h·(r₁² + r₁·r₂ + r₂²)`;

    // Substitui os valores nos divs
    document.getElementById('altura-tronco').textContent = `${altura}`;
    document.getElementById('raio-tronco').textContent = `${raioMenor}`;
    document.getElementById('Raio-tronco').textContent = `${raioMaior}`;
    document.getElementById('resultado-tronco').innerHTML = 
        `Área: ${areaTronco.toFixed(2)} m² <br> Volume: ${volumeTronco.toFixed(2)} m³ <br>
         Fórmula da área: ${formulaAreaTronco} <br> Fórmula do volume: ${formulaVolumeTronco}`;
}

function calcularEsfera() {

    document.getElementById('resultado-cilindro').innerHTML = '';
    document.getElementById('resultado-cone').innerHTML = '';
    document.getElementById('resultado-tronco').innerHTML = '';
    
    const raio = parseFloat(document.getElementById('esfera-raio').value);

    if (isNaN(raio)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Fórmulas para Esfera
    const areaEsfera = 4 * Math.PI * Math.pow(raio, 2);
    const volumeEsfera = (4 / 3) * Math.PI * Math.pow(raio, 3);

    // Fórmulas
    const formulaAreaEsfera = `A = 4·π·r²`;
    const formulaVolumeEsfera = `V = (4/3)·π·r³`;

    // Substitui os valores nos divs
    document.getElementById('raio-esfera').textContent = `${raio}`;
    document.getElementById('resultado-esfera').innerHTML = 
        `Área: ${areaEsfera.toFixed(2)} m² <br> Volume: ${volumeEsfera.toFixed(2)} m³ <br>
         Fórmula da área: ${formulaAreaEsfera} <br> Fórmula do volume: ${formulaVolumeEsfera}`;
}
