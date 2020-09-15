const mysql = require('mysql');



class MySQL {

    static initialize(penv){
        
        let masterConfig = {
            host : penv.AWS_URL,
            user : penv.AWS_USER,
            password : penv.AWS_PASSWORD,
            database : penv.AWS_DATABASE
        }

        var connection = mysql.createConnection({
            host     : masterConfig.host,
            user     : masterConfig.user,
            password : masterConfig.password,
            database : masterConfig.database
          });


          connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
           
            console.log('connected as id ' + connection.threadId);
          });


          connection.end();


    }

}

module.exports = MySQL;