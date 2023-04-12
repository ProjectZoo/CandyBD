const CandyDB = require('./CandyDB')
//Design Pattern - Singleton
CandyDB.getCandies(function(candies){

    for(let i=0; candies.length > i;i++){
        console.log(candies[i].id + ":" + candies[i].cname + ":" + candies[i].type )
    }

})
/*
create database candy;
use candy;

create table candy(
    id int auto_increment not null,
    cname varchar(60) null,
    ctype varchar(30) null,
    primary key(id)
);

insert into candy values
(1,'Wanka Bar','chocolate'),
(2,'Pé-de-moleque','doce simples'),
(3,'Tablito','sorvete');
 
select * from candy;

*/