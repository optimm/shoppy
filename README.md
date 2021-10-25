# SHOPPY

Shoppy is a advanced online clothing management system made using react js , node js and my sql

#### To setup on your system

- Clone the project - ```git clone https://github.com/optimm/shoppy.git```



- make sure you have node js and xampp or wamp server installed on your sytem and start the servers from xampp r wamp


- Install npm packages - In folder shoppy ```npm install``` then for frontend ``` cd frontend/``` ```npm install```


- Create a file named ``.env`` in folder shoppy and in that add ```API_KEY = your api key for fast2sms ```(https://www.fast2sms.com/dashboard/dev-api) and other varibales ```EMAIL= your email id to send order confirmation mail to customer```  ```PASSWORD= your email id password```


- Now go to http://localhost/phpmyadmin/ and run the query in the sql table to create databse and in that database to create the required tables (queries are given queries.md)


- now you are ready to go run ```npm run dev``` in folder shoppy and then ```cd frontend/``` ```npm start``` to start backend and front end


#### contributors
- Ayush Saxena (https://github.com/optimm)
- Bhawna Khatri (https://github.com/Bhawna147)