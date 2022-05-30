var url = "https://nodejsapipets.herokuapp.com/news";
const newsList = document.querySelector(".newsList");

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		data.forEach((article) => {
			console.log(article.title);
		});
	});

/*

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    let data = JSON.parse(xhr.responseText);
    console.log(data.articles);
    data.articles.forEach((article) => {
      console.log(article.link);
      let li = document.createElement("li");
      li.innerHTML = `
      <a href="${article.link}" target="_blank">
        <img class="newspic" src="${article.media}" alt="">
      </a>
      <div>
        <a href="${article.link}" target="_blank">
          <h1>${article.title}</h1>
        </a>
        <div>
          <p class="articleDate">${article.published_date}</p>
          <p class="articleSummary">${article.summary}</p>
        </div>
      </div>
      `;
      newsList.appendChild(li);
    });
  }
};

xhr.send();

*/
