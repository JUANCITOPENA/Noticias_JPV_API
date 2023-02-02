// JavaScript para conectarse a la API de noticias y obtener las noticias
fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=https://newsapi.org/v2/top-headlines?country=us&apiKey="bbdc901c176b4de5bdc05c6de697c010")
  .then(response => response.json())
  .then(data => {
    // Recorrer cada noticia y crear una tarjeta de noticia
    data.articles.forEach(news => {
      // Crear una tarjeta de noticia
      const newsCard = document.createElement("div");
      newsCard.classList.add("news-card");
      
      // Crear una imagen para la noticia
      const newsImage = document.createElement("img");
      newsImage.src = news.urlToImage;
      newsImage.classList.add("news-image");
      newsCard.appendChild(newsImage);
      
      // Crear un título para la noticia
      const newsTitle = document.createElement("h2");
      newsTitle.innerText = news.title;
      newsTitle.classList.add("news-title");
      newsCard.appendChild(newsTitle);
      
      // Crear una descripción para la noticia
      const newsDescription = document.createElement("p");
      newsDescription.innerText = news.description;
      newsDescription.classList.add("news-description");
      newsCard.appendChild(newsDescription);
      
      // Añadir un enlace a la noticia
      const newsLink = document.createElement("a");
      newsLink.href = news.url;
      newsLink.target = "_blank";
      newsLink.innerText = "Leer más";
      newsCard.appendChild(newsLink);
      // Añadir la tarjeta de noticia al contenedor principal
      const newsContainer = document.getElementById("news-container");
      newsContainer.appendChild(newsCard);
    });
  })
 
