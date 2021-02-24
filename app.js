
//url for the covid vaccination sites

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
