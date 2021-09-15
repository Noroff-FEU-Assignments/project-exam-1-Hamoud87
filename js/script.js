const url = "https://balawi.one/wp-json/wp/v2/posts";
const carousel = document.querySelector(".carousel");

async function getPost() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}
getPost();

function createHTML(posts) {
  posts.forEach(function (post) {
    carousel.innerHTML += ` <div class="slider-images">
                            <a href="detail.html?id=${post.id}">              
                            <img class="animal-img" src="${post.featured_media_src_url}" alt="${post.yoast_head_json.og_image[0].alt}">
                            </a>
                            </div>`;
  });
}

const navButtons = document.querySelectorAll(".carousel-button");
const imagesNumber = document.querySelectorAll(".slider-images").length;

let index = 1;
let translateX = 0;

// Carousel

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "prev") {
      if (index !== 1) {
        index--;
        translateX += 100;
      }
    } else {
      if (index !== 3) {
        index++;
        translateX -= 100;
      }
    }
    carousel.style.transform = `translateX(${translateX}%)`;
  });
});

// Latest Posts
const urlLatest = "https://balawi.one/wp-json/wp/v2/posts?categories=28";
const latestContainer = document.querySelector(".latest-posts-container");
async function getLatestPost() {
  try {
    const latestResponse = await fetch(urlLatest);
    const getLatestResults = await latestResponse.json();
    createLatestHTML(getLatestResults);
    console.log(getLatestResults);
  } catch (error) {
    console.log(error);
  }
}

getLatestPost();

function createLatestHTML(latest) {
  latestContainer.innerHTML = "";
  latest.forEach(function (latestPost) {
    latestContainer.innerHTML += ` <div class="latest-post pyramid">           
                                     <img src="${latestPost.featured_media_src_url}" alt="${latestPost.yoast_head_json.og_image[0].alt}">
                                     <h2>${latestPost.title.rendered}</h2>
                                     <p>${latestPost.yoast_head_json.description}</p>
                                     <a href="detail.html?id=${latestPost.id}">Learn More
                                     </a>
                                   </div>`;
  });
}
// Single Post
const urlSingle = "https://balawi.one/wp-json/wp/v2/posts?categories=29";
const singleContainer = document.querySelector(".single-post-container");
async function singlePost() {
  try {
    const singleResponse = await fetch(urlSingle);
    const singleResults = await singleResponse.json();
    singlePostHTML(singleResults);
    console.log(singleResults);
  } catch (error) {
    console.log(error);
  }
}

singlePost();

function singlePostHTML(single) {
  singleContainer.innerHTML = "";
  single.forEach(function (singlePost) {
    singleContainer.innerHTML += ` <div class="single-post">           
                                     <img class="animal-img" src="${singlePost.featured_media_src_url}" alt="${singlePost.yoast_head_json.og_image[0].alt}">
                                     <div class="single-post-text">
                                     <h2>${singlePost.title.rendered}</h2>
                                     <p>${singlePost.excerpt.rendered}</p>
                                     <a href="detail.html?id=${singlePost.id}">Learn More</a>
                                     </div>
                                   </div>`;
  });
}

// Posts by country
const urlCountries = "https://balawi.one/wp-json/wp/v2/posts";
const countriesContainer = document.querySelector(".countries-container");
async function getCountriesPost() {
  try {
    const countriesResponse = await fetch(urlCountries);
    const getCountriesResults = await countriesResponse.json();
    createCountriestHTML(getCountriesResults);
    console.log(getCountriesResults);
  } catch (error) {
    console.log(error);
  }
}

getCountriesPost();
function createCountriestHTML(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach(function (countriesPost) {
    countriesContainer.innerHTML += ` <div class="countries-post">
                                     <a href="detail.html?id=${countriesPost.id}">              
                                     <img class="countries-animal-img" src="${countriesPost.featured_media_src_url}" alt="${countriesPost.yoast_head_json.og_image[0].alt}">
                                     </a>
                                   </div>`;
  });
}

/* const urlLatest = "https://balawi.one/wp-json/wp/v2/posts?categories=28";
const latestContainer = document.querySelector(".latest-posts-container");

async function getLatestPost() {
  try {
    const latestResponse = await fetch(urlLatest);
    const getLatestResults = await latestResponse.json();
    console.log(getLatestResults);
    latestContainer.innerHTML = "";
    for (let i = 0; i < getLatestResults.length; i++) {
      latestContainer.innerHTML += ` <div class="latest-post">
<img  src="${getLatestResults[i].featured_media_src_url}" alt="">
                                    
    <p>${getLatestResults[i].yoast_head_json.og_description}</p>
    
  
  </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getLatestPost(); */
