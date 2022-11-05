var submitButton = document.querySelector("#btnSubmit");

submitButton.addEventListener("click",()=>{
    getItem();
})
function getItem(){
    var searchesults=document.querySelector('#search_results')
    var queryItem = `https://api.redcircleapi.com/request?api_key=4324A15C75444BB7AA69766FA38667EF&search_term=xbox&type=search&output=json`;
    fetch(queryItem, { method: 'GET' }) //fetching all related area for current location
    .then((response) => response.json()).then((data) => {
        for(var i=0; i<data.search_results.length; i++){
            console.log(JSON.stringify(data.search_results[i].product["title"]))
        }

    })
    .catch((error) => {
      console.error('Error:', error);
      return error;
    });


}