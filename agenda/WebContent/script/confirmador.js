/**
 * Confirmação de exclusão de um contato
 * @Autor Lucas Santos Pereira
 */
 
 function confirmar(idcon){
	 let resposta = confirm("Confirma a exclusão deste contato ?")
	 if (resposta === true){
		// alert(idcon)
		 window.location.href = "delete?idcon=" +idcon
	 }
 }
 