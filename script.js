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
        title.innerText = "Radar de Probabilidades";
        content.innerHTML = `
            <div class="personal-card">
                <h3>🔍 Escáner Técnico en Tiempo Real</h3>
                <p>Este radar analiza automáticamente las empresas de EE.UU. y te dice cuáles tienen mayor probabilidad de subida (Compra) o bajada (Venta) ahora mismo.</p>
            </div>
            
            <div class="widget-wrapper" style="height: 600px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22technical_rating%22%2C%22defaultScreen%22%3A%22top_gainers%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%7D" 
                        width="100%" height="100%" frameborder="0"></iframe>
            </div>
    
            <div class="personal-card" style="margin-top: 20px;">
                <h4>💡 Cómo leer este radar:</h4>
                <ul style="font-size: 0.85rem; color: #ccc; padding-left: 15px;">
                    <li><b>Fuerte Compra:</b> Alta probabilidad de que la tendencia siga subiendo.</li>
                    <li><b>Fuerte Venta:</b> Alta probabilidad de que el precio siga cayendo.</li>
                    <li><b>Neutral:</b> El mercado está esperando noticias, mejor no entrar aún.</li>
                </ul>
            </div>
        `;
    }
    
    else if (pageId === 'personal') {
        title.innerText = "Mi Guía Personal";
        content.innerHTML = `
            <div class="personal-card">
                <h3>💎 Selección Dinámica de Activos</h3>
                <p>Gráficos actualizados al segundo de las 5 acciones con mayor solidez actual.</p>
            </div>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/market-overview/?colorTheme=dark&showChart=true&locale=es&tabs=%5B%7B%22title%22%3A%22Acciones%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22NASDAQ%3AAPL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ANVDA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AMSFT%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAMZN%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AGOOGL%22%7D%5D%7D%5D" 
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
