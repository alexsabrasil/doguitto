document.addEventListener("DOMContentLoaded", function () {
    const cadastrarBtn = document.getElementById("cadastrarBtn");
    const limparCamposBtn = document.getElementById("limparCamposBtn");
    const mensagem = document.getElementById("mensagem");

    
    cadastrarBtn.addEventListener("click", function () {
        
        mensagem.style.display = "block";
    });

    
    limparCamposBtn.addEventListener("click", function () {
        
        document.getElementById("trabalheConoscoForm").reset();
        
        mensagem.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("trabalheConoscoForm"); 
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        // Evite o envio do formulário para que possamos controlá-lo com JavaScript.
        event.preventDefault();

        // Simule o envio bem-sucedido do formulário (você pode substituir isso pela lógica real de envio).
        const sucesso = true; // Defina como verdadeiro para simular um envio bem-sucedido.

        if (sucesso) {
            // Exiba a mensagem de sucesso.
            mensagem.style.display = "block";

            // Role a página para a mensagem de sucesso (na parte superior da página).
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
});