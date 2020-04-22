# ML-TechTest
React Dashboard (w/ Node API) Tech Test 

## Design Notes 

### Initial Look: 
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
Express/Node; REST API with CRUD (Create, Read, Update, Delete) abilities 

#### Schema: 
ID (auto increment) - int
Product_name - string
Category - string
Size - int
Colour - string
Status - string (or char?)
Customers_Initials - string

Potential Impovements:
Customer_Name, or seperate forename/surname fields instead of Customers Initials (turn into intials on EndPoint, or on FE ?)
Order # (make little pop up when hovering. In real world, probably would need this)