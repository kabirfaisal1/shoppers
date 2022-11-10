# Shoppers

# Table-of-Contents
  * [Deployed URL](#deployed-url)
  * [Workflow](#workflow)
      * [Database Design](#database-design)
  * [Git Repo](#git-repo)
  * [Dependency](#dependency)
  * [UserStory](#userstory)
  * [Test case](#test-case)
    * [Test Dependency](#test-dependency)
  * [Screenshots](#screenshots)



 
## [Deployed URL](#table-of-contents)
```
ENTER HERE
```

## [Workflow](#table-of-contents)
1. Log in
![Image at  Log in workflow](/public/images/LogIn.png)
2. Search
![Image at  search in workflow](/public/images/Search.png)


### [Database Design](#table-of-contents)
![Image at  database schema](/public/images/dbschema.png)

## [Git Repo](#table-of-contents)
```
https://github.com/kabirfaisal1/shoppers.git
```

## [Dependency](#table-of-contents)
```
NOTE: if you are copying this repo all you have to do is run 
     -npm -i
     and you will get all the packages below
    1. node.js (npm install -g npm) on your system
    2. npm i mysql
    3. npm i express
    4. npm i path
    5. npm i dotenv
    6. npm i sequelize
    7. npm install cypress --save-dev (in app_Test folder) 
    8. npm i dotenv

    opt.
    - npm i nodemon (help you test live without killing server. CLI: nodemon server.js)
```
## [User Story](#table-of-contents)
```
ENTER HERE
```

## [Test case](#table-of-contents)
![Image at testcase](/public/images/testcase.png)
## [Test Dependency](#table-of-contents)
1. start the server from the root
```
  npm start server
```
2. open second terminal go to app_test folder
```
  cd /your/project/path (to app_Test)
```
3. install npm
```
  npm install
```
4. install cypress
```
  npm install cypress --save-dev
```
5. Open cypress
```
  npx cypress open
```
6. From cypress dashboard
* Select e2e
* Select chrome
  *  Click on start E2E testing in chrome (you will see new chrome open next to cy app)
7. Select the test case you want to run
8. OR run cypress headless
```
 npx cypress run
```
## [Screenshots](#table-of-contents)
1. home page page
![Image at home page](/public/images/homepage.png)
2. log-in page
![Image at log in page](/public/images/logingPage.png)
3. log-in page
![Image at user homepage](/public/images/loggedHomepage.png)
4. log-in page
![Image at after search](/public/images/afterSearch.png)
