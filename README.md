1. Project Setup Instructions: to setup the project locally
First, you must have Node.js (version 12 or higher) and npm (Node Package Manager)
Then use this command to clone to the repository: git clone <https://github.com/cybellejabra217/reciperoulette.git>
Navigate to project directory: cd reciperoulette
Create the necessary .env file to properly configure the database
Then: npm install and npm install -g nodemon
And finally: "npm/nodemon app" to run the server on port 3001
Prefer to use nodemon app since it just restarts when something is changed in the code or if it reaches an error, it doesn't need to be run again like npm app

2. API Endpoints and Usage: 

 GET/getCuisines: to retrieve all cuisines in database

 POST/register: to register a user with his inputted credentials into the database
 POST/login: to login a user

 POST/createRating: to create a rating and put it in database
 GET/getRatingsByRecipe/:recipeId : to retrieve all ratings in the database belonging to a specific recipeID
 GET/getRatingsByUser/:userId  : to retrieve all ratings in the database belonging to a specific userID

 POST/createRecipe : to create a recipe and put it in the database
 GET/getRecipesByCuisine/:cuisineName : to retrieve all recipes belonging to a specific cuisineName
 GET/getRecipesByIngredients/:ingredientName : to retrieve all recipes that include a specific ingredient
 GET/getRecipesByDietaryPreferences/:dietaryPreferences : to retrieve all recipes with a dietary preference
 GET/getPicturesByRecipe/:recipeId : to retrieve the pictures that belong to a specific recipeID
 GET/getRecipesByCriteria : to retrieve all recipes from database with that specific criteria

 POST/createReview : to create a review and put it in the database
 GET/getReviewsByRecipe/:recipeId : to retrieve all reviews that belong to a specific recipeID
 GET/getReviewsByUser/:userId  : to retrieve all reviews that belong to a specific userID
 GET/spinTheWheel : to retrieve a random recipe that fits the criteria of the user
 POST/updateUserBio : to update the bio of a specific user


3. Database Schema Description:
My database (RecipeRoulette) has five entities: User, Recipe, Rating, Review, Cuisine.

The User entity has attributes: UserID (auto increments), Username, Password, Email, JoinDate (set to current date as soon as user registers), Bio (for the user to give a description of his likings). It is a basic entity that is needed in any database.

The Recipe entity has attributes: RecipeID (auto increments), title, description, ingredients, instructions, difficultylevel, averagerating, cuisineID, calories, userID, dietaryPreferences, recipePictures.
The cuisineID and userID are foreign keys. CuisineID indicates which cuisine the recipe belongs to and the UserID indicates which user created the recipe(NULL if created by system). Title, description, ingredients, calories, and instructions are to allow full details for the recipe. DifficultyLevel and dietaryPreferences are enum, respectively: Easy, Moderate, Hard and Vegan, Vegetarian, Pescetarian, Gluten-Free, Lactose-Intolerant. recipePictures is a blob to allow image files for each recipe for better description. Finally, averageRating is calculated according to the average of the ratings of each recipe.

The Rating entity has attributes: RatingID (auto increments), Value, UserID, RecipeID. The value is an enum with options 1 to 5. UserID and RecipeID are foreign keys, userID indicates which user submitted the rating and the recipeID indicates for which recipe the rating belongs to.

The Review entity has attributes: ReviewID (auto increments), content, reviewDate, recipeID, userID. The content is a text for a user to describe what he liked or didn't like about the recipe. reviewDate is set as current time once the review is submitted. RecipeID and userID are foreign keys, recipeID indicates to which recipe the review belongs to and the userID indicates which user submitted the review.

The Cuisine entity has attributes: cuisineID(auto increments), cuisineName. The sole purpose of this entity is to provide better normalization for the database.

The rating and review entities exist as separate entities to allow a user to submit one without having to submit the other. The user entity exists for simple registering and loging in of users with proper credentials. Recipe is the most important entity since almost all other entities revolve around it and have its primary key as a foreign key. 
The overall schema shows a database for recipes with specific cuisine. Users can review, rate or even add their own recipe. The ultimate goal is they can spin a metaphoric "wheel" to get a random recipe based on their preferences. 

4. Third-Party libraries used: 
Express-Validator: to import the validation and check for errors for each function and input
Dotenv: To configure the database
MySQL2: to be able to import my database from mySQL workbench
Express: to define the routes
BCrypt: to hash the passwords
Moment: to get the specific time for joinDate and reviewDate
Multer: To upload, save and validate files (specifically here image files)

5. Testing application on postman:
First, you must download postman online and create an account (be sure to have a stable connection)
Click on : Send an API request
Type this: http://localhost:3001
Then to check for a specific route we write the name of the route after the above text
Example: http://localhost:3001/register
Set the request to post (or get, specific for each route)
Set the body to raw
Write this body: 
{
    "username": "exampleUser",
    "password": "examplePassword",
    "confirmPassword": "examplePassword",
    "email": "exampleEmail@live.com"
}

and click on send
This can work for any route with a post request, just put each attribute in double quotations, and write what you want to enter into the database

Another example for some get routes in my database:
http://localhost:3001/getReviewsByRecipe/1
Here we send a get request to retrieve all reviews belonging to recipeID = 1



