// scripts mainSD_EndUser

Template.mainSD_EndUser.loggedUser = function(){  
  if (Meteor.user()) {
    if(Meteor.user().emails)
       if(Meteor.user().emails.length > 0) {               
          var whois = Meteor.user().emails[0].address;
        }      
    return whois;
  }   
}; 


Template.mainSD_EndUser.events({

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

}); // end - Template.mainSD_EndUser.events


Template.mainSD_EndUser.helpers({
  formatDate : function(date){
    return moment(date).format("111");
  }
});