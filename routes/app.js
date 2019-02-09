var express = require('express');
var router = express.Router();
var view = require('../models/views');
var pol = require('../models/police');
var lic =require('../models/license');
var loc = require('../models/locate');
var person= require('../models/person');
var street= require('../models/street');
var vehicle= require('../models/vehicle');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');
var jwt = require('jsonwebtoken');

// Register User
router.post('/register', function (req, res) {


    let users=new User({

      username : req.body.username,
      password : User.hashPassword(req.body.password),
      email : req.body.email,
      name : req.body.name

    });
		//checking for email and username are already taken
    let promise=users.save();
    promise.then(users => {
    res.status(201).json({'users': 'Added aucees'});
  })
    promise.catch(err => {
    res.status(501).send('Failed');
  });

  });


    //login
router.post('/login',  function (req, res, next) {
  let promise = User.findOne({username : req.body.username}).exec();

  promise.then(function(user){
    if(user){
      if(user.isValid(req.body.password)){
          //generate token
          let token = jwt.sign({username:user.username},'secret', {expiresIn : '3h'});

          return res.status(200).json(token);
      }
      else{
        return res.status(501).json({message:'Invalid credentials'});
      }
    }
    else {
      return res.status(501).json({message:'username is not registered'});
    }
  });

  promise.catch(function(err){
    return res.status(501).json({message: 'Some internal error'});
  })
});

  //token verification
router.get('/username', verifytoken, function(req,res,next){
  return res.status(200).json(decodedToken.username);
})

var decodedToken='';

//middleware for token verification
function verifytoken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
    return res.status(400).json({message: 'Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}


//get views
router.get('/views',function(req,res)
{
  view.find(function(err,views)
  {
    if(err)
      console.log(err);
    else
      res.json(views);
  });
});


//get views by id
router.get('/views/:id',function(req,res)
{
  view.find({v_accidentid: req.params.id},function(err,view)
  {
    if(err)
      console.log(err);
    else
      res.json(view);
  });
});

 //adding view data to database
 router.post('/views/l',async (req,res) => {
  const views = new view(req.body);

  views.save()
  .then(views => {
    res.status(200).json({'views': 'Added aucees'});
  })
  .catch(err => {
    console.log(err);
    res.status(400).send('Failed');
  });
  });


//delete views
router.get('/views/delete/:id',function(req,res)
{
  view.remove({vid: req.params.id},function(err,view)
  {
    if(err)
      res.json(err);
    else
      res.json(view);
  });
});













//get person
router.get('/person',function(req,res)
{
  person.find(function(err,pers)
  {
    if(err)
      console.log(err);
    else
     {
     res.json(pers);
     }
  });

});

router.get('/license',function(req, res){

  lic.find(function(err,lice){

    if(err)
      console.log(err);
    else
     {
     res.json(lice);
     }
});

});
//get person by id
router.get('/person/:id',function(req,res)
{
  person.find({accident_id:req.params.id},function(err,person)
  {
    if(err)
      console.log(err);
    else
     {
     res.json(person);
     }
  });

});

router.get('/license/:id',function(req, res){

  person.find({accident_id:req.params.id},function(err,person)
  {
    var temp = {
      accident_id: '',
      license_no:'',
      caused_the_accident:'',
      safety_belt_or_helmet:'',
    };
    temp=person.pop();
   lic.find({license_no:temp.license_no},function(err,lice)
  {
    if(err)
      console.log(err);
    else
     {
     res.json(lice);

     }

});
  });
});

//adding person data to database
router.post('/person/add',async (req,res) => {
const persons = new person({
  accident_id:req.body.accident_id,
  license_no:req.body.license_no,
  caused_the_accident:req.body.caused_the_accident,
  safety_belt_or_helmet:req.body.safety_belt_or_helmet,

});
console.log(persons);

persons.save()
.then(persons => {
  res.status(200).json({'persons': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});

const lice = new lic({
  license_no:req.body.license_no,
  name:req.body.name,
  sex:req.body.sex,
  age:req.body.age
});

  lice.save()
  .then(lics => {
    res.status(200).json({'licens': 'Added aucees'});
  })
  .catch(err => {
    console.log(err);
    res.status(400).send('Failed');
  });


const vehicles = new vehicle(req.body);
({
  ve_accident_id:req.body.ve_accident_id,
  ve_reg_no:req.body.ve_reg_no,
  ve_owner_name:req.body.ve_owner_name,
  ve_name:req.body.ve_name,
  ve_type:req.body.ve_type,


});
vehicles.save()
.then(vehicles => {
  res.status(200).json({'vehicles': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});

const views = new view(req.body);
({
  vid:req.body.vid,
  v_accidentid:req.body.v_accidentid,
  v_name:req.body.v_name,
  v_mob_no:req.body.v_mob_no,
  v_address:req.body.v_address,


});

views.save()
.then(views => {
  res.status(200).json({'views': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});


let pols = new pol(req.body);
({
  p_accident_id:req.body.p_accident_id,
  p_id:req.body.p_id,
  p_name:req.body.p_name,
  p_mob_no:req.body.p_mob_no,
  p_location:req.body.p_location,


});
  pols.save()
  .then(pols => {
    res.status(200).json({'polices': 'Added aucees'});
  })
  .catch(err => {
    res.status(400).send('Failed');
  });




  const streets = new street({
    s_accident_id:req.body.s_accident_id,
    s_no:req.body.s_no,
    s_name:req.body.s_name,
    location:req.body.location
  });

  const locs = new loc({
    location:req.body.location,
    glat : req.body.glat,
    glong : req.body.glong
  });
  streets.save()
  .then(streets => {
    res.status(200).json({'streets': 'Added aucees'});
  })
  .catch(err => {
    console.log(err);
    res.status(400).send('Failed');
  });

  locs.save()
  .then(streets => {
    res.status(200).json({'streets': 'Added aucees'});
  })
  .catch(err => {
    console.log(err);
    res.status(400).send('Failed');
  });

});

router.post('/license/add', async (req, res) => {
  const lice = new lic(req.body);

  lice.save()
  .then(lics => {
    res.status(200).json({'licens': 'Added aucees'});
  })
  .catch(err => {
    console.log(err);
    res.status(400).send('Failed');
  });

});

//delete persons
  router.get('/person/delete/:id',function(req,res)
  {
    person.remove({accident_id: req.params.id},function(err,person)
    {
      var temp = person.pop();
      if(err)
          console.log(err);
        else
         {
         res.json('Removed');
         lic.remove({license_no:temp.license_no},function(err,licens)
          {
            if(err)
              console.log(err);
            else
            {
              res.json('Removed');
            }
          });

          view.remove({v_accidentid:temp.accident_id},function(req,res) {
            if(err)
              console.log(err);
            else
            {
              res.json('Removed');
            }
          });

          pol.remove({p_accident_id:temp.accident_id},function(req,res){
            if(err)
              console.log(err);
            else
            {
              res.json('Removed');
            }
          });

          vehicle.remove({ve_accident_id:temp.accident_id},function(req,res){
            if(err)
              console.log(err);
            else
            {
              res.json('Removed');
            }
          });

          street.remove({s_accident_id: temp.accident_id},function(err,street)
            {
            if(err)
              res.json(err);
            else
            {
              res.json('Removed');

              loc.remove({location:street.location},function(err,loce){

                if(err)
                  console.log(err);
                else
                {
                res.json('Removed');
                }
              });

            }
          });
              }
    });
});









//get police
router.get('/police',function(req,res)
{
  pol.find(function(err,police)
  {
    if(err)
      console.log(err);
    else
      res.json(police);
  });
});


//get police by id
router.get('/police/:id',function(req,res)
{
  pol.find({p_accident_id:req.params.id},function(err,police)
  {
    if(err)
      console.log(err);
    else
      res.json(police);
  });
});


 //adding police data to database
 router.post('/police/add',async (req,res) => {
  let pols = new pol(req.body);
  ({
    p_accident_id:req.body.p_accident_id,
    p_id:req.body.p_id,
    p_name:req.body.p_name,
    p_mob_no:req.body.p_mob_no,
    p_location:req.body.p_location,


  });
  pols.save()
  .then(pols => {
    res.status(200).json({'polices': 'Added aucees'});
  })
  .catch(err => {
    res.status(400).send('Failed');
  });
  });


  //delete police
  router.get('/police/delete/:id',function(req,res)
  {
    pol.remove({p_id: req.params.id},function(err,view)
    {
      if(err)
        res.json(err);
      else
        res.json('Removed');
    });
  });




//get vehicle
router.get('/vehicle',function(req,res)
{
  vehicle.find(function(err,veh)
  {
    if(err)
      console.log(err);
    else
      res.json(veh);
  });
});

//get vehicle by id
router.get('/vehicle/:id',function(req,res)
{
  vehicle.find({ve_accident_id:req.params.id},function(err,vehicle)
  {
    if(err)
      console.log(err);
    else
      res.json(vehicle);
  });
});


//adding vehicle data to database
router.post('/vehicle/add',async (req,res) => {
const vehicles = new vehicle(req.body);

vehicles.save()
.then(vehicles => {
  res.status(200).json({'vehicles': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});
});

//delete vehicles
  router.get('/vehicle/delete/:id',function(req,res)
  {
    vehicle.remove({ve_reg_no: req.params.id},function(err,vehicle)
    {
      if(err)
        res.json(err);
      else
        res.json('Removed');
    });
  });


//get street
router.get('/street',function(req,res)
{
  street.find(function(err,str)
  {
    if(err)
      console.log(err);
    else
    {
      res.json(str);
    }
  });
});

router.get('/locate',function(req,res)
{
  loc.find(function(err,loce){

    if(err)
      console.log(err);
    else
    {
    res.json(loce);
    }
  });
})


//get street by id
router.get('/street/:id',function(req,res)
{
  street.find({s_accident_id:req.params.id},function(err,str)
  {
    if(err)
      console.log(err);
    else
    {
      res.json(str);
    }
  });
});

router.get('/locate/:id',function(req,res)
{
  street.find({s_accident_id:req.params.id},function(err,str)
    {
      var temp1 = str.pop();
      console.log(temp1);

      loc.find({location:temp1.location},function(err,loce){

        if(err)
          console.log(err);
        else
        {
        res.json(loce);
        }
      });
});
});



//adding street data to database
router.post('/street/add',async (req,res) => {
const streets = new street({
  s_accident_id:req.body.s_accident_id,
  s_no:req.body.s_no,
  s_name:req.body.s_name,
  location:req.body.location
});

const locs = new loc({
  location:req.body.location,
  glat : req.body.glat,
  glong : req.body.glong
});
streets.save()
.then(streets => {
  res.status(200).json({'streets': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});

locs.save()
.then(streets => {
  res.status(200).json({'streets': 'Added aucees'});
})
.catch(err => {
  console.log(err);
  res.status(400).send('Failed');
});


});




//delete streets
  router.get('/street/delete/:id',function(req,res)
  {
    street.deleteOne({s_no: req.params.id},function(err,street)
    {
      if(err)
        res.json(err);
      else
      {
        res.json('Removed');
        var temp=person.pop();
        loc.deleteOne({location:temp.location},function(err,loce){

          if(err)
            console.log(err);
          else
          {
           res.json('Removed');
          }
        });

      }
    });
  });


module.exports = router;
