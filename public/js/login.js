// runs async function for the login form 
// an async function returns a promise
// https://www.w3schools.com/js/js_async.asp

async function loginHandler(event) {
// async function loginFormHandler(event) {
    event.preventDefault();


    // Defines the constants for user email and password
  // Email and password are equal to the #email and #password IDs respectively, using trim to remove whitespace from both sides of the email and password string
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();
  
  // If user's email and password matches the email and password in our system, then 
  // respond with a fetch request of the user's email and password (their login data)
  
    if (userEmail && userPassword) {
      
      // The await keyword makes the function pause the execution and wait for a resolved promise before it continues
      // "awaits" the data from fetch request of api/users/login (the login data), 
      // https://www.w3schools.com/js/js_async.asp

      const response = await fetch('/api/users/login', {
        // POST is used to send data to a server to create/update a resource.
        // https://www.w3schools.com/tags/ref_httpmethods.asp

        // Uses post request to send user's login info to the server and stringfies that info

        method: 'post',
        body: JSON.stringify({
          userEmail,
          userPassword
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
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

  // MAKE fetch call to is the one in user-routes with the '/login' endpoint.
//create user login: /api/users/login
//EXPECTS FROM BODY: {email: 'userEmail@email.com', password: 'usersPassword'}
// router.post('/login', (req,res) => {