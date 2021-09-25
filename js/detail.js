const detailsContainer = document.querySelector(".single-post-container");

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
    const viewImage = document.querySelector(".animal-img");

    const detailsDiv = document.querySelector(".details-container");
    viewImage.onclick = function () {
      event.stopPropagation();
      detailsDiv.classList.add("view");
    };
    closeImage.onclick = function () {
      detailsDiv.classList.remove("view");
    };
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

function createHtml(details) {
  detailsContainer.innerHTML = `
                                  <div class="details-container">
                                     <h1>${details.title.rendered}</h1>
                                     <img class="animal-img" src="${details.featured_media_src_url}" alt="${details.yoast_head_json.og_image[0].alt}"> 
                                     <p> ${details.content.rendered}</p>
                                     <p>Published ${details.date.slice(0, 10)}</P>
                                     <a href=contact.html? class="button take-action">TAkE ACTION</a>
                                  </div>
                                  `;
}

/* postImage.addEventListner("click", testA);

function testA() {
  postImage.classList.add(".view");
  postImage.classList.remove(".details-container");
  console.log("hi");
}*/
/* <p>Author ${details.yoast_head_json.twitter_creator}</P> */
