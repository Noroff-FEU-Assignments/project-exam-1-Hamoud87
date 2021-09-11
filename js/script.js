const url = "http://balawi.one/wp-json/wp/v2/posts";
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
      if (index !== 2) {
        index++;
        translateX -= 100;
      }
    }
    carousel.style.transform = `translateX(${translateX}%)`;
  });
});

// Latest Posts
const urlLatest = "http://balawi.one/wp-json/wp/v2/posts?categories=28";
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
    latestContainer.innerHTML += ` <div class="latest-post">
                                     <a href="detail.html?id=${latestPost.id}">              
                                     <img src="${latestPost.featured_media_src_url}" alt="${latestPost.yoast_head_json.og_image[0].alt}">
                                     
                                     </a>
                                   </div>`;
  });
}

// Posts by country
const urlCountries = "http://balawi.one/wp-json/wp/v2/posts";
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
