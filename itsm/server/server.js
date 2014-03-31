if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup    
  });

  //serviceDesk = new Meteor.Collection('serviceDesk');
  /*serviceDesk.allow({
    insert : ownsDocument,
    remove : ownsDocument
  });*/


//  serviceDesk = new Meteor.Collection("serviceDesk");
  Meteor.publish("SDids",function () {
    return serviceDesk.find({},{id:1});
  });

    
}
