
  // const searchName = document.querySelector('#search')
  document.addEventListener('DOMContentLoaded', () => {
    getPersonYouWant()
  })  

  function getPersonYouWant() {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      const searchName = e.target.search.value
      getAllUsers(searchName)
    })
  }

function renderPerson(person) {
  const card = document.createElement('li')
  const name = person.login
  const personName = name[0].toUpperCase() + name.slice(1)

  card.className = 'card'
  card.style.textAlign = 'center'
  card.innerHTML = `
  <div>
    <h2>${personName}</h2>
    <img class="person's image" src=${person.avatar_url}/>
    <p>
      ${personName}'s profile link <a href='${person.html_url}'>${person.html_url}</a>
    </p>
  </div>`
  document.querySelector('#user-list').appendChild(card)
}

function getAllUsers(name) {
  fetch(`https://api.github.com/search/users?q=${name}`)
  .then(res => res.json())
  .then(data => data.items.forEach(person => renderPerson(person)))
}