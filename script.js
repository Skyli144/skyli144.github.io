/**
 * Función principal para renderizar las páginas
 * @param {string} pageId - El ID de la sección a cargar
 * @param {HTMLElement} btn - El botón presionado para activar el estado visual
 */
function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    // 1. Gestionar estados de los botones
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) {
        btn.classList.add('active');
    }

    // 2. Lógica de renderizado según la página
    switch(pageId) {
        case 'stats':
            title.innerText = "Mercado en Vivo";
            content.innerHTML = `
                <div class="widget-wrapper" style="height: 500px;">
                    <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
                </div>`;
            break;

        case 'prob':
            title.innerText = "Probabilidad de Éxito";
            content.innerHTML = `
                <p style="color: #888; margin-bottom:15px;">Análisis algorítmico (Intervalo 1H):</p>
                <div class="widget-wrapper" style="height: 400px;">
                    <iframe src="https://s.tradingview.com/embed-widget/technical-analysis/?symbol=NASDAQ%3ANVDA&interval=1h&colorTheme=dark" width="100%" height="100%" frameborder="0"></iframe>
                </div>
                <div class="widget-wrapper" style="height: 400px;">
                    <iframe src="https://s.tradingview.com/embed-widget/technical-analysis/?symbol=BINANCE%3ABTCUSDT&interval=1h&colorTheme=dark" width="100%" height="100%" frameborder="0"></iframe>
                </div>`;
            break;

        case 'personal':
            title.innerText = "Recomendación IA";
            content.innerHTML = `
                <div class="personal-card">
                    <h3>💡 Estrategia Sugerida</h3>
                    <p>Basado en el volumen actual, <b>NVIDIA</b> presenta una divergencia alcista. Recomendamos mantener posiciones en <b>BTC</b> mientras el RSI sea inferior a 70.</p>
                </div>
                <div class="widget-wrapper" style="height: 200px;">
                    <iframe src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ%3AAPL&colorTheme=dark" width="100%" height="100%" frameborder="0"></iframe>
                </div>`;
            break;
    }
}

// Carga por defecto al abrir la app
window.onload = () => {
    const defaultBtn = document.getElementById('default-btn');
    renderPage('stats', defaultBtn);
};