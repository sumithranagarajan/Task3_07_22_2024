function BookDetails() {
  const fetch_Book = document.getElementsByClassName("book-details")[0];
  const url = "https://softwium.com/api/books";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      data.forEach((element) => {
        const div_creation = document.createElement("div");
        div_creation.setAttribute("class", "card");
        div_creation.setAttribute("style", "width: 18rem;");
        div_creation.innerHTML += `<div class="card-body bg-secondary">
                  <h5 class="card-title text-white fs-5 font-weight-bold">Book Title: ${element.title}</h5>
                  <h6 class="card-subtitle fs-"6>ISBN number: ${element.isbn}</h6>
                  <p class="card-text">Total Page Count: ${element.pageCount}</p>
                  <p class="card-text fst-italic">Authors: ${element.authors}</p>
                  </div>`;
                  fetch_Book.append(div_creation);
      });
    }).catch((error)=>console.log(error))
}

BookDetails();