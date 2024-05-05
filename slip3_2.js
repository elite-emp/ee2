/* Q2)Create a node.js file that Select all records from the "Teacher" table, and find the Teachers
whose salary is greater than 20,000.*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/');
var db = mongoose.connection;
db.on('error', function (err) {
    console.error('Connection error:', err.message);
});
db.once('open', function () {
    console.log("Connection Successful!");

    var TeacherSchema = mongoose.Schema({
        name: String,
        Department: String,
        salary: Number
    });

    var Teacher = mongoose.model('Teacher', TeacherSchema, 'teacherInfo');

    var teachers = [
        { name: 'Sakshi', Department: 'science', salary: 2000 },
        { name: 'Dikshiya', Department: 'CS', salary: 399999 },
        { name: 'Aditi', Department: 'CA', salary: 467654 }
    ];

    Teacher.collection.insertMany(teachers, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log(teachers);

            var query = Teacher.find({ salary: { $gt: 20000 } });
            query.select({ name: 1, salary: 1, _id: 0 });
            let doc = query.exec();
            doc.then(function (res) {
                console.log(res);
            });
        }
    });
});
