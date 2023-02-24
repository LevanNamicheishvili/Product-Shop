const mainSection = document.getElementById('card-container');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');
const list = document.getElementById('myList');
const items = list.getElementsByTagName('li');
const nextButton = document.getElementById('btn2');
const prevBtn = document.getElementById('btn1');
let pageNumber = 1;
let activeIndex = 0;

const closeHandler = () => {
  for (const item of items) {
    item.classList.remove('active');
  }
};

const setActive = (index) => {
  closeHandler();
  items[index].classList.add('active');
};

const loadProducts = () => {
  const url = `https://fakestoreapi.com/products/${pageNumber}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card_img_frame">
          <img src="${data.image}" alt="${data.title}">
        </div>
        <h2>${data.title}</h2>
        <p>Category: ${data.category}</p>
        <p>Price: ${data.price}</p>
      `;
      mainSection.appendChild(card);
    })
    .catch((error) => {
      console.log(`Error fetching product data: ${error}`);
    });

};

const handleListClick = (event) => {
  if (event.target.tagName === 'LI') {
    closeHandler();
    event.target.classList.add('active');
    activeIndex = Array.from(items).indexOf(event.target);
    pageNumber = activeIndex + 1;
    mainSection.innerHTML = '';
    loadProducts();
  }
};

const handleNextClick = () => {
  activeIndex = (activeIndex + 1) % items.length;
  setActive(activeIndex);
  pageNumber++;
  mainSection.innerHTML = '';
  loadProducts();

};

const handlePrevClick = () => {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  setActive(activeIndex);
  pageNumber--;
  mainSection.innerHTML = '';
  loadProducts();

};

const handleHamburgerClick = () => { 
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
};

list.addEventListener('click', handleListClick);
nextButton.addEventListener('click', handleNextClick);
prevBtn.addEventListener('click', handlePrevClick);
hamburger.addEventListener('click', handleHamburgerClick);

setActive(activeIndex);
loadProducts();
