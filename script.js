function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    if (pageId === 'stats') {
        title.innerText = "Mercado General";
        content.innerHTML = `
            <div class="widget-wrapper" style="height: 550px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } 
    
    else if (pageId === 'prob') {
        title.innerText = "Alta Probabilidad";
        // SELECCIÓN DE ACTIVOS CON PROYECCIÓN A CORTO Y LARGO PLAZO
        content.innerHTML = `
            <p style="color: var(--accent); font-weight: bold; margin-bottom:15px;">🚀 Proyecciones Estratégicas</p>
            
            <div class="personal-card">
                <h3>📈 Corto Plazo: NVIDIA (NVDA)</h3>
                <p>La demanda de chips de IA sigue superando la oferta. Indicadores técnicos sugieren continuación de tendencia.</p>
            </div>
            ${getWidgetHTML('NVDA', 'technical')}

            <div class="personal-card">
                <h3>⏳ Largo Plazo: TESLA (TSLA)</h3>
                <p>Tras la corrección, los niveles actuales presentan una alta probabilidad de acumulación para el próximo ciclo de conducción autónoma.</p>
            </div>
            ${getWidgetHTML('TSLA', 'technical')}
        `;
    } 
    
    else if (pageId === 'personal') {
        title.innerText = "Mi Guía Personal";
        content.innerHTML = `
            <div class="personal-card">
                <h3>💎 Top Acciones Recomendadas</h3>
                <p>Análisis en tiempo real de los activos con mayor proyección y solidez en el mercado actual.</p>
            </div>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/market-overview/?colorTheme=dark&showChart=true&locale=es&tabs=%5B%7B%22title%22%3A%22Acciones%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22NASDAQ%3AAPL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ANVDA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAMZN%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AGOOGL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AMETA%22%7D%5D%7D%5D" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    }
}

// Función auxiliar para mantener los widgets limpios
function getWidgetHTML(symbol, type = 'technical') {
    const s = symbol.trim().toUpperCase();
    const fullSymbol = s.includes(':') ? s : `NASDAQ:${s}`;

    if (type === 'technical') {
        return `
            <div class="widget-wrapper" style="height: 380px;">
                <iframe src="https://s.tradingview.com/embed-widget/technical-analysis/?symbol=${fullSymbol}&interval=1h&colorTheme=dark&locale=es" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } else {
        return `
            <div class="widget-wrapper" style="height: 180px;">
                <iframe src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=${fullSymbol}&colorTheme=dark&locale=es" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    }
}

window.onload = () => {
    renderPage('stats', document.getElementById('default-btn'));
};
