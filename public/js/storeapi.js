//const { Json } = require("sequelize/types/utils");

var Target_Token="4324A15C75444BB7AA69766FA38667EF" ;
var searchInputEl = document.querySelector("#search-field");
var submitButtonEl = document.querySelector('#btnSubmit');
var search_resultsEl =document.querySelector('#fullResults');

var searchErrorEl = document.querySelector('#search-Error');


//use #login-message element to determine if user is logged in
var loginMessage = document.querySelector('#login-message').innerHTML.trim();
var target_search_Results= [];
var walmart_API_Endpoint= [];

var isLoggedIn = function(messageText) {
  if (messageText === "Log in to view product prices and ratings.") {
    return false;
  }
    return true;
};
var loggedIn = isLoggedIn(loginMessage);




submitButtonEl.addEventListener('click',(event)=>{
 event.preventDefault();
  console.log(searchInputEl.value.trim());
  target_search_Results= [];
  
  // target_search_Results=[];
if(searchInputEl.value.trim() !=""){

  searchErrorEl.style.setProperty("visibility", "hidden");
  
  target_API_Endpoint(searchInputEl.value.trim());
  // stud(searchInputEl.value.trim());
  }
  else{
    searchErrorEl.style.setProperty("visibility", "visible");
    
  }

});



function target_API_Endpoint(search){
  
  var queryItem = `https://api.redcircleapi.com/request?api_key=${Target_Token}&search_term=${search}&type=search&rating=five_star&page=1&include_out_of_stock=false`;
  //  var queryItem = `https://api.redcircleapi.com/request?${params}`;
  fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
  .then((response) => response.json()).then((data) => {
        var i =0
       do{
        var target_search_Result={
          product_img: (data.search_results[i].product['main_image']),
         title: (data.search_results[i].product['title']),
         product_Link: (data.search_results[i].product['link']),
         primary_price: (data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
         sale_price: (data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
         product_rating: (data.search_results[i].product['rating'])
       };
        target_search_Results.push(target_search_Result);
         i++;
       }
       while(i<data.search_results.length)
      console.log(target_search_Results)
      // cratecard();
      cratecard();

    })
  .catch((error) => {
      console.error('Error:', error);
      return error;
    });
  
}


async function saveSearch() {

    const product_name = searchInputEl.value.trim();
    const response = await fetch('/api/searches/', {
      method: 'Post',
      body: ({
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


function cratecard(){
  var search_results_templateEl=document.querySelector('#fullResults-template');
  console.log(search_resultsEl.childNodes.length);
 
  while (search_resultsEl.hasChildNodes()) {
    search_resultsEl.removeChild(search_resultsEl.lastChild)
  }
  for (var i = 0; i < target_search_Results.length; i++) {
 
      const cards = search_results_templateEl.content.cloneNode(true).children[0];
      const productImgEl = cards.querySelector("#product-img");
      const productNameEl = cards.querySelector("#product-name");
      const productSalePriceEl = cards.querySelector("#sale-price");
      const productPrimaryPriceEl = cards.querySelector("#primary-price");
      const productRatingImgEl = cards.querySelector("#product-rating");
      const productLinkEL = cards.querySelector("#product-link");
      
      productImgEl.setAttribute("src", target_search_Results[i].product_img.replaceAll('"', ''));
      productNameEl.textContent = target_search_Results[i].title.replaceAll('"','');
    //  if(cards>=1){
    //   search_resultsEl.append(cards.empty());
    //  };
      if (loggedIn) {
        productSalePriceEl.textContent = `Sale Price: ${target_search_Results[i].sale_price.replaceAll('"','')}`;
        
        productPrimaryPriceEl.textContent = `Primary Price: ${target_search_Results[i].primary_price.replaceAll('"','')}`;
       

        productRatingImgEl.textContent = `Rating: ${target_search_Results[i].product_rating}`;
       // productRatingImgEl.createElement('img').setAttribute("src", "https://cdn3.iconfinder.com/data/icons/ratings-1/87/Circle_-_4.5_Star-512.png");

        productLinkEL.setAttribute("href", target_search_Results[i].product_Link.replaceAll('"',''));
        search_resultsEl.append(cards);
        saveSearch();
      }else{
        search_resultsEl.append(cards);
        
      }

  }
  

}
  
