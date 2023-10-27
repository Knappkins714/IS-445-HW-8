const paintingListElement = document.getElementById("paintings");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
  .then(response => response.json())
  .then(paintings => {
    paintings.forEach(painting => {
      // Create elements to use for the table
      const paintingElement = document.createElement("tr");
      const name = document.createElement("td");
      const year = document.createElement("td");
      const artist = document.createElement("td");

      // Put data inside the td elements
      name.innerText = painting.name;
      year.innerText = painting.year;
      artist.innerText = painting.artist;

      // Put td elements inside the tr elements
      paintingListElement.appendChild(name);
      paintingListElement.appendChild(year);
      paintingListElement.appendChild(artist);

      // Put the tr elements inside the paintings id
      document.getElementById("paintings").appendChild(paintingElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
