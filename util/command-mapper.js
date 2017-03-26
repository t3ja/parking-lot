'use strict';

const cmdMap = {
  create_parking_lot : 'create',
  park : 'carEntry',
  leave : 'carExit',
  status : 'getStatus',
  registration_numbers_for_cars_with_colour : 'getCarsFromColor',
  slot_numbers_for_cars_with_colour : 'getSlotsFromColor',
  slot_number_for_registration_number : 'getSlotFromCar'
};

exports.getCommand = function(cmd, callback){
  if(!cmdMap[cmd]) return callback({message: 'Invalid input'}, null);
  return callback(null, cmdMap[cmd]);
};

exports.cmdMap = cmdMap;
