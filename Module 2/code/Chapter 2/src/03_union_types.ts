namespace chapter02.union_types {
  
  class Command {
    command : string;
    args : string[];
  }
  
  function run(command : Command | Command[]) {
    // ...
  }
  
  var command1 = new Command();
  var command2 = new Command();
  var commands = [ command1, command2 ];
  
  run(command1);
  run(commands);
  
}