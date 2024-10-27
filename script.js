// Seleciona o ícone do menu e os itens do menu
const menuIcon = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

// Adiciona um evento de clique ao ícone do menu para alternar a visibilidade dos itens do menu
menuIcon.addEventListener('click', () => {
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'flex'; // Mostra os itens do menu
    } else {
        menuItems.style.display = 'none'; // Esconde os itens do menu
    }
});

// Função simples para exibir um alerta ao clicar no quadro de contato
function enviarMensagem() {
    alert('Mensagem enviada com sucesso!');
}

// Caso queira aplicar esta função ao quadro de contato
const quadroContato = document.getElementById('contato');
quadroContato.addEventListener('click', enviarMensagem);