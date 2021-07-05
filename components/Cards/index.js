// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCard = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    const articleData = response.data.articles;
    return articleData;
})
.then(response2 => {
    response2.javascript.forEach(elem => {
        articleCard.appendChild(createCard(elem));
    })
    response2.bootstrap.forEach(elem => {
        articleCard.appendChild(createCard(elem));
    })
    response2.jquery.forEach(elem => {
        articleCard.appendChild(createCard(elem));
    })
    response2.node.forEach(elem => {
        articleCard.appendChild(createCard(elem));
    })
})



createCard = (obj => {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContent = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContent.classList.add("img-container");

    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    name.textContent = obj.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContent);
    imgContent.appendChild(img);
    imgContent.appendChild(name);

    return card;
})