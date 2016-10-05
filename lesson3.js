let receive = (complete = () => console.log("complete")) => complete()
receive();

function receive1(complete = function() {
  console.log("complete!")
}){
  complete();
}
receive1();