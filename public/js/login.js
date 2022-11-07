

// runs async function for the login form 
// an async function returns a promise
// https://www.w3schools.com/js/js_async.asp

async function loginForm(event) {
    event.preventDefault();
  

    // Defines the constants for email and password user is utilizing to login
  // Email and password are equal to the #current-email and #current-password query selector IDs respectively, using trim to remove whitespace from both sides of the email and password string
    const currentEmail = document.querySelector('#current-email').value.trim();
    const currentPassword = document.querySelector('#current-password').value.trim();
  
    // If user's email and password matches the email and password in our system, then 
  // respond with a fetch request of the user's email and password (their login data)
  
    if (currentEmail && currentPassword) {
           
      // The await keyword makes the function pause the execution and wait for a resolved promise before it continues
      // "awaits" the data from fetch request of api/users/login (the login data), 
      // https://www.w3schools.com/js/js_async.asp
      const response = await fetch('/api/users/login', {
           // POST is used to send data to a server to create/update a resource.
        // https://www.w3schools.com/tags/ref_httpmethods.asp

        // Uses post request to send user's login info to the server and stringfies that info

        method: 'post',
        body: JSON.stringify({
          email: currentEmail,
          password: currentPassword
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
  // Response.ok contains a boolean value indicating whether the response was successful
      // So, this if statement translates to if the response was successful, then the browser will replace the current URL 
      // (document.location.replace) with the URL of the home page

      if (response.ok) {
        document.location.replace('/');

        // if the response wasn't successful, user will get an alert message indicating their info was incorrect 
      } else {
        alert(response.statusText);
      }
    }
  }
  


// runs async function for the signUp form 

  async function signupForm(event) {
    event.preventDefault();
  
    const signupUsername = document.querySelector('#username').value.trim();
    const signupEmail = document.querySelector('#email').value.trim();
    const signupPassword = document.querySelector('#password').value.trim();
  

    // If user's email and password matches the email and password in our system, then 
  // respond with a fetch request of current users in system to ensure that email & username are unique
    if (signupUsername && signupEmail && signupPassword) {
      const response = await fetch('/api/users/', {
        method: 'post',
        // turns username, email, and password into a JSON string 
        body: JSON.stringify({
          username: signupUsername,
          email: signupEmail,
          password: signupPassword
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
    // if the response wasn't successful, user will get an alert message indicating their info was incorrect 
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // Adds submit event to the login form when the submit button is clicked
  document.querySelector('.login-form').addEventListener('submit', loginForm);
  
  // Adds submit event to the signup form when the submit button is clicked
  document.querySelector('.signup-form').addEventListener('submit', signupForm);
