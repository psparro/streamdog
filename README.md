# streamdog

Assignment 1 to 5: WEB322 winter 2021

Use following link to go to the live website:
streamdog.herokuapp.com

First when you open the site you will see the nevigation bar from where you can navigate through site and sign up and log in to your account.
After that there are featured movies on home page (There is some error in desplaying TV shows on home pages)

Movies link in nevigation bar desplays all movies and tv shows on the website. You can click on any movie poster to see the description of it.

When you sign up your details will be stored in our database with your encrypted password and you will be directed to your customer dashboard.
If you want to check admin account it is already created in database and it's username is parthjpatel00@gmail.com password: Parth31@01

When you log in as a customer unfortunatily there is no service of buying movies but when you log in as an admin you will be able to add mew movie or TV show to the website. These movies are displayed on all movies and tv shows page and if it is featured it will also be displayed on home page as well (but only if it is movie as there is some problem with tv shows). every time you log in the session will be created.


Technologies used in application

MongoDB cloud service is setup with collections and database

User’s data is inserted into the database when the user fills out the form and hits the submit button using post method.

Password is stored in encrypted format (12) with bcrypt.

A Session is  created to maintain the user state with express-session.

Server side validations are implimented and upon an unsuccessful authentication, the application  displays an appropriate error message.

Routes that can only be accessed when users are logged-in, are protected.

Both dashboards, show the user’s name(first name and lastname) and a logout link.

The application directs an inventory clerk to their  dashboard and a regular user to his or her dashboard. 

An Administrator can create movies & tv shows with all the necessary data.

An Admin can upload a photo for a movies & tv shows files have validations.

All Movies & TV Shows created are populated on the Front-End of the website, specifically the movie and tv show listing Page.




