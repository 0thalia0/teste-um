document.addEventListener("DOMContentLoaded", function() {

    const btnCadastrar = document.getElementById("btnCadastrar");

    if (btnCadastrar) {

        btnCadastrar.addEventListener("click", function() {
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const idade = document.getElementById("idade").value;

            if (nome && email && idade) {
                alert("Cadasto realizado com sucesso! Bem vindo(a), " + nome + "!");
                
                window.location.href = "tela_principal.html";
            } else {
                alert("Por favor prencha todos os campos.");
            }

        });
    }

  
});