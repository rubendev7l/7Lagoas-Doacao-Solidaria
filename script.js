document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the menu toggle button
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
    });

    const usuarios = [];

    // Event listener for the registration form submission
    document.getElementById('formulario-cadastro').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const nome = document.getElementById('nome-cadastro').value;
        const email = document.getElementById('email-cadastro').value;
        const senha = document.getElementById('senha-cadastro').value;
        
        usuarios.push({ nome, email, senha });
        
        alert('Cadastro realizado com sucesso!');
        document.getElementById('formulario-cadastro').reset();
    });

    // Event listener for the login form submission
    document.getElementById('formulario-login').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const email = document.getElementById('email-login').value;
        const senha = document.getElementById('senha-login').value;
        
        const usuario = usuarios.find(user => user.email === email && user.senha === senha);
        
        if (usuario) {
            alert(`Bem-vindo, ${usuario.nome}!`);
        } else {
            alert('Email ou senha incorretos.');
        }
        
        document.getElementById('formulario-login').reset();
    });

    // Event listener for the form submission of posting updates
    const formularioPostagem = document.getElementById('formulario-postagem');
    if (formularioPostagem) {
        formularioPostagem.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Prevents the default form submission behavior
            
            const titulo = document.getElementById('titulo').value;
            const conteudo = document.getElementById('conteudo').value;
            const imagem = document.getElementById('imagem-postagem').files[0];
            
            // Creating the structure of the new post
            const novaPostagem = document.createElement('div');
            novaPostagem.className = 'postagem';
            novaPostagem.innerHTML = `<h3>${titulo}</h3><p>${conteudo}</p>`;
            
            if (imagem) {
                // If an image is selected, load and add it to the post
                const leitor = new FileReader();
                leitor.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    novaPostagem.appendChild(img);
                };
                leitor.readAsDataURL(imagem);
            }
            
            // Adding the new post to the updates section
            const listaAtualizacoes = document.getElementById('lista-atualizacoes');
            if (listaAtualizacoes) {
                listaAtualizacoes.appendChild(novaPostagem);
            }
            
            // Clearing the form after submission
            formularioPostagem.reset();
        });
    }
});
