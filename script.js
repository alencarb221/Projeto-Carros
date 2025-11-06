

let dark = document.getElementById('dark');

    dark.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        document.body.style.background = 'black';
        document.querySelector('h1').style.color = 'white';
        document.querySelector('.titulo').style.color = 'white';
        document.querySelectorAll('a').forEach(el => {
          el.style.color = 'black';
        });
        document.querySelector('.material-icons').style.color = 'white';
        document.querySelector('footer').style.color = 'white'
        document.querySelector('#btn-menu').style.color = 'white'
      } else {
        document.body.style.background = 'white';
        document.querySelector('h1').style.color = 'black';
        document.querySelector('.titulo').style.color = 'black';
        document.querySelectorAll('a').forEach(el => {
          el.style.color = 'black';
        });
        document.querySelector('.material-icons').style.color = 'black';
        document.querySelector('footer').style.color = 'black'
        document.querySelector('#btn-menu').style.color = 'black'
      }
    });


function visualizar(card) {
 
  let img = card.querySelector("img").src;
  let titulo = card.querySelector("h3").innerText;

  
  let detalhes = "";
  card.querySelectorAll("p").forEach(p => {
    detalhes += p.outerHTML; 
  });

  
  document.getElementById("modalImg").src = img;
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalTexto").innerHTML = detalhes;

  
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}


let btn = document.getElementById('btn-menu')
let menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  if(menu.style.display === "block"){
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
})