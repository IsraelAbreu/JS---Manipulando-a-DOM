//getElementById (Método) = Maneira mais comum de acessar um elemento pelo ID
//InnerHTML(Atributo) obtém e pode subistituir o conteúdo de um elemento HTML
let tituloTrocado = document.getElementById("tituloPrincipal");

document.getElementById("btn-titulo").onclick = function (){
  
  tituloTrocado.innerHTML = "Titulo Trocado!!! 😎";
}

//encontrando elemento pelo o nome da Classe
let textoIntro = document.getElementsByClassName("intro");

//encontrando elemento pelo o CSS seletor
let novoTextoIntro = document.querySelectorAll("p.intro");

//Validação do form com JS
 function validarForm(){
  let campoEmail = document.getElementById("form-email").value;
    if (campoEmail == ""){
      alert("CVocê esqueceu de inserir o e-mail");
      return false;
    }
  let campoPassword = document.getElementById("form-password").value;
    if(campoPassword == ""){
      alert("Você esqueceu de inserir a senha");
      return false;
    }
 }

//Mudando estilo do HTML, só funciona pegando o elemento pelo ID.
document.getElementById("intro").style.color = "blue";

//Animation
function myMove() {
  let id = null;
  const elem = document.getElementById("animation");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}