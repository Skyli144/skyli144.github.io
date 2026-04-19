function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    if (pageId === 'stats') {
        title.innerText = "Mercado en Vivo";
        // Filtro: Acciones con mayor capitalización (estabilidad)
        content.innerHTML = `
            <div class="widget-wrapper" style="height: 550px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } 
    
    else if (pageId === 'prob') {
        title.innerText = "Potencial de Rebote";
        // CONFIGURACIÓN: Buscamos "Oversold" (Sobrevendidos). 
        // Son acciones que han bajado pero técnicamente indican que van a subir pronto.
        content.innerHTML = `
            <p style="color: var(--accent); font-weight: bold; margin-bottom:10px;">📉 Oportunidades por Descuento</p>
            <p style="color: #888; font-size: 0.8rem; margin-bottom:15px;">Acciones que han bajado pero tienen indicadores de recuperación rápida.</p>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22technical%22%2C%22defaultScreen%22%3A%22oversold%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    } 
    
    else if (pageId === 'personal') {
        title.innerText = "Guía de Alta Rentabilidad";
        // CONFIGURACIÓN: "Earnings Sellers" o "High Dividend".
        // Buscamos empresas con subvaluación o alta probabilidad de beneficios por fundamentales.
        content.innerHTML = `
            <div class="personal-card">
                <h3>💎 Joyas del Mercado</h3>
                <p>Selección automática de empresas infravaloradas con alto índice de ganancias proyectadas.</p>
            </div>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22undervalued%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    }
}

window.onload = () => {
    renderPage('stats', document.getElementById('default-btn'));
};
