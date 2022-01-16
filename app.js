var input = document.querySelector('.input-btn')
var searchbtn = document.querySelector('.search-btn')
var result = document.querySelector('.result-item')


searchbtn.addEventListener('click', () => {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(res => res.json())
    .then(data => showCountries(data))
})

 const showCountries = (data) => {
   
   console.log(data)
    data.forEach((country) => {
      const div = document.createElement("div")
       div.innerHTML = `<div>
       <img src='${country.flags.png}' alt='profile'>
       <a href='${country.maps.googleMaps}' target="_blank">Click For Google Maps</a>
       <h1>${country.name.common}</h1></div>`
      
       result.appendChild(div)
    })   
}