function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    if (pageId === 'stats') {
        title.innerText = "Tendencias Mundiales";
        content.innerHTML = `
            <div class="widget-wrapper" style="height: 550px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } 
    
    else if (pageId === 'prob') {
        title.innerText = "Potencial de Rebote";
        // Cambiamos a un widget de "Hotlists" filtrado por cambios positivos tras caídas
        content.innerHTML = `
            <p style="color: var(--accent); font-weight: bold; margin-bottom:10px;">📉 Señales de Compra Activas</p>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/hotlists/?colorTheme=dark&showSymbolLogo=true&locale=es" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            <p style="color: #888; font-size: 0.8rem; padding: 10px;">Analizando activos con mayor volumen de recuperación hoy.</p>
        `;
    } 
    
    else if (pageId === 'personal') {
        title.innerText = "Guía de Selección IA";
        // Usamos un widget de "Símbolos" más limpio que muestra el top 5 recomendado por analistas
        content.innerHTML = `
            <div class="personal-card">
                <h3>💎 Selección Estratégica</h3>
                <p>Top 5 activos con mayor probabilidad de rentabilidad según indicadores técnicos:</p>
            </div>
            <div class="widget-wrapper" style="height: 450px;">
                <iframe src="https://s.tradingview.com/embed-widget/market-overview/?colorTheme=dark&showChart=true&locale=es&tabs=%5B%7B%22title%22%3A%22Acciones%20Top%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22NASDAQ%3ANVDA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAPL%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAMZN%22%7D%2C%7B%22s%22%3A%22BINANCE%3ABTCUSDT%22%7D%5D%7D%5D" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    }
}

window.onload = () => {
    const defaultBtn = document.getElementById('default-btn');
    renderPage('stats', defaultBtn);
};
