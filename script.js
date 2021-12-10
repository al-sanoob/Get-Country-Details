function getData() {
    let country_name = c_name.value
    fetch(`https://restcountries.com/v2/name/${country_name}?fullText=true`).
    then(res => res.json()).
    then(data => displayValue(data))
}
function displayValue(country_data) {
    let country_name = country_data[0].name
    let population = country_data[0].population
    let capital = country_data[0].capital
    let currency = country_data[0].currencies[0].name
    let currency_symbol = country_data[0].currencies[0].symbol
    let flag = country_data[0].flag
    let html_data = `
 <div class="card" style="width: 19rem;">
    <img src="${flag}" class="card-img-top" alt="...">
        <div class="card-body">
     <h5 id="title" class="card-title">${country_name}</h5>
     </div>
     <ul class="list-group list-group-flush">
        <li class="list-group-item"><span>Population:</span> ${ population}</li>
        <li class="list-group-item"><span>Capital:</span> ${capital}</li>
        <li class="list-group-item"><span>Currency:</span> ${currency}</li>
        <li class="list-group-item"><span>Currency Symbol: </span> ${currency_symbol}</li>
     </ul>
 </div>`
    document.querySelector("#result").innerHTML = html_data
}
