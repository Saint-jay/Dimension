let connection = require('../config/mysql');
let db = {
    start: connection.connect(),
    end: connection.end()
};

db.query = function(sql, callback){
 
	if (!sql) {
		callback();
		return;
    }
    
	connection.query(sql, function(err, rows, fields) {
	  if (err) {
	    console.log(err);
	    callback(err, null);
	    return;
	  };
 
	  callback(null, rows, fields);
    });
}




module.exports = db;