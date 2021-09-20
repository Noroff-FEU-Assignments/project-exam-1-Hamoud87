const blogUrl = "https://balawi.one/wp-json/wp/v2/posts?per_page=8";
const blogContainer = document.querySelector(".blog-container");
const button = document.querySelector("#button");
async function getBlogPosts() {
  try {
    const blogResponse = await fetch(blogUrl);
    const getBlogResults = await blogResponse.json();
    console.log(getBlogResults);
    blogContainer.innerHTML = "";
    for (let i = 0; i < getBlogResults.length; i++) {
      if (i === 3) {
        break;
      } else {
        button.onclick = function () {
          i === 7;
        };
      }

      blogContainer.innerHTML += ` <div class="blog-posts-wrapper" >
                                    <a href="detail.html?id=${getBlogResults[i].id}">
                                      <img src="${getBlogResults[i].featured_media_src_url}" alt="">
                                      <h2>${getBlogResults[i].title.rendered}</h2>
                                     </a>
                                     <p>Published ${getBlogResults[i].date}</P>
                                   </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
getBlogPosts();

/*if (i === 3) {
  break;
} else {
  button.onclick = function () {
  i++;
  };
}*/
