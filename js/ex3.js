// Create an array containing two objects
const visited = {
  name: "Tyler",
  countries: [
  {
    name: "Canada",
    year: 1994
  },
  {
    name: "Mexico",
    year: 1997
  },
  {
    name: "United States",
    year: 1999
  },
  {
    name: "Brazil",
    year: 2001
  }
]
};

// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(visited)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
