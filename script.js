function changeContent(page) {
    const content = document.getElementById('content');

    // Limpa o conteúdo atual
    content.innerHTML = '';

    // Altera o conteúdo com base no link clicado
    switch (page) {
        case 'home':
            content.innerHTML = `
                <h1>Bem-vindo!</h1>
                <p>Este é o conteúdo da página inicial.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>Sobre Nós</h1>
                <p>Este é o conteúdo da página Sobre.</p>
            `;
            break;
        case 'services':
            content.innerHTML = `
                <h1>Nossos Serviços</h1>
                <p>Este é o conteúdo da página de Serviços.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contato</h1>
                <p>Este é o conteúdo da página de Contato.</p>
            `;
            break;
        default:
            content.innerHTML = `
                <h1>Bem-vindo!</h1>
                <p>Este é o conteúdo da página inicial.</p>
            `;
    }
}