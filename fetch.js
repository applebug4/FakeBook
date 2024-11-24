fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  console.log(data);
  const users = data.map(users =>{
    return `
    <div>
    <h2>${users.id} </h2>
    <p>${users.name} </p>`
  })
  document.getElementById('users').innerHTML = users;
})