# ML-TechTest
React Dashboard (w/ Node API) Tech Test 

## Initial commands
##### npm install
Run this In BOTH the root '/' and 'front/' directories to install project dependencies

## Frontend commands
Run these commands from the '/front' directory.

#### Dev

##### npm run dev 
Starts the frontend development server.

#### Production

##### npm run build 
Builds the frontend app into React's usual 'build/' directory
##### npm run moveScripts 
Moves production React app from  the usual 'build/', to our root 'build/' directory

##### NOTE: I put in a 'move' command in the build script, in order to move files from React's default build/ directory. If you're on OSX/Linux - change the term to 'mv', from 'move' in the build script.

## Backend commands
Run these commands from the root '/' directory of the project.

#### Dev

##### npm run dev 
Starts the backend development server (uses nodemon for auto loading).

#### Production

##### npm run build 
Compiles TypeScript to JS and plots into the 'build/' directory.

## Running Production
I've set up Node to statically serve our React app at it's root directory. Meaning, you only have to run the server to get the app working! Visit the 'build/' directory within the root of your project, we'll run the commands from there.

##### npm run server
Visit localhost:8080 in your browser to see the working React/Node app! 

##### NOTE: Please only attempt to run this command if you have followed the above 'Production' steps

## Design Notes / Initial Takeaways

#### CSS Variables: 
##### Font: 
Avenir / Helvetica - Uppercase and 2px-ish Letter Spacing on Status Key text - use Normal/Bold for rest
##### Background: 
RGB 34, 34, 34 (#222222)
##### Cyan ("Ready To Try" status): 
RGB 75, 211, 176 (#4bd3b0)
##### Blue ("On The Way status colour): 
RGB 100, 170, 235 (#64aaeb)
##### Orange ("In The Queue" colour): 
RGB 254, 102, 51 (#fe6633)
##### Red ("Out Of Stock" colour): 
RGB 247, 2, 1 (#f70201)
##### White (1st Text colour): 
RGB 248, 248, 248 (#f8f8f8)
##### Grey (2nd Text + Border colour): 
RGB 154, 155, 161 (#9a9ba1)

## API Notes 
Express/Node; REST API with CRUD (Create, Read, Update, Delete) abilities. Update in't in the spec, but might be worth doing anyway as it's not too much work.

### Schema: 
##### ID
primary key/auto increment - int
##### Product_name  
string
##### Category 
string
##### Size 
int
##### Colour 
string
##### Status 
string (or char?)
##### Customers_Initials 
string

### Potential Impovements:
##### Customer_Name
Or just seperate forename/surname fields instead of Customers Initials (turn into intials on EndPoint, or on FE ?). More aligned to real life situation?
##### Order # 
Make little pop up when hovering? In real world, probably would need something like this