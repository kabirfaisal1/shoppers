//const { Json } = require("sequelize/types/utils");

var Target_Token="4324A15C75444BB7AA69766FA38667EF" ;
var searchInputEl = document.querySelector("#search-field");
var submitButtonEl = document.querySelector('#btnSubmit');
var search_resultsEl=document.querySelector('#fullResults');
var searchErrorEL = document.querySelector('#search-Error');




submitButtonEl.addEventListener('click',(event)=>{
  event.preventDefault();
  console.log(searchInputEl.value.trim());
if(searchInputEl.value.trim() !=""){

  searchErrorEL.style.setProperty("visibility", "hidden");
  
  target_API_Endpoint(searchInputEl.value.trim());
    //stud();
  }
  else{
    searchErrorEL.style.setProperty("visibility", "visible");
    
  }



  saveSearch();
  
});
var target_search_Results= [];
var walmart_API_Endpoint= [];
function target_API_Endpoint(search){

  var queryItem = `https://api.redcircleapi.com/request?api_key=${Target_Token}&search_term=${search}&type=search&rating=five_star&page=1&include_out_of_stock=false`;
  //  var queryItem = `https://api.redcircleapi.com/request?${params}`;
  fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
  .then((response) => response.json()).then((data) => {
        var i =0
       do{
        var target_search_Result={
          product_img: JSON.stringify(data.search_results[i].product['main_image']),
         title: JSON.stringify(data.search_results[i].product['title']),
         product_Link: JSON.stringify(data.search_results[i].product['link']),
         primary_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
         sale_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
         product_rating: JSON.stringify(data.search_results[i].product['rating'])
       };
        target_search_Results.push(target_search_Result);
         i++;
       }
       while(i<data.search_results.length)
      console.log(target_search_Results)
       cratecard();

    })
  .catch((error) => {
      console.error('Error:', error);
      return error;
    });
  
}

function  cratecard(){

  for (var i = 0; i < target_search_Results.length; i++) {
    var addDivEl = document.createElement('div');
    addDivEl.classList.add('card');
    var imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top');
    imgEl.setAttribute("src", target_search_Results[i].product_img.replaceAll('"', ''));
   //adding card body
   //header
   var addcardboyEl = document.createElement('card-body');
   var addcardheaderEL= document.createElement('h5');
   addcardheaderEL.setAttribute("class","card-header")
   addcardheaderEL.textContent = target_search_Results[i].title.replaceAll('"', '');
     //price
     var addcardpriceEL= document.createElement('p');
     addcardpriceEL.textContent = `Sale price: ${target_search_Results[i].sale_price.replaceAll('"', '')} \nprimary price ${target_search_Results[i].primary_price.replaceAll('"', '')}`
     //link
     var addcardLink = document.createElement('a');
     addcardLink.setAttribute("href", target_search_Results[i].product_Link.replaceAll('"', ''));
     addcardLink.setAttribute("target", "_blank");
     addcardLink.textContent= "View on Site"
     //rating

      var ratingAreaEL = document.createElement('p');
      var ratingIconEL = document.createElement('img');
      ratingIconEL.setAttribute("id", "ratingIcon");
      ratingAreaEL.setAttribute("id", "rating");
      ratingIconEL.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/ratings-1/87/Circle_-_4.5_Star-512.png");
      console.log(target_search_Results[i].product_ratin)
      ratingAreaEL.textContent = target_search_Results[i].product_rating;

      addDivEl.appendChild(imgEl);
      addDivEl.appendChild(addcardboyEl);
      addcardboyEl.appendChild(addcardheaderEL);
      addcardboyEl.appendChild(addcardpriceEL);
       ratingAreaEL.appendChild(ratingIconEL);
      addcardboyEl.appendChild(ratingAreaEL);
      addcardboyEl.append(addcardLink);
      search_resultsEl.appendChild(addDivEl);
      console.log(search_resultsEl);
  }
}

function stud(){
  var TestDummytartarget_API_Endpoint={
              product_img: [
                "https://target.scene7.com/is/image/Target/GUEST_15916c73-9548-498f-a378-f67cb42ccd06", 
                "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk", 
                "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk","https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk",
                 "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk", "https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-9.jpg?itok=AZn0PDgk",
              ],
              title:[
                "1.Kabir", "2.Faisal", "3.WOrld", "4.Hello", "5.Sunny", "6.Cold", "7.Window"
              ], 
              product_Link: [
                "https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/","https://www.google.com/"
              ],
              primary_price: ["11.00","12.00","13.00","14.00","15.00","16.00"],
              sale_price: ["1.00","2.00","3.00","4.00","5.00","6.00"]
             }
  for (var i = 0; i < TestDummytartarget_API_Endpoint.product_img.length; i++) {
    //adding main card
    var addDivEl = document.createElement('div');
    addDivEl.classList.add('card');
    //adding img
    var imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top');
    console.log(TestDummytartarget_API_Endpoint.product_img[i]);
    imgEl.src= TestDummytartarget_API_Endpoint.product_img[i];
  
    //adding card body
    //Header
    var addcardboyEl = document.createElement('card-body');
    var addcardheaderEL= document.createElement('h5');
    addcardheaderEL.textContent = TestDummytartarget_API_Endpoint.title[i];
   //price
   var addcardpriceEL= document.createElement('p');
   addcardpriceEL.textContent = `Sale price: ${TestDummytartarget_API_Endpoint.sale_price[i]} \nprimary price ${TestDummytartarget_API_Endpoint.primary_price[i]}`
   //link
   var addcardLink = document.createElement('a');
   addcardLink.setAttribute("href", TestDummytartarget_API_Endpoint.product_Link[i]);
   addcardLink.setAttribute("target", "_blank");
   addcardLink.textContent= "View on Site"

  
    addDivEl.appendChild(imgEl);
    addDivEl.appendChild(addcardboyEl);
    addcardboyEl.appendChild(addcardheaderEL);
    addcardboyEl.appendChild(addcardpriceEL);
    addcardboyEl.append(addcardLink);
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

//fetch request to save search on form submit
async function saveSearch() {

    const product_name = searchInputEl.value.trim();
    const response = await fetch('/api/searches/', {
      method: 'Post',
      body: JSON.stringify({
        product_name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
};