# SearchEngine

Setup:  
To start and run the server, node and mysql need to be installed on the system.
The mysql database is used as a fixed schema is used with high performance. It is easily integrable with node and also ensures security.
Furthermore, multiple dependencies of node need to be installed, like:
1.	Express: 
Npm install express –save-dev

2.	Mockaroo:
For fake data generation.  
Npm install mockaroo

3.	Mysql:
Mysql should also be installed globally on your system. The mysql server can be run by using the XXAMP server.  
To install mysql globally:  
npm -g install mysql –save-dev  
Else mysql can be simply installed using the command:  
npm install mysql

4.	Nodemon:
Constantly restarting the server can be repetitive and a hassle therefore nodemon is used to provide easy restarting capabilities.  
Npm install nodemon –save-dev

5.	Body Parser:
This dependency helps in parsing queries and body of the request.  
Npm install body-parser

How to run the app:  
To run the app. Go to the local directory where the server.js file is kept and open a command prompt in that directory. Run the command  
‘node server.js’  
Or  
‘nodemon server.js’  
If there are no errors, then the server will start.

Sorting and Filtering:  
Using the job_title field is a reasonable way to sort and filter results as it provides the most relevant results to the user.  
The results are sorted alphabetically for ease.
