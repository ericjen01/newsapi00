var url = "https://nodejsapipets.herokuapp.com/news";
const newsList = document.querySelector(".newsList");

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		data.shift(); // delete the first article in the data array as it never follows the proper format
		console.log(data);
		data.forEach((article) => {
			let title = article.title;
			let date = article.time;
			let source = article.source;
			let img = article.image;
			let url = article.url;
			if (url.startsWith("/life")) {
				url = "https://www.cbc.ca" + url;
			}

			let li = document.createElement("li");
			li.classList.add("plainList");
			li.innerHTML = `
        <a class="card plainText" href='${url}' target="_blank">
          <img class="newsImg" src="${img}" alt="">
          <div class="card_content">
		  	<h1 class="date">${date} </h1>
            <h1 class="title">${title}</h1>
          </div>
        </a>
      `;
			newsList.appendChild(li);
		});
	});
