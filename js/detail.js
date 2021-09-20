const detailsContainer = document.querySelector(".single-post-container");
const modal = document.querySelector(".modal");
const views = document.querySelectorAll(".animal-img");
const fullImage = document.querySelector(".full-image");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get("id");
console.log(postID);

const url = "https://balawi.one/wp-json/wp/v2/posts/" + postID;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

function createHtml(details) {
  detailsContainer.innerHTML = `
                                  <div class="details-container">
                                  <h1>${details.title.rendered}</h1>
                                 
                                  <img class="animal-img"  data-fullimage="${details.featured_media_src_url}" src="${details.featured_media_src_url}" alt="">  
                                  <p> ${details.content.rendered}</p>
                                  <p>Author ${details.yoast_head_json.twitter_creator}</P>
                                  <p>Published ${details.date}</P>

                                 </div>
                                 <div class="modal">
                                 <img src="" alt="" class="full-image" />
                                 
                                 </div>
                                
                                 `;
}
views.forEach((view) => {
  view.addEventListner("click", () => {
    modal.classList.add("open");
  });
});
