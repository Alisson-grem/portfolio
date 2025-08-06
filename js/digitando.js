   const texto = "Alisson Gomes Pedrosa";
   let i = 0;

   function digitar() {
     if (i < texto.length) {
       document.getElementById('texto-digitado').textContent += texto.charAt(i);
       i++;
       setTimeout(digitar, 100); // Ajuste a velocidade da digitação aqui
     }
   }

   // Chamada da função para iniciar a digitação
   digitar();