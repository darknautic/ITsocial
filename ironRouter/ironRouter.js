//Router.before(mustBeSignedIn, {except: ['login', 'signup', 'forgotPassword']});

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});


Router.map(function() {
  //this.route('main', {
  //                path: '/main',
  //                template : 'main',
  //                before : function(){
  //                    if(!Meteor.user()){
  //                      this.render('login');
  //                      this.stop();
  //                    }
  //                },
  //                action: function () {                  
  //                  this.render();
  //                }
  //});
  //
  this.route('main', {
                  path: '/',
                  template : 'main',
                  before : function(){
                      if(!Meteor.user()){
                        console.log('from before function');
                        console.log(Meteor.user());
                        console.log('from before function fin.....');
                         //window.location.replace("/");
                        this.render('login');
                        this.stop();
                      }
                      else{
                        this.render('main');
                        console.log('yyy - render main');
                      }
                  },
                  action : function(){
                    this.render();
                  }
  });

  this.route('signUp');                  
  this.route('about');
  
  this.route('login',{
                  path : '/login',
                  template : 'login',
                  before : function(){
                    
                    if (! Meteor.user()){
                        if (Meteor.loggingIn())
                            this.render('loading');
                        else
                            this.render('accessDenied');
                        
                        //this.stop();
                    }
                    //else{
                    //  console.log('xxx- logged');                 
                    //    this.render('main');
                    //}
                  },
                  after: function () {
                    // This is called when you navigate to a new route
                    //Session.set('loggedUser', null);
                    if (! Meteor.user())
                      this.render('login');
                    else
                     this.render('main');
                    
                   }

  });
  
  this.route('notFound', {
                 path: '*'
                });
});





if (Meteor.isClient) {


  
  
  Template.login.events({

  
  'submit #loginForm' : function(evt){
  //'click input#signIn' : function(e, t){
  //'click input[type=submit]': function(e, t){
     
    evt.preventDefault();
    
    //verify if passwdBox2 exists
    //if ($("#passwdBox2").length > 0) { }
    
    
    var email = $('#emailBox').val();
    var passwd= $('#passwdBox').val();

    
    // Here verify inputs  <-------------
    //check(email, Number);
   
    
    
    Meteor.loginWithPassword(email, passwd, function(err){
      if (err) {
        
        console.log("Error :  Login attempt has failed.");
        console.log(err.reason);
        alert("Failed : User or Password Incorrect !¡");
        //window.location.replace("/login");
        
        
      }
             
      else {

        console.log(Meteor.user());
        //console.log("Info : id " + Meteor.userId());
        
        // Hash Value
        /*var current_date = (new Date()).valueOf().toString();
          var random = Math.random().toString();
          console.log(crypto.createHash('sha1').update(current_date + random).digest('hex'));
          */
                          
       
        //alert("Continue ?");
        //window.location = "/main";
        //Session.set('SessionID',Meteor.userId());
        //Session.set('loggedUser',Meteor.user().emails[0].address);
        console.log("Info : Successfully logged");
        //alert("user logged :" + Meteor.user().emails[0].address);
        //window.location.href = "/main";
        //alert(Session.get('loggedUser'));
        //Meteor.Router.page("main");
        //return Router.routes.main.path();
                          

      }
      

    });
  
  
  }
  
  //'submit #loginForm': function (evt) {
  //    //evt.preventDefault();
  //    console.log('atrapando submit form');
  //    //alert("ok");
  // }

   
});  //login events end
  

Template.signUp.events({
  'submit #signUpForm': function (e, t){
      
      e.preventDefault();
      
      var email = $('#emailBox').val();
      var passwd= $('#passwdBox').val();
      var passwd2= $('#passwd2Box').val();
      
      //verify inputs <--------------------------
      
      if (passwd != passwd2) {      
        alert("Password Does Not Match !¡");
      }
      else{
        //create account
        Accounts.createUser({email: email, password : passwd}, function(err){
          if (err) {
            // Inform the user that account creation failed
            console.log("Error : Creation Failed");
            console.log(err);
            alert(err.reason);
            alert("Failed : Verify your data !¡");
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
            console.log("Info : Account Creation Successful");
            console.log(Meteor.userId);
            alert("Your account has been created successfully !¡");
            //window.location.replace("/"); //does not put the originating page in the session history.
            window.location.href = "/";
            
          }

        });
        
        
      }
      
      return false;
  }
  
}); //signUp events end
  
  
  
  Template.main.events({
  
    'click a#bye' : function(){
      //alert('bye logout');      
      //console.log('click on bye');
      
      Meteor.logout(function(err){
        if (err) {
          console.log("Err - signOut Process");          
          console.log(err);          
          //alert('Err - signOut Process');
        }
        else{
          //Session.set('loggedUser',null);
          
          //delete Session.keys['loggedUser'];
          //window.location.replace("/");
          //console.log("Ok - signoOut successfully");
          //alert('Ok - signoOut successfully');
        }

      });
          
    }


  });
  
    Template.main.loggedUser = function(){
      
      var whois = "Sign In";
      console.log("Meteor.user() = " + Meteor.user());
      console.log(Meteor.user());
      if (Meteor.user()) {
        whois = Meteor.user().emails[0].address;
      }
      
      console.log('main.loggeUser varaible :' + whois);                  
      return whois;
      
    };
  

}




