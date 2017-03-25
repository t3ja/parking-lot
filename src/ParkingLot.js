'use strict';

const Car = require('./Car'),
      Slot = require('./Slot');

function ParkingLot(slots){
  this.totalSlots = slots;
  var i = 1;
  this.slotMatrix = {};
  while(i <= slots){
    this.slotMatrix[i] = 0;
    i++;
  }
}

ParkingLot.prototype.carEntry = function (car) {
  var i, slotFound = false;
  for(i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(!this.slotMatrix[i]){
      //Assign this slot to the car
      this.slotMatrix[i] = car;
      slotFound = true;
      break;
    }
  }
  return slotFound ? 'Allocated slot number ' + i : 'Sorry, parking lot is full';
};

ParkingLot.prototype.carExit = function (slot) {
  if(!this.slotMatrix[slot]) return 'Not found';
  this.slotMatrix[slot] = 0;
  return 'Slot number ' + slot + ' is free';
};

ParkingLot.prototype.getCarsFromColor = function (color) {
  var carNumList = [];
  for(var i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i].color === color.toUpperCase()){
      carNumList.push(this.slotMatrix[i].regNo);
    }
  }
  return carNumList.length ? carNumList.join(', ') : 'Not found';
};

ParkingLot.prototype.getSlotFromCar = function (carRegNo) {
  var i, slotFound = false;
  for(i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i].regNo === carRegNo){
      slotFound = true;
      break;
    }
  }
  return slotFound ? i : 'Not found';
};

ParkingLot.prototype.getSlotsFromColor = function (color) {
  var carSlotList = [];
  for(var i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i].color === color.toUpperCase()){
      carSlotList.push(i);
    }
  }
  return carSlotList.length ? carSlotList.join(', ') : 'Not found';
};

module.exports = ParkingLot;
