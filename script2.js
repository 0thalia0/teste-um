function verificarForca() {
  
    const senha = document.getElementById("senha").value;
    const forcaTexto = document.getElementById("forca");

    let forca = 0;

    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[a-z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^A-Za-z0-9]/.test(senha)) forca++;

    if (forca <= 2) {
      forcaTexto.textContent = "Senha fraca";
      forcaTexto.style.color = "red";
    } 

    else if (forca <= 4) {
      forcaTexto.textContent = "Senha média";
      forcaTexto.style.color = "orange";
    } 

    else {
      forcaTexto.textContent = "Senha forte";
      forcaTexto.style.color = "green";
    }

  }