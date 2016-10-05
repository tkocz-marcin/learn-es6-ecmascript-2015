var deliveryBoy ={
  name: "John",
  
  handleMessage: function (message,handler){
  handler(message);
  },
  
  receive: function() {
    this.handleMessage("Hello, ", message => console.log(message + this.name))
  }
}

deliveryBoy.receive();

// var deliveryBoy1 = {
//   name: "Jan",
//   handleMessage: function (message, handler) {
//     handler(message);
//   },
  
//   receive: function() {
//     var that = this;
//     that.handleMessage("Hello, ", function(message) {
//       return console.error(message + that.name);
//     })
//   }
// }

// deliveryBoy1.receive();