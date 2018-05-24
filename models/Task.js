var db = require('../dbconnection');
var Task = {
    getAllTask:function(callback){
        return db.query("select * from task",callback);
    },
    getTaskById:function(id,callback){
        return db.query("select * from task where id = ?",[id],callback);
    },
    addTask:function(Tasks,callback){
        return db.query("insert into task values(?,?,?,?)"[Tasks.id,Tasks.title,Tasks.description],callback);
    },
    deleteTask:function(id,callback){
        return db.query("delete  from task where id = ?",[id],callback);
    },
    updateTask:function(id,Tasks,callback){
        return db.query("update task set title=?,description=? where id = ?",[Tasks.title,Tasks.description,id],callback);
    }
};
module.exports = Task;