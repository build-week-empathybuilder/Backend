# Backend
Repo for Backend work on Empathy-Builder

## Initialize the Project
**This guide was written using Insomnia and NodeJs**

Requirements:
[] Insomnia, Postman, or a similar REST client
[] A cloned copy of this repo (please do not push) 
OR
[] Access to the herokuu link (link: `https://dashboard.heroku.com/apps/backend-buildweek-web22-mw/deploy/github` )

1) Install your REST client per your OS's version instructions
2) Create a "New Request", and give it a descriptive name. This is only a placeholder value, what happens will be in the next step
3) In your new request, select which type of request you will make (we will use "GET, POST, PUT, and DELETE" these are analogous to "READ, INSERT, UPDATE, and REMOVE"). For testing purposes, please select "GET".
4) Now that we've selected a request, we need to insert a link to utilize that action. We will either use the heroku link, or we will use our own machine.

If using Herokuu, continue here, otherwise scroll down to local machine:

5) Copy and paste the link from herokuu into the address bar, and click send.
6) Your REST client should return with the following message "Welcome to the server!"

If using your local machine, start here:

5) In your terminal, CD to the directory where you cloned the repo. Type the command `yarn start` (you may need to install yarn, or use the command `npm run start`, however, as npm and yarn do not like to work together, there may be issues).
6) In your terminal window, you should see the following message '=== Server listening on port 8000 ===' DO NOT CLOSE OUT OF THIS WINDOW, as this is where your server is running. When you are finished utilizing the server, you may close this window.
7) In the address bar of your REST client, type the following:
`http://localhost:8000/`, and hit SEND. Your client should return with "Thank you for using the server!"

Differences between Herokuu and localhost end here.

## Making a new user and logging in

1) At the end of your address link, put the following items `api/auth`, this selects the authorization route that we will need to access in order to register a new user and log in.
2) We can simply log in with the credentials `Mack3` and `pass`, but let's make a new user first.
3) Select the POST request from the request selector dropdown menu.
4) At the end of your address link, put the following endpoint: `api/auth/register`. Then, click on the "Body" item of your REST client, and select JSON. This allows us to use JSON with our client.
5) Inside the JSON body area, think of a username and a password. Keep it simple! Write it out like this:
{
    "username":"your username goes here",
    "password":"your password goes here"
} 
Items MUST be in quotes, that is how the server knows which item goes where.
6) Send the request, and the server will return with the following data:
{
    "id": (this is a number that is dependant on the amount of users that have been added to the database)
    "username": "your username goes here",
    "password": This is a hash of your password. It is not important.
}
7) Now that we have added our user to the database, we can now log in. In the address bar, remove `api/auth/register` and replace it with `api/auth/login`. Do not change the JSON body in your client.
8) Click send again, and this will send the data in your JSON body through the authenticator. If your password syncs up to what the system holds, you will be logged in, and greeted with the message: "Welcome "your username goes here"!" and a "token".
9) In-between the quotes inside of the "token" value, copy that entire string.
10) Click on the headers tab, and add a new header. This header shall be called:
`Authorization`. The value shall be the string retrieved from the token.

## Viewing the list of Users

1) Removing `api/auth/login` from your address bar, with the `Authorization` header now installed, we can now add `api/users/` to the end of our link. By clicking send, we tell the server "Hey, I have this token that you seem to require to access you, here you go", and the server responds with the requested information.
2) If you do not provide the token, the server will respond with an error. Consequentially, if you provide the server with an expired token, the server will respond with an error. Tokens expire every twenty-four hours from creation.
3 You can add a number to the end of `auth/users/` if you wish to select only that user. 

## Viewing the list of calculators

As each endpoint technically does the same thing, I will list the following endpoints and then give you the CRUD requests. 

To view the running totals of the personal calculators, these are the following endpoints:
- `api/calc1/` // personal total calculator
- `api/clothing/` // clothing calculator
- `api/debt/` // debt calculator
- `api/food/` // food calculator
- `api/health/` // health calculator
- `api/housing/` // housing calculator
- `api/car/` // transportation calculator
- `api/bills/` // utilities calculator
- -GET: Gets all of the user calculators
- -POST: Adds to all of the user calculators, ID increments even after deletion (so if I delete item 8, and then add a new item, it will be item 9)
- `api/calc1/:id` 
- `api/clothing/:id`
- `api/debt/:id`
- `api/food/:id`
- `api/health/:id`
- `api/housing/:id`
- `api/car/:id`
- `api/bills/:id`
- -GET: Get the specific user calculator by the ID of the calculator
- -PUT: Update the specific user calculator by the ID of the calculator
- -DELETE: Remove the specific user calculator by the ID of the calculator
- `api/calc1/:userId/:id` 
- `api/clothing/:userId/:id`
- `api/debt/:userId/:id`
- `api/food/:userId/:id`
- `api/health/:userId/:id`
- `api/housing/:userId/:id`
- `api/car/:userId/:id`
- `api/bills/:userId/:id`
- -GET: Get that specific user calculator by the ID of that user
- -PUT: Updates the specific user calculator by the ID of the calculator, by the user ID
- -DELETE: Deletes the user calculator by the ID of the calculator

To view the running totals of the relocation calculators, these are the following endpoints:
- `api/calc2/` // relocation total calculator
- `api/lodging/` // lodging calculator
- `api/misc/` // miscellaneous expenses calculator
- `api/newhome/` // new home calculator
- `api/newcar/` // new transportation calculator
- `api/work/` // work and life calculator
--GET: Gets all of the user calculators
--POST: Adds to all of the user calculators, ID increments even after deletion (so if I delete item 8, and then add a new item, it will be item 9)
- `api/calc2/:id`
- `api/lodging/:id`
- `api/misc/:id`
- `api/newhome/:id`
- `api/newcar/:id`
- `api/work/:id`
--GET: Get the specific user calculator by the ID of the calculator
--PUT: Update the specific user calculator by the ID of the calculator
--DELETE: Remove the specific user calculator by the ID of the calculator
- `api/calc2/:userId/:id`
- `api/lodging/:userId/:id`
- `api/misc/:userId/:id`
- `api/newhome/:userId/:id`
- `api/newcar/:userId/:id`
- `api/work/:userId/:id`
--GET: Get that specific user calculator by the ID of that user
--PUT: Updates the specific user calculator by the ID of the calculator, by the user ID
--DELETE: Deletes the user calculator by the ID of the calculator
