/**
 * StudentdbController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // to view student record
  records:function(req, res){
       Studentdb.find({}).exec(function(err, studentdb){
          if(err) {
               res.send(500,{error:'Database error'});
        
              
           }
   return res.view('records', {studentdb:studentdb});
     }); 
     },
  search:function(req, res){

  return res.view('search');
      
},

  add:function(req, res){
  return res.view('add') 
  },
  create:function(req, res){
     var title = req.body.title;
     var firstname = req.body.firstname;
     var lastname = req.body.lastname;
     var sex = req.body.sex;
     var age = req.body.age;
     var course = req.body.course;
     var level = req.body.level;
     var cgpa = req.body.cgpa;
     var body =  req.body.body;

    Studentdb.create({title:title, firstname:firstname, lastname:lastname, sex:sex,
       age:age, course:course, level:level, cgpa:cgpa,  body:body}).exec(function(err){
      if(err) {
        res.send(500,{error:'Database error'});
      }  
      res.redirect('/studentdb/records');
    });
  },

  delete:function(req, res){
      
    Studentdb.destroy({id:req.params.id}).exec(function(err){
      if(err) {
        res.send(500,{error:'Database error'});
      }  
       res.redirect('/studentdb/records')
    });
    return false;
  },
  
 edit:function(req, res){

    Studentdb.findOne({id:req.params.id}).exec(function(err,studentdb){
      if(err) {
        res.send(500,{error:'Database error'});
      }  
      return res.view('edit' , {studentdb:studentdb});
    });
   },
  update:function(req, res){

    var title = req.body.title;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var sex = req.body.sex;
    var age = req.body.age;
    var course = req.body.course;
    var level = req.body.level;
    var cgpa = req.body.cgpa;
    var body =  req.body.body;

    Studentdb.update({id: req.params.id},{title:title, firstname:firstname, lastname:lastname, sex:sex,
      age:age, course:course, level:level, cgpa:cgpa,  body:body}).exec(function(err){
      if(err) {
        res.send(500,{error:'Database error'});
      }  
      res.redirect('/studentdb/records');
    });
     return false;
  }
};




