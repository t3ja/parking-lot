'use strict';

const Car = require('./Car');

function ParkingLot(){
  this.totalSlots, this.slotMatrix = {};
}

//Create New ParkingLot
ParkingLot.prototype.create = function(slots){
  if(!slots || slots < 0) return 'Invalid number of slots';
  this.totalSlots = slots;
  var i = 1;
  this.slotMatrix = {};
  while(i <= slots){
    this.slotMatrix[i] = 0;
    i++;
  }
  return 'Created a parking lot with ' + slots + ' slots';
}

//Park a given car
ParkingLot.prototype.carEntry = function (regNo, color) {
  if(!this.totalSlots) return 'Create the Parking Lot first'
  var i, slotFound = false;
  var car = new Car(regNo, color);
  for(i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(!this.slotMatrix[i]){
      //Assign this slot to the car
      this.slotMatrix[i] = car;
      slotFound = true;
      break;
    }
  }
  return slotFound ? 'Allocated slot number: ' + i : 'Sorry, parking lot is full';
};

//Exit a given car
ParkingLot.prototype.carExit = function (slot) {
  if(!this.slotMatrix[slot]) return 'Not found';
  this.slotMatrix[slot] = 0;
  return 'Slot number ' + slot + ' is free';
};

//Get current status of ParkingLot
ParkingLot.prototype.getStatus = function () {
  var statusString = 'Slot No. \tRegistration No \tColour';
  for(var i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i]){
      statusString += '\n' + i + '\t\t' + this.slotMatrix[i].regNo + '\t\t' + this.slotMatrix[i].color;
    }
  }
  return statusString;
};

//Get cars of given color
ParkingLot.prototype.getCarsFromColor = function (color) {
  var carNumList = [];
  for(var i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i] && this.slotMatrix[i].color.toUpperCase() === color.toUpperCase()){
      carNumList.push(this.slotMatrix[i].regNo);
    }
  }
  return carNumList.length ? carNumList.join(', ') : 'Not found';
};

//Get slot of given car
ParkingLot.prototype.getSlotFromCar = function (carRegNo) {
  var i, slotFound = false;
  for(i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i] && this.slotMatrix[i].regNo === carRegNo){
      slotFound = true;
      break;
    }
  }
  return slotFound ? i : 'Not found';
};

//Get slots of given color
ParkingLot.prototype.getSlotsFromColor = function (color) {
  var carSlotList = [];
  for(var i = 1; i <= Object.keys(this.slotMatrix).length; i++){
    if(this.slotMatrix[i] && this.slotMatrix[i].color.toUpperCase() === color.toUpperCase()){
      carSlotList.push(i);
    }
  }
  return carSlotList.length ? carSlotList.join(', ') : 'Not found';
};

module.exports = ParkingLot;
