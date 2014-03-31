serviceDesk = new Meteor.Collection("serviceDesk");


if (Meteor.isClient) {
  


  Template.tickets.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  
  
  Template.serviceDesk.events({
    'click input#newTicket' : function () {
      console.log('click botton new');
      $('#popup').fadeIn('slow');
      $('.popup-overlay').fadeIn('slow');
      $('.popup-overlay').height($(window).height());
      
    },

    'click a#close' : function () {
      console.log('click botton close');
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
    }
    
  });




  Template.newTicket.events({
    'click a' : function(e,t){

      
      var sdId = $("#sdId").val();
      var sdTitle = $("#sdTitle").val();
      var sdDescription = $("#sdDescription").text();      
      var sdCustomer = $("#sdCustomer").val();
      var sdRequestor = $("#sdRequestor").val();      
      var sdItems = [$("#sdItems").val()];      
      var sdStatus = $("#sdStatus").val();
      var sdCategory = $("#sdCategory").val();
      var sdSubCategory = $("#sdSubCategory").val();
      var sdAnalyst = $("#sdAnalyst").val();
      
      
      console.log(sdId);
      var newTicket = {};
      newTicket = {
              id : sdId,
              openDate : new Date(),
              title : sdTitle,
              description : sdDescription,
              customer : sdCustomer,
              requestor : sdRequestor,
              configItems : sdItems,
              status : "Open",
              category : sdCategory,
              subcategory : sdSubCategory,
              analyst : sdAnalyst              
              };
      
      console.log(newTicket);
      serviceDesk.insert(newTicket);
      
      alert("Ticket Created !¡");
      $('#popup').fadeOut('slow');
      $('.popup-overlay').fadeOut('slow');
       
    }
  });
  
  Template.tickets.events({
    'click a.ticketLink' : function (e, t){
      console.log(e.target.id);
    }
  });

  Template.tickets.listof = function(){
    return serviceDesk.find({},{sort: {'openDate': -1}});

  };
  
  Template.analystPool.listof = function(){
    return serviceDesk.find({},{sort: {'openDate': -1}});

  };



function getTicketId (a,b){

}




}  //is Client





