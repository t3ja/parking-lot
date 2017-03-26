'use strict';

exports.parseLine = function(line, callback){
  var words, parsedArgs, err;
  words = line.split(' ');
  var parsedArgs = {
    cmd: words.shift(),
    args: words
  };
  return ((parsedArgs.cmd && parsedArgs.args) ? callback(null, parsedArgs) : callback({message: 'Invalid input'}, null));
};
