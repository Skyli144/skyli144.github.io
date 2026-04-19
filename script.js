function renderPage(pageId, btn) {
    const content = document.getElementById('app-content');
    const title = document.getElementById('page-title');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    if (pageId === 'stats') {
        title.innerText = "Mercado de Acciones";
        // Filtro general de empresas líderes (Solo acciones de EE.UU.)
        content.innerHTML = `
            <div class="widget-wrapper" style="height: 550px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22most_capitalized%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>`;
    } 
    
    else if (pageId === 'prob') {
        title.innerText = "Alta Probabilidad";
        // Filtro: "Most Volatile" y "Strong Buy". 
        // Busca acciones donde hay mucho movimiento y los indicadores técnicos son unánimes al alza.
        content.innerHTML = `
            <p style="color: var(--accent); font-weight: bold; margin-bottom:10px;">🚀 Proyección de Crecimiento</p>
            <p style="color: #888; font-size: 0.8rem; margin-bottom:15px;">Activos con volumen de compra institucional y señales técnicas alcistas.</p>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22technical%22%2C%22defaultScreen%22%3A%22top_gainers%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    } 
    
    else if (pageId === 'personal') {
        title.innerText = "Guía Personalizada";
        // Filtro: "Undervalued". 
        // Acciones que por fundamentales (ganancias vs precio) son las mejores para invertir hoy.
        content.innerHTML = `
            <div class="personal-card">
                <h3>💡 Recomendaciones de Valor</h3>
                <p>Empresas con balances sólidos que cotizan por debajo de su valor real proyectado.</p>
            </div>
            <div class="widget-wrapper" style="height: 500px;">
                <iframe src="https://s.tradingview.com/embed-widget/screener/?locale=es#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22undervalued%22%2C%22market%22%3A%22america%22%2C%22showToolbar%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%7D" width="100%" height="100%" frameborder="0"></iframe>
            </div>
        `;
    }
}

window.onload = () => {
    const defaultBtn = document.getElementById('default-btn');
    renderPage('stats', defaultBtn);
};
