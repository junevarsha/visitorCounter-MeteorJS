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


























//***************************************************
//
// CountersDB = new Mongo.Collection('CountersDB');
//
// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish("CountersDB", function () {
// 	  // CountersDB.update(
// 	  // 	 	 		    { CounterName: "CurrentUser" },
// 	  // 	 	 		    { $inc: {"CounterValue": 1 } }
// 	  // 	 	 		 )
//     return counters.find();
//   });
// }
//
// if (Meteor.isClient) {
//   // This code only runs on the client
//
//
//   Meteor.subscribe("CountersDB", function(){
// 			console.log(counters.find().fetch());
//
//    });
//
// 	//
// 	//
// 	//
// 	  Meteor.subscribe("CountersDB");
// 	// console.log(CountersDB.find().fetch());
//
// 	// Template.load.onload = function () {
// 	// 	return CountersDB.find().count();
// 	//
// 	// };
//   //
//   // Template.load.onload({
//   //    CountersDB: function () {
//   //      // Show newest tasks at the top
//   // 			 console.log("hi");
//   //      return CountersDB.find().fetch();
//   //    }
//   //  });
//   //
// }