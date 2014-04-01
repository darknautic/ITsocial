//Router.before(mustBeSignedIn, {except: ['login', 'signup', 'forgotPassword']});
//role = new Meteor.Collection('users');

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});


Router.map(function() {

  this.route('main', {
                  path: '/',
                  template : 'main',
                  onBeforeAction : function(){
                      if(!Meteor.user()){
                        console.log('from onBeforeAction function at main route,if, render login');
                        //console.log(Meteor.user());
                        
                         //window.location.replace("/");
                        this.render('login');
                        //this.stop();
                      }
                      else{
                        console.log('from onBeforeAction function at main route,else, render main');
                        this.render('main');
                                                
                      }
                  },
                  onAfterAction : function(){
                    
                    var circle = circles.find({'userId' : Meteor.userId()},{role : true}).fetch()[0];
                    var role = "";

                    if(!Meteor.user()){ 
                      console.log('from onAfterAction function at main route,if, render login');
                      this.render('login'); 
                    }
                    else { 
                      console.log('from onAfterAction function at main route,else, render role options');
                      if(circle.role.length > 0){
                          role = circle.role[0];
                          console.log("userId :" + Meteor.userId());
                          console.log("role :" + role);
                          if(role == "SD-EndUser"){
                            console.log('view : mainSD_EndUser');
                            this.render('mainSD_EndUser');
                          }
                          else if(role == "SD-Analyst"){
                            console.log('view : mainSD_Analyst');
                            this.render('mainSD_Analyst');

                          }
                          else{
                            console.log('view : Not Defined');
                          }
                        
                      }

                    } //else
                  }
  });

  this.route('signUp');                  
  this.route('about');
  
  this.route('login',{
                  path : '/login',
                  template : 'login',
                  onBeforeAction : function(){
                    
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
                  onAfterAction: function () {
                    // This is called when you navigate to a new route
                    //Session.set('loggedUser', null);
                    //var role = circles.find({'userId' : Meteor.userId()},{role : true}).fetch()[0].role[0];
                    var circle = circles.find({'userId' : Meteor.userId()},{role : true}).fetch()[0];
                    var role = "";
                    
                    if (! Meteor.user()){
                      console.log('from onAfterAction function at login route,if, render login');
                      this.render('login');
                    }
                    else{
                      console.log('from onAfterAction function at login route,else, render main');                      
                      if(circle.role.length > 0){
                          role = circle.role[0];
                          console.log("userId :" + Meteor.userId());
                          console.log("role :" + role);
                          if(role == "SD-EndUser"){
                            console.log('view : mainSD_EndUser');
                            this.render('mainSD_EndUser');
                          }
                          else if(role == "SD-Analyst"){
                            console.log('view : mainSD_Analyst');
                            this.render('mainSD_Analyst');

                          }
                          else{
                            console.log('view : Not Defined');
                          }
                        
                      }
                      
                      

                      //this.render('main');
                    } //else at onAfterAction at login route
                    
                   }

  });
  

  
  this.route('SDUpdateTicket',{
                    path : '/sd/:_id',
                    template : 'SDUpdateTicket',
                    data : function()  {
                      return serviceDesk.findOne({_id : this.params._id});
                    }
  });

  
  this.route('notFound', {
                 path: '*'
  });

}); //Router.map



