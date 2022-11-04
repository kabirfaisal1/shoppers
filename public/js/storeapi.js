var Target_Token = '4324A15C75444BB7AA69766FA38667EF'
var searchInputEL = document.querySelector("search-fild");
var submitButtonEl = document.querySelector('#btnSubmit');
var search_resultsEl=document.querySelector('#fullResults')

submitButtonEl.addEventListener('click',()=>{
    target_API_Endpoint();
})
var tartarget_API_Endpoint= [];
function target_API_Endpoint(){

    // // set up the request parameters
    // const params = {
    //   'api_key': Target_Token,
    //   'search_term': 'xbox',
    //   'type': 'search',
    //   'rating': 'four_star'
    // }
    // console.log(params);

    var queryItem = `https://api.redcircleapi.com/request?api_key=${Target_Token}&search_term=xbox&type=search&output=json`;
  //  var queryItem = `https://api.redcircleapi.com/request?${params}`;
    fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
    .then((response) => response.json()).then((data) => {
        var i =0
       do{
        var target_search_Results={
            product_img: JSON.stringify(data.search_results[i].product['main_image']),
            title: JSON.stringify(data.search_results[i].product['title']),
            product_Link: JSON.stringify(data.search_results[i].product['link']),
            primary_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
            sale_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
          
            

        }
        tartarget_API_Endpoint.push(target_search_Results)

         

         i++;
       }
       while(i<data.search_results.length)
       console.log(tartarget_API_Endpoint)

    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });
}