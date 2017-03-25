'use strict';

const Car = require('./Car'),
      Slot = require('./Slot');

function ParkingLot(slots){
  this.totalSlots = slots;
  var i = 1;
  this.slotMatrix = {};
  while(i !== slots){
    this.slotMatrix[i] = 0;
    i++;
  }
}

ParkingLot.prototype.carEntry = function (car) {
  var i;
  for(i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(!this.slotMatrix[i]){
      //Assign this slot to the car
      this.slotMatrix[i] = car;
      break;
    }
  }
  return 'Allocated slot number ' + i;
};

ParkingLot.prototype.carExit = function (slot) {
  this.slotMatrix[slot] = 0;
  return 'Slot number ' + slot + ' is free';
};

ParkingLot.prototype.getCarsFromColor = function (color) {

};

ParkingLot.prototype.getCarFromSlot = function (slot) {

};

ParkingLot.prototype.getSlotsFromColor = function (color) {

};

module.exports = ParkingLot;
