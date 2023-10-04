document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
       
        alert("Envio com sucesso! Obrigado e volte sempre.");

        form.reset();

    });
});



