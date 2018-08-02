var express = require('express');
var router = express.Router();
var Student = require('../models/students');



/* GET users listing. */
router.get('/students', function(req, res, next) {
  
  Student.find(function(err, students) {
            if (err)
                res.send(err);

            res.render("viewStudent", { students : students});
        });
});

// on routes that end in /schools/:school_id
// ----------------------------------------------------
router.get('/:student_id', function(req,res){
     Student.findById(req.params.student_id, function(err, student) {
            if (err)
                res.send(err);
            res.render("viewStudent");
        });
});

router.post('/add', function(req, res, next){
    
    var student = new Student();      // create a new instance of the School model
        student.first_name = req.body.first_name; 
        student.last_name = req.body.last_name;
        student.age = req.body.age;
        student.sex = req.body.sex;
        student.class = req.body.class;
        student.school = req.body.school;
        student.address = req.body.address;
        student.state = req.body.state;
        student.grade = req.body.grade;

        

        // save the student and check for errors
        student.save(function(err, resp) {
            if (err) { res.send(err); }
            else {
                console.log(resp);
                res.render('viewStudent', { success: 'new student added successfully'})
            }
            
        });

    
});

router.put('/:student_id', function(req, res, next){
     Student.findById(req.params.student_id, function(err, student) {

            if (err)
                res.send(err);

            student.first_name = req.body.first_name; // update the schools info
            student.last_name = req.body.last_name;
            student.age = req.body.age;
            student.sex = req.body.sex;
            student.class = req.body.class;
            student.school = req.body.school;
            student.address = req.body.address;
            student.state = req.body.state;
            student.grade = req.body.grade;

            // save the school
            student.save(function(err) {
                if (err)
                    res.send(err);

                res.render({ message: 'student updated!' });
            });

        });
});

router.delete('/:student_id', function(req, res, next){
    Student.remove({_id: req.params.student_id}, function(err, student) {
            if (err)
                res.send(err);
            res.render({ message: 'Successfully deleted' });
        });
})

module.exports = router;
