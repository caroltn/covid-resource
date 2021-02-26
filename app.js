
//url for the covid vaccination sites


/*
document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()
  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  axios.get(`https://open.mapquestapi.com/geocoding/v1/address?key=CwelIFvjcU2rKapuqZ6AcvE64IpoLS9R&location=${city},${state}`)
    .then(res => {
      let latitude = res.data.results[0].locations[0].latLng.lat
      let longitude = res.data.results[0].locations[0].latLng.lng
      //console.log(`${latitude},${longitude}`)

      axios.get(`https://discover.search.hereapi.com/v1/discover?apikey=wapv_QGDUdLAYFEJ_ztgSot46ybSnWVvJkd78ECummU&q=Covid&at=${latitude},${longitude}&limit=10`)
        .then(res => {

          for (let i = 0; i < 10; i++) {
            let info = res.data.items[i].address.label
            console.log(info)
          }
        })
        .catch(err => console.error(err))
    })



    .catch(err => console.error(err))
})

*/

//Covid Info 
const options = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica',
  headers: {
    'x-rapidapi-key': '942aad0c2dmsh3a82931abe2aef2p10ac04jsn5dc198047fbe',
    'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  let ActiveCases = response.data[0].ActiveCases
  let TotalCases = response.data[0].TotalCases
  let TotalDeaths = response.data[0].TotalDeaths
  let TotalRecovered = response.data[0].TotalRecovered
  //console.log(ActiveCases);
  //console.log(TotalCases);
  //console.log(TotalDeaths);
  //console.log(TotalRecovered);

  document.getElementById('cases').innerHTML = `
  <p>Total Active Cases in the US: ${ActiveCases}</p>
  <p>Total number of cases in the US: ${TotalCases}</p>
  <p>Total number of deaths in the US: ${TotalDeaths}</p>
  <p>Total number of recoveries in the US: ${TotalRecovered}</p>
  `


}).catch(function (error) {
  console.error(error);
});



