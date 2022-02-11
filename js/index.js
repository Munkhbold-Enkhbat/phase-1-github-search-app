
  // const searchName = document.querySelector('#search')

  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const searchName = e.target.search.value
    fetch(`https://api.github.com/users/${searchName}`)
    .then(res => res.json())
    .then(data => console.log(data))
  })

