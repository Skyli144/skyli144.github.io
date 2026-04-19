/**
 * Genera el HTML del iframe de TradingView de forma segura
 * @param {string} symbol - El ticker de la empresa (ej: AAPL, NVDA, BTCUSDT)
 * @param {string} type - 'technical' para análisis o 'mini' para resumen
 */
function getWidgetHTML(symbol, type = 'technical') {
    // Limpiamos el símbolo por si acaso (espacios, mayúsculas)
    const s = symbol.trim().toUpperCase();
    
    // Si el usuario olvida el mercado (NASDAQ, BINANCE), intentamos poner uno por defecto
    // Pero lo ideal es que el widget lo busque automáticamente si no lleva prefijo
    const fullSymbol = s.includes(':') ? s : `NASDAQ:${s}`;

    if (type === 'technical') {
        return `
            <div class="widget-wrapper" style="height: 400px;">
                <iframe src="https://s.tradingview.com/embed-widget/technical-analysis/?symbol=${fullSymbol}&interval=1h&colorTheme=dark&locale=es" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } else {
        return `
            <div class="widget-wrapper" style="height: 220px;">
                <iframe src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=${fullSymbol}&colorTheme=dark&locale=es" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    }
}

function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    if (pageId === 'stats') {
        title.innerText = "Mercado en Vivo";
        // Widget de lista general (Screener) - Este siempre funciona porque es una lista
        content.innerHTML = `
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } 
    
    else if (pageId === 'prob') {
        title.innerText = "Probabilidad de Éxito";
        // Aquí puedes cambiar "NVDA" o "TSLA" por cualquier otra y FUNCIONARÁ
        content.innerHTML = `
            <p style="color: #888; margin-bottom:10px;">Análisis de tendencia:</p>
            ${getWidgetHTML('NVDA', 'technical')}
            ${getWidgetHTML('TSLA', 'technical')}
        `;
    } 
    
    else if (pageId === 'personal') {
        title.innerText = "Recomendación IA";
        content.innerHTML = `
            <div class="personal-card">
                <h3>💡 Estrategia Sugerida</h3>
                <p>El mercado tecnológico muestra alta volatilidad. Recomendamos observar <b>Apple (AAPL)</b> para entradas seguras.</p>
            </div>
            ${getWidgetHTML('AAPL', 'mini')}
            ${getWidgetHTML('BINANCE:BTCUSDT', 'mini')}
        `;
    }
}

window.onload = () => {
    renderPage('stats', document.getElementById('default-btn'));
};