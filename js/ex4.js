document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
   // Header
    // create the table outside of the forEach, to create it 1 time
    const table = document.createElement("table");

    // create the row of the header 1 outside of the forEach to create it 1 time, etc.
    const header = document.createElement("tr");
    // th is for the header of the table
    const headerKey = document.createElement("th");
    const headerVal = document.createElement("th");
  
    // put the name of the header
    headerKey.innerText = "Key";
    headerVal.innerText = "Value";

    header.appendChild(headerKey);
    header.appendChild(headerVal);
    table.appendChild(header);

  formData.forEach((val, key) => { 
    const row = document.createElement("tr");
    const key2 = document.createElement("td");
    const val2 = document.createElement("td");

    // this is the data you want to put in other row
    key2.innerText = key;
    val2.innerText = val;

    // put key and value inside a row, and put the row inside the table
    row.appendChild(key2);
    row.appendChild(val2);
    table.appendChild(row);

    document.getElementById("result").appendChild(table);

    console.log(`key: ${key}, val: ${val}`);
  });
  for ([key, val] of formData.entries()) {
    console.log(`key: ${key} value: ${val}`);
  }
});