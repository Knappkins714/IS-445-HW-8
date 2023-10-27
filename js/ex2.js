const divOutput = document.getElementById("result");

document.getElementById("lookup").addEventListener("click", e => {
  divOutput.innerHTML = "";
  const inputName = document.getElementById("name").value;
  console.log(inputName);
  
  fetch(
    `https://api.github.com/users/${inputName}`
  )
    .then(response => response.json())
    .then(user => {
      console.log(user);
      const imageElement = document.createElement("img");
      imageElement.src = user.avatar_url;
      imageElement.width = 200;

      const table = document.createElement("table");
      const tableRow = document.createElement("tr");
      const nameTitle = document.createElement("td");
      const name = document.createElement("td");

      nameTitle.innerText = "Name";
      name.innerText = user.name;
      tableRow.appendChild(nameTitle);
      tableRow.appendChild(name);
      table.appendChild(tableRow);

      const tableRowBlog = document.createElement("tr");
      const blogTitle = document.createElement("td");
      const blog = document.createElement("td");

      blogTitle.innerText = "Blog";
      blog.innerText = user.blog;
      tableRowBlog.appendChild(blogTitle);
      tableRowBlog.appendChild(blog);
      table.appendChild(tableRowBlog);

      const tableRowCreate = document.createElement("tr");
      const createTitle = document.createElement("td");
      const create = document.createElement("td");

      createTitle.innerText = "Created at";
      create.innerText = user.created_at;
      tableRowCreate.appendChild(createTitle);
      tableRowCreate.appendChild(create);
      table.appendChild(tableRowCreate);

      divOutput.appendChild(imageElement);
      divOutput.appendChild(table);
    })
})


