var Target_Token = '4324A15C75444BB7AA69766FA38667EF'
var searchInputEL = document.querySelector("search-fild");
var submitButtonEl = document.querySelector('#btnSubmit');
var search_resultsEl=document.querySelector('#fullResults')

submitButtonEl.addEventListener('click',()=>{

   //target_API_Endpoint();

 stud();


  
});
var tartarget_API_Endpoint= [];
var walmart_API_Endpoint= [];
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
            // product_img: JSON.stringify(data.search_results[i].product['main_image']),
            product_img: "https://hackaday.com/wp-content/uploads/2011/08/temporary-image.gif",
            title: JSON.stringify(data.search_results[i].product['title']),
            product_Link: JSON.stringify(data.search_results[i].product['link']),
            primary_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
            sale_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
        }
        tartarget_API_Endpoint.push(target_search_Results);
         i++;
       }
       while(i<data.search_results.length)
       console.log(tartarget_API_Endpoint)
       cratecard();

    })
  .catch((error) => {
      console.error('Error:', error);
      return error;
    });
  
}

function  cratecard(){

  for (var i = 0; i < tartarget_API_Endpoint.length; i++) {
    var addDivEl = document.createElement('div');
    addDivEl.classList.add('card');
    var imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top');
    imgEl.src=`${tartarget_API_Endpoint[i].product_img}`;;
  
    addDivEl.appendChild(imgEl)
    search_resultsEl.appendChild(addDivEl);
  }
}

function stud(){
  var TestDummytartarget_API_Endpoint={
              product_img: [
                "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk", 
                "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk", 
                "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk","https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk",
                 "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk", "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk",
              ],
              title:["1.Kabir", "2.Faisal", "3.WOrld", "4.Hello"], 
              product_Link: [
                "www.google.com","www.google.com","www.google.com","www.google.com"
              ],
              primary_price: ["11.00","12.00","13.00","14.00"],
              sale_price: ["1.00","2.00","3.00","4.00"]
             }
  for (var i = 0; i < TestDummytartarget_API_Endpoint.length; i++) {
    var addDivEl = document.createElement('div');
    addDivEl.classList.add('card');
    var imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top');
    imgEl.src=`${TestDummytartarget_API_Endpoint[i]}`;;
  
    addDivEl.appendChild(imgEl)
    search_resultsEl.appendChild(addDivEl);
    console.log(search_resultsEl);


  }
}

// function walmart_API_Endpoint(){

// var queryItem = `https://api.redcircleapi.com/request?api_key=${Target_Token}&search_term=xbox&type=search&output=json`;
// //  var queryItem = `https://api.redcircleapi.com/request?${params}`;
// fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
// .then((response) => response.json()).then((data) => {
//       var i =0
//      do{
//       var target_search_Results={
//           product_img: JSON.stringify(data.search_results[i].product['main_image']),
//           title: JSON.stringify(data.search_results[i].product['title']),
//           product_Link: JSON.stringify(data.search_results[i].product['link']),
//           primary_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
//           sale_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
//       }
//       tartarget_API_Endpoint.push(target_search_Results);
//        i++;
//      }
//      while(i<data.search_results.length)
//      console.log(tartarget_API_Endpoint)

//   })
// .catch((error) => {
//     console.error('Error:', error);
//     return error;
//   });
// }