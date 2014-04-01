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
                      /* --- succesfully login  ---*/
                    //console.log(Meteor.user());
                    //console.log("Info : id " + Meteor.userId());
                    //Session.set('SessionID',Meteor.userId());
                    //Session.set('loggedUser',Meteor.user().emails[0].address);
                    console.log("Info : Successfully logged");

              
                }      

            });  
  
        }

    });  //end -login events end
  

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
    
  }); // end - signUp events end
  
  
  
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
          $("#navBarHeader").empty();
        }

      });
          
    }


  }); // end - Template.main.events

  
    Template.main.loggedUser = function(){
      
      //var whois = "Sign In";
      //console.log("Meteor.user() = " + Meteor.user());
      //console.log(Meteor.user());
      if (Meteor.user()) {
        if(Meteor.user().emails)
           if(Meteor.user().emails.length > 0) { 
              //console.log("bigger than 0");
              var whois = Meteor.user().emails[0].address;
            }
        //var whois = Meteor.user().emails[0].address;
        //var whois = Meteor.users.find({_id : Meteor.userId()},{}).fetch()[0].emails[0].address;
        return whois;
      }
      
      //console.log('main.loggeUser varaible :' + whois);                  
      //return whois;
      
    }; // end - Template.main.loggedUser 






  

} // end - isClient

