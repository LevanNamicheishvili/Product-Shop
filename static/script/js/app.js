const mainSection = document.getElementById('card-container');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => { 
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

try {
  for (let i = 1; i <= 10; i++) {
    const url = `https://fakestoreapi.com/products/${i}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="card_img_frame" > 
        <img src="${data.image}" alt="${data.title}" >
        </div>
          <h2>${data.title}</h2>
          <p>Category: ${data.category}</p>
          <p>Price: ${data.price}</p>
        `;
        mainSection.appendChild(card);
      });
  }
} catch (error) {
  console.log('An error occurred while fetching data: ', error);
}

