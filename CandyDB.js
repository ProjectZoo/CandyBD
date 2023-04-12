const mysql = require('mysql')

class CandyDB{
//função para não pedir toda hora
    static connect(){
        const connection = mysql.createConnection({
            host:  "localhost",
            user: "root", 
            password:"",
            database: "candy"
        })
        connection.connect()
        return connection
    }

   static getCandies(callback){
       let connection = CandyDB.connect()
       let sql = "select * from candy"
       let query = connection.query(sql, function(err,result,fields){
        if(err) throw err
           callback(results)
        })
           console.log(query.sql)
           connection.end
   }
}

module.exports = CandyDB