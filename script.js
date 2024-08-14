// Adiciona um evento de carregamento ao documento para garantir que os elementos HTML estejam prontos
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento de clique ao botão de alternância do menu
    document.getElementById('menu-toggle').addEventListener('click', function () {
        // Alterna a classe 'active' no elemento de menu
        document.getElementById('menu').classList.toggle('active');
    });

    // Função para alternar o menu lateral
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona o container e o botão de menu
        var container = document.querySelector("#container");
        var botaoMenu = document.querySelector("#botaoMenu");

        // Adiciona um evento de clique ao botão de menu
        botaoMenu.addEventListener("click", function () {
            // Verifica se a classe 'menu-open' está presente no container
            if (container.classList.contains("menu-open")) {
                // Remove a classe 'menu-open'
                container.classList.remove("menu-open");
            } else {
                // Adiciona a classe 'menu-open'
                container.classList.add("menu-open");
            }
        });
    });

    // Função para lidar com o envio do formulário de nova campanha
    document.getElementById('newCampaignForm').addEventListener('submit', function (e) {
        // Evita o recarregamento da página ao submeter o formulário
        e.preventDefault();

        // Obtém os valores dos campos de título, descrição e imagem do formulário
        const title = document.getElementById('campaignTitle').value;
        const description = document.getElementById('campaignDescription').value;
        const imageInput = document.getElementById('campaignImage');
        const image = imageInput.files[0];

        // Cria uma URL para a imagem
        const imageURL = URL.createObjectURL(image);

        // Cria um novo elemento div para a campanha
        const campaignDiv = document.createElement('div');
        campaignDiv.classList.add('campaign');

        // Adiciona o HTML ao novo elemento div
        campaignDiv.innerHTML = `
        <img src="${imageURL}" alt="${title}">
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="likeButton">Curtir</button> <span class="likeCount">0 curtidas</span>
        <button class="commentButton">Comentar</button> <span class="commentCount">0 comentários</span>
        <button class="shareButton">Compartilhar</button>
    `;

        // Adiciona o novo elemento div à lista de campanhas
        document.getElementById('campaigns').appendChild(campaignDiv);

        // Reseta o formulário
        document.getElementById('newCampaignForm').reset();

        // Configura as interações da campanha
        setupCampaignInteractions(campaignDiv);
    });

    // Função para configurar as interações das campanhas (curtir, comentar, compartilhar)
    function setupCampaignInteractions(campaignElement) {
        // Seleciona os botões de interação
        const likeButton = campaignElement.querySelector('.likeButton');
        const commentButton = campaignElement.querySelector('.commentButton');
        const shareButton = campaignElement.querySelector('.shareButton');

        // Seleciona os elementos de contagem
        const likeCount = campaignElement.querySelector('.likeCount');
        const commentCount = campaignElement.querySelector('.commentCount');

        // Inicializa os contadores
        let likes = 0;
        let comments = 0;

        // Adiciona um evento de clique ao botão de curtir
        likeButton.addEventListener('click', () => {
            likes++;
            likeCount.textContent = `${likes} curtidas`;
        });

        // Adiciona um evento de clique ao botão de comentar
        commentButton.addEventListener('click', () => {
            // Lógica para abrir um modal de comentários (não implementada no exemplo)
            alert('Funcionalidade de comentários ainda não implementada.');
        });

        // Adiciona um evento de clique ao botão de compartilhar
        shareButton.addEventListener('click', () => {
            alert('Compartilhamento ainda não implementado.');
        });
    }

    // Teste unitário para o código selecionado
    // Arquivo: menuToggle_test.js

    // Caso de teste: O botão de alternância do menu deve exibir o menu
    test('O botão de alternância do menu deve exibir o menu', () => {
        // Prepara
        const menuToggle = document.querySelector('.menu-sanduiche');
        const navMenu = document.querySelector('nav ul');
        navMenu.style.display = 'none'; // Esconde o menu inicialmente

        // Atua
        menuToggle.click();

        // Verifica
        expect(navMenu.style.display).toBe('flex'); // O menu deve estar visível
    });

    // Adiciona um evento de redimensionamento à janela para abrir/fechar o menu responsivo
    window.addEventListener('resize', function () {
        const menu = document.getElementById('menu');
        if (window.innerWidth <= 768) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });
});