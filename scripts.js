'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "ZgUYaFjoE3244QlGtqdn9FaxFhGWmOdy"; 
    const galeria = document.getElementById("galeria");
  
    function buscarGifs() {
      const buscador = document.getElementById("buscador");
      const searchTerm = buscador.value;
  
     
      if (searchTerm.trim() !== "") {
        const endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;
  
        
        fetch(endpoint)
          .then(response => response.json())
          .then(data => {
            
            galeria.innerHTML = "";
  
           
            data.data.forEach(gif => {
              const imagen = document.createElement("img");
              imagen.src = gif.images.fixed_height.url;
              imagen.alt = gif.title;
              imagen.classList.add("gif");
  
              
              galeria.appendChild(imagen);
            });
          })
          .catch(error => console.error("Error al obtener los gifs", error));
      }
    }
  
   
    document.getElementById("buscador").addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        buscarGifs();
      }
    });
  });
  

  
