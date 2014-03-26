serviceDesk = new Meteor.Collection("serviceDesk");


if (Meteor.isClient) {
  


  Template.tickets.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  
  
  Template.newTicket.events({
    'click a' : function(e,t){
      
      var sdId = $("#sdId").val();
      var sdCustomer = $("#sdCustomer").val();
      var sdStatus = $("#sdStatus").val();
      var sdCategory = $("#sdCategory").val();
      var sdSubCategory = $("#sdSubCategory").val();
      var sdOperator = $("#sdOperator").val();
      var sdItems = [$("#sdItems").val()];
      
      console.log(sdId);
      var newTicket = {};
      newTicket = {
              id : sdId,
              openDate : new Date(),  
              customer : sdCustomer,              
              status : sdStatus,
              category : sdCategory,
              subcategory : sdSubCategory,
              operator : sdOperator,
              configItems : sdItems
              };
      
      console.log(newTicket);
      serviceDesk.insert(newTicket);
      
      alert("Ticket Created !¡");
      $('#popup').fadeOut('slow');
      $('.popup-overlay').fadeOut('slow');
       
    }
  });
  
  Template.tickets.listof = function()
  {
    return serviceDesk.find();
  };
  

  
  
}




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
    
    
  });
}
