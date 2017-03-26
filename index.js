'use strict';

//dependencies
const inputParser = require('./util/input-parser'),
cmdMapper = require('./util/command-mapper'),
ParkingLot = require('./src/ParkingLot'),
fs = require('fs'),
args = process.argv.slice(2);

var handleError = function(err){
  console.log('Error: ', err.message);
  process.exit(0);
};

if(args.length){
  //Input file to be processed in batch. Filename in args[0]
  const lineReader = require('readline').createInterface({
    input: fs.createReadStream(args[0])
  }), outFileData = [], pLot = new ParkingLot();
  lineReader.on('line', function (line) {
    inputParser.parseLine(line, function(err, parsedArgs){
      if(err) handleError();
      cmdMapper.getCommand(parsedArgs.cmd, function(err, cmdFunc){
        if(err || !pLot[cmdFunc]){
          console.log('Invalid option', parsedArgs.cmd);
          process.exit(0);
        }
        outFileData.push(pLot[cmdFunc](parsedArgs.args[0], parsedArgs.args[1]));;
      });
    });
  }).on('close', function(){
    process.stdout.write(outFileData.join('\n'));
  });
}else{
  //Interactive CLI
  const rl = require('readline').createInterface(process.stdin, process.stdout, completer),
  prefix = 'PARKING-LOT > ',
  pLot = new ParkingLot();
  rl.on('line', function(line) {
    inputParser.parseLine(line, function(err, parsedArgs){
      if(err) handleError();
      cmdMapper.getCommand(parsedArgs.cmd, function(err, cmdFunc){
        if(err || typeof pLot[cmdFunc] !== 'function' ){
          console.log('Invalid command');
        }else{
          console.log(pLot[cmdFunc](parsedArgs.args[0], parsedArgs.args[1]));;
        }
      });
    });
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();
  }).on('close', function() {
    console.log('Have a great day!');
    process.exit(0);
  });
  console.log(prefix + 'Welcome to the Parking Lot. Hit tab for help.');
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();
}

//Autocomplete function based on commandMapper
function completer(line) {
  var completions = Object.keys(cmdMapper.cmdMap);
  var hits = completions.filter(function(c) {
    if (c.indexOf(line) == 0) {
      return c;
    }
  });
  return [hits && hits.length ? hits : completions, line];
}
