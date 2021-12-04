## Queries for database

#### Start the mysql,apache,proftpd servers from xampp or wamp and Go to http://localhost/phpmyadmin/

- query for database 

```CREATE DATABASE shoppy;```

#### Now click on the databse and in the sql tabe run these queries to create the tablespoon

- ```CREATE TABLE `customer` (email varchar(255) NOT NULL, pass varchar(20) NOT NULL , name  varchar(100) DEFAULT 'Customer' ,	mobile bigint(20) NOT NULL ,PRIMARY KEY (mobile) );```


- ```CREATE TABLE `product` ( p_id bigint(20) , p_name  varchar(100) , p_price varchar(100) , 	p_image varchar(300), p_description varchar(1000) , p_category varchar(10) , p_type varchar(30) , PRIMARY KEY (p_id));```

- ```CREATE TABLE `order`  ( name varchar(100) , mobile bigint(20) NOT NULL, p_id bigint(20) NOT NULL , p_name varchar(100), p_image varchar(300), p_price bigint(20),p_size  char(5) NOT NULL ,  p_qty bigint(20) , id varchar(50) NOT NULL, delivery_address varchar(300), delivery_mobile bigint(20), status varchar(20) NOT NULL , PRIMARY KEY (p_id,p_size,id,mobile,status));```


Now you can follow the rest of instructions

