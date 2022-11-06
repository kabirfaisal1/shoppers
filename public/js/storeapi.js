var Target_Token="4324A15C75444BB7AA69766FA38667EF";
var searchInputEL = document.querySelector("search-fild");
var submitButtonEl = document.querySelector('#btnSubmit');
var search_resultsEl=document.querySelector('#fullResults')

submitButtonEl.addEventListener('click',()=>{

   target_API_Endpoint();

 //stud();


  
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
  var queryItem = `https://api.redcircleapi.com/request?api_key=${Target_Token}&search_term=xbox&type=search&rating=four_star`;
  //  var queryItem = `https://api.redcircleapi.com/request?${params}`;
  fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
  .then((response) => response.json()).then((data) => {
        var i =0
       do{
        var target_search_Results={
             product_img: JSON.stringify(data.search_results[i].product['main_image']),
            //product_img: "https://hackaday.com/wp-content/uploads/2011/08/temporary-image.gif",
            title: JSON.stringify(data.search_results[i].product['title']),
            product_Link: JSON.stringify(data.search_results[i].product['link']),
            primary_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
            sale_price: JSON.stringify(data.search_results[i].offers.primary['symbol']+' '+data.search_results[i].offers.primary['price']),
            product_rating: JSON.stringify(data.search_results[i].product['rating'])
          }
        console.log(target_search_Results.product_img)
        tartarget_API_Endpoint.push(target_search_Results);
         i++;
       }
       while(i<data.search_results.length)
      //  console.log(tartarget_API_Endpoint)
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
    imgEl.setAttribute("src", tartarget_API_Endpoint[i].product_img.replaceAll('"', ''));
   //adding card body
   //header
   var addcardboyEl = document.createElement('card-body');
   var addcardheaderEL= document.createElement('h5');
   addcardheaderEL.textContent = tartarget_API_Endpoint[i].title.replaceAll('"', '');
     //price
     var addcardpriceEL= document.createElement('p');
     addcardpriceEL.textContent = `Sale price: ${tartarget_API_Endpoint[i].sale_price.replaceAll('"', '')} \nprimary price ${tartarget_API_Endpoint[i].primary_price.replaceAll('"', '')}`
     //link
     var addcardLink = document.createElement('a');
     addcardLink.setAttribute("href", tartarget_API_Endpoint[i].product_Link.replaceAll('"', ''));
     addcardLink.setAttribute("target", "_blank");
     addcardLink.textContent= "View on Site"
     //rating

      var ratingImg = document.createElement('img');
      ratingImg.setAttribute("id", "rating");
      ratingImg.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/ratings-1/87/Circle_-_4.5_Star-512.png");
      console.log(tartarget_API_Endpoint[i].product_ratin)
      ratingImg.textContent = tartarget_API_Endpoint[i].product_rating;

      addDivEl.appendChild(imgEl);
      addDivEl.appendChild(addcardboyEl);
      addcardboyEl.appendChild(addcardheaderEL);
      addcardboyEl.appendChild(addcardpriceEL);
      addcardboyEl.appendChild(ratingImg);
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