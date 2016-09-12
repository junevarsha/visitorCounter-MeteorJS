counters = new Mongo.Collection('counters');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("counters", function () {
  return counters.find();
  });
}
if (Meteor.isClient) {
  // This code only runs on the client
	Meteor.subscribe("counters", function(){
		console.log(counters.find().fetch());
		counters.findAndModify({
			query: {"CounterName":"CurrentUser"},
			update: {$inc: {"CounterValue":1}},
			new : true
			});					
		}); 
		Template.visitor.helpers({
		 'onVisit': function (){ 
 		     return "You entered this webpage " +counters.find().fetch()[0].CounterValue + " times";
 	 		}
		});  
}
