//Create and Build and HTML element for body

document.body.innerHTML = `<div class="heading-container">
<h1> Ice and Fire API</h1>
<img class="icon" src="https://theeducationdaily.com/wp-content/uploads/2021/12/17fatbooks-superJumbo.jpg" alt="Books">
</div>
<div id="mainContainer" class="main-container"></div>
`;

// Accessing api link to get data from it using fetch

const getData = async () => {
  try {
    const data = await fetch("https://www.anapioficeandfire.com/api/books")
    const books = await data.json();
    console.log(books[0].name)
    mainContainer.innerHTML = "";
    // console.log(books.name)
    books.forEach(displayData)
       
  } catch (error) {
    console.log(error);
  }
};

getData();


//Create display method to show the data from api in clean way

const displayData = (res) => {

 // adding values to the HTML element 
 
  mainContainer.innerHTML += `
<div class="container">
<p class="para blue"> Name:${res.name}</p>
<p class="para blue"> ISBN:${res.isbn}</p>
<p class="para blue"> No. of Pages:${res.numberOfPages}</p>
<p class="para blue"> Authors:${res.authors}</p>
<p class="para blue"> Publisher:${res.publisher}</p>
<p class="para blue"> Release Date:${res.released}</p>
<p id="char1" class="para blue">Characters :<a href="${res.characters[0]}" target="_blank">Character 1</a>
<a href="${res.characters[1]}" target="_blank">Character 2</a>
<a href="${res.characters[2]}" target="_blank">Character 3</a>
<a href="${res.characters[3]}" target="_blank">Character 4</a>
<a href="${res.characters[4]}" target="_blank">Character 5</a> </p>


</div>`;
};


