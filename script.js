// Cores originais da Monalisa (palette renascentista)
const cores = {
    pele: '#D4A574',
    peloEscuro: '#8B6F47',
    olhos: '#3D2817',
    olhosClaro: '#5C4A3D',
    branco: '#FFFACD',
    sobancelha: '#4A3728',
    roupa: '#2D1B0A',
    fundo: '#8B7355',
    bokeh: '#A0826D'
};

// Configuração do canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Tamanho do canvas
canvas.width = 800;
canvas.height = 900;

// Posição do mouse
let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Rastreamento do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Função para desenhar a Monalisa
function desenharMonalisa() {
    // Limpar canvas
    ctx.fillStyle = cores.fundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Fundo bokeh (efeito desfocado renascentista)
    desenharFundoBokeh();

    // Desenhar cabeça
    desenharCabeca();

    // Desenhar cabelo
    desenharCabelo();

    // Desenhar face
    desenharFace();

    // Desenhar olhos (com rastreamento do mouse)
    desenharOlhos();

    // Desenhar sobrancelhas
    desenharSobrancelhas();

    // Desenhar nariz
    desenharNariz();

    // Desenhar boca (sorriso místico)
    desenharBoca();

    // Desenhar roupa
    desenharRoupa();

    // Desenhar braço e mão
    desenharBracos();

    // Desenhar detalhes finais
    desenharDetalhes();
}

// Função para desenhar o fundo bokeh
function desenharFundoBokeh() {
    ctx.save();
    
    // Camadas de fundo com gradiente
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#A0826D');
    gradient.addColorStop(0.5, '#8B7355');
    gradient.addColorStop(1, '#7A6347');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adicionar textura bokeh com círculos desfocados
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 30; i++) {
        ctx.fillStyle = cores.branco;
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 80 + 20,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
    
    ctx.restore();
}

// Função para desenhar a cabeça
function desenharCabeca() {
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, 280, 120, 140, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sombreado na cabeça
    ctx.fillStyle = cores.peloEscuro;
    ctx.globalAlpha = 0.15;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 + 50, 280, 100, 130, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// Função para desenhar o cabelo
function desenharCabelo() {
    ctx.fillStyle = cores.peloEscuro;

    // Cabelo topo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 120, 180);
    ctx.bezierCurveTo(
        canvas.width / 2 - 140, 150,
        canvas.width / 2 - 100, 130,
        canvas.width / 2, 140
    );
    ctx.bezierCurveTo(
        canvas.width / 2 + 100, 130,
        canvas.width / 2 + 140, 150,
        canvas.width / 2 + 120, 180
    );
    ctx.fill();

    // Cabelo lateral esquerdo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 120, 180);
    ctx.bezierCurveTo(
        canvas.width / 2 - 160, 200,
        canvas.width / 2 - 150, 280,
        canvas.width / 2 - 130, 350
    );
    ctx.bezierCurveTo(
        canvas.width / 2 - 120, 280,
        canvas.width / 2 - 110, 220,
        canvas.width / 2 - 120, 180
    );
    ctx.fill();

    // Cabelo lateral direito
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 120, 180);
    ctx.bezierCurveTo(
        canvas.width / 2 + 160, 200,
        canvas.width / 2 + 150, 280,
        canvas.width / 2 + 130, 350
    );
    ctx.bezierCurveTo(
        canvas.width / 2 + 120, 280,
        canvas.width / 2 + 110, 220,
        canvas.width / 2 + 120, 180
    );
    ctx.fill();

    // Detalhes do cabelo
    ctx.strokeStyle = cores.peloEscuro;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.3;

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 80 + i * 30, 140);
        ctx.quadraticCurveTo(
            canvas.width / 2 - 60 + i * 30, 160,
            canvas.width / 2 - 70 + i * 30, 200
        );
        ctx.stroke();
    }

    ctx.globalAlpha = 1;
}

// Função para desenhar a face
function desenharFace() {
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, 300, 100, 120, 0, 0, Math.PI * 2);
    ctx.fill();

    // Blush (sombreado nas bochechas)
    ctx.fillStyle = '#E8B8A0';
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 - 70, 320, 40, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 + 70, 320, 40, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// Função para desenhar os olhos com rastreamento do mouse
function desenharOlhos() {
    const olhoEsquerdoX = canvas.width / 2 - 40;
    const olhoEsquerdoY = 270;
    const olhoDireitoX = canvas.width / 2 + 40;
    const olhoDireitoY = 270;
    const tamanhoOlho = 18;
    const tamanhoIris = 10;
    const tamanhoAluno = 6;

    // Desenhar branco dos olhos
    ctx.fillStyle = cores.branco;
    ctx.beginPath();
    ctx.ellipse(olhoEsquerdoX, olhoEsquerdoY, tamanhoOlho, tamanhoOlho + 2, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(olhoDireitoX, olhoDireitoY, tamanhoOlho, tamanhoOlho + 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Calcular a direção do mouse para os olhos
    const angleEsquerdo = Math.atan2(mouseY - olhoEsquerdoY, mouseX - olhoEsquerdoX);
    const angleDireito = Math.atan2(mouseY - olhoDireitoY, mouseX - olhoDireitoX);

    // Calcular posição da íris seguindo o mouse
    const irisDistancia = tamanhoOlho - tamanhoIris - 2;
    
    const irisEsquerdoX = olhoEsquerdoX + Math.cos(angleEsquerdo) * irisDistancia;
    const irisEsquerdoY = olhoEsquerdoY + Math.sin(angleEsquerdo) * irisDistancia;

    const irisDireitoX = olhoDireitoX + Math.cos(angleDireito) * irisDistancia;
    const irisDireitoY = olhoDireitoY + Math.sin(angleDireito) * irisDistancia;

    // Desenhar íris (olhos castanhos)
    ctx.fillStyle = cores.olhos;
    ctx.beginPath();
    ctx.arc(irisEsquerdoX, irisEsquerdoY, tamanhoIris, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(irisDireitoX, irisDireitoY, tamanhoIris, 0, Math.PI * 2);
    ctx.fill();

    // Desenhar aluno (reflexo)
    ctx.fillStyle = cores.branco;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(irisEsquerdoX - 2, irisEsquerdoY - 2, tamanhoAluno, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(irisDireitoX - 2, irisDireitoY - 2, tamanhoAluno, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Contorno dos olhos
    ctx.strokeStyle = cores.peloEscuro;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(olhoEsquerdoX, olhoEsquerdoY, tamanhoOlho, tamanhoOlho + 2, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(olhoDireitoX, olhoDireitoY, tamanhoOlho, tamanhoOlho + 2, 0, 0, Math.PI * 2);
    ctx.stroke();
}

// Função para desenhar as sobrancelhas
function desenharSobrancelhas() {
    ctx.strokeStyle = cores.sobancelha;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Sobrancelha esquerda
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 65, 250);
    ctx.quadraticCurveTo(canvas.width / 2 - 40, 240, canvas.width / 2 - 20, 245);
    ctx.stroke();

    // Sobrancelha direita
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 65, 250);
    ctx.quadraticCurveTo(canvas.width / 2 + 40, 240, canvas.width / 2 + 20, 245);
    ctx.stroke();
}

// Função para desenhar o nariz
function desenharNariz() {
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 280);
    ctx.lineTo(canvas.width / 2 - 8, 310);
    ctx.lineTo(canvas.width / 2 + 8, 310);
    ctx.fill();

    // Sombreado no nariz
    ctx.fillStyle = cores.peloEscuro;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 280);
    ctx.lineTo(canvas.width / 2 + 8, 310);
    ctx.lineTo(canvas.width / 2, 305);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Linha do nariz
    ctx.strokeStyle = cores.peloEscuro;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 280);
    ctx.lineTo(canvas.width / 2, 315);
    ctx.stroke();
    ctx.globalAlpha = 1;
}

// Função para desenhar a boca (sorriso característico)
function desenharBoca() {
    // Lábio superior
    ctx.strokeStyle = '#C98E7A';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 35, 330);
    ctx.quadraticCurveTo(canvas.width / 2, 315, canvas.width / 2 + 35, 330);
    ctx.stroke();

    // Lábio inferior (sorriso místico)
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 35, 330);
    ctx.quadraticCurveTo(canvas.width / 2, 345, canvas.width / 2 + 35, 330);
    ctx.stroke();

    // Preenchimento dos lábios
    ctx.fillStyle = '#D9A89A';
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 35, 330);
    ctx.quadraticCurveTo(canvas.width / 2, 320, canvas.width / 2 + 35, 330);
    ctx.quadraticCurveTo(canvas.width / 2, 340, canvas.width / 2 - 35, 330);
    ctx.fill();
    ctx.globalAlpha = 1;
}

// Função para desenhar a roupa
function desenharRoupa() {
    ctx.fillStyle = cores.roupa;

    // Ombro esquerdo
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 100, 400);
    ctx.lineTo(canvas.width / 2 - 150, 500);
    ctx.lineTo(canvas.width / 2 - 80, 500);
    ctx.fill();

    // Ombro direito
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 100, 400);
    ctx.lineTo(canvas.width / 2 + 150, 500);
    ctx.lineTo(canvas.width / 2 + 80, 500);
    ctx.fill();

    // Peito
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 100, 400);
    ctx.lineTo(canvas.width / 2 + 100, 400);
    ctx.lineTo(canvas.width / 2 + 80, 600);
    ctx.lineTo(canvas.width / 2 - 80, 600);
    ctx.fill();

    // Detalhe do tecido (dobras)
    ctx.strokeStyle = cores.peloEscuro;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.3;

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 80 + i * 50, 400);
        ctx.quadraticCurveTo(
            canvas.width / 2 - 70 + i * 50, 500,
            canvas.width / 2 - 60 + i * 50, 600
        );
        ctx.stroke();
    }

    ctx.globalAlpha = 1;
}

// Função para desenhar braços e mãos
function desenharBracos() {
    // Braço esquerdo
    ctx.fillStyle = cores.pele;
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 - 120, 450, 35, 80, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Braço direito
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 + 120, 450, 35, 80, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Mão esquerda
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 - 135, 540, 25, 30, -0.4, 0, Math.PI * 2);
    ctx.fill();

    // Mão direita
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2 + 135, 540, 25, 30, 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Dedos da mão esquerda
    ctx.strokeStyle = cores.pele;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 135, 540);
        ctx.lineTo(canvas.width / 2 - 140 - i * 8, 560 + i * 5);
        ctx.stroke();
    }

    // Dedos da mão direita
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 + 135, 540);
        ctx.lineTo(canvas.width / 2 + 140 + i * 8, 560 + i * 5);
        ctx.stroke();
    }
}

// Função para desenhar detalhes finais
function desenharDetalhes() {
    // Rugas de expressão
    ctx.strokeStyle = cores.peloEscuro;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.15;

    // Rugas ao redor dos olhos
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 - 60, 260 + i * 8, 15, 0, Math.PI * 2);
        ctx.stroke();
    }

    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width / 2 + 60, 260 + i * 8, 15, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Rugas ao redor da boca
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 50, 350);
    ctx.quadraticCurveTo(canvas.width / 2 - 45, 360, canvas.width / 2 - 40, 370);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 50, 350);
    ctx.quadraticCurveTo(canvas.width / 2 + 45, 360, canvas.width / 2 + 40, 370);
    ctx.stroke();

    ctx.globalAlpha = 1;
}

// Animar a arte
function animar() {
    desenharMonalisa();
    requestAnimationFrame(animar);
}

// Iniciar animação quando a página carregar
window.addEventListener('load', animar);
