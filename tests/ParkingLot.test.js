"use strict";
//Module dependencies
const expect = require('chai').expect;


const Car = require('../src/Car'),
Slot = require('../src/Slot'),
ParkingLot = require('../src/ParkingLot');

var pLot, car1, car2, car3, car4, car5, car6;
describe('Parking Lot testing', function () {
  before(function() {
    pLot = new ParkingLot(5);
    car1 = new Car('KA-01-1234', 'BLACK');
    car2 = new Car('KA-02-1234', 'WHITE');
    car3 = new Car('KA-03-1234', 'GREY');
    car4 = new Car('KA-04-1234', 'BLUE');
    car5 = new Car('KA-05-1234', 'WHITE');
    car6 = new Car('KA-06-1234', 'BLUE');
  });

  describe('Create New Parking Lot with predefined slots', function () {
    it('Should create a new ParkingLot instance with 5 slots', function () {
      var resp = pLot.totalSlots;
      expect(resp).to.equal(5);
    });
  });

  describe('Assign slot to car1', function () {
    it('Should assign first slot to the input car', function () {
      var resp = pLot.carEntry(car1);
      expect(resp).to.equal('Allocated slot number 1');
    });
  });

  describe('Assign slot to car2', function () {
    it('Should assign second slot to the input car', function () {
      var resp = pLot.carEntry(car2);
      expect(resp).to.equal('Allocated slot number 2');
    });
  });

  describe('Exit car from Parking Lot', function () {
    it('Should free the first slot from Parking Lot', function () {
      var resp = pLot.carExit(1);
      expect(resp).to.equal('Slot number 1 is free')
    });
  });

  describe('Assign slot to car3', function () {
    it('Should assign first slot to the input car', function () {
      var resp = pLot.carEntry(car3);
      expect(resp).to.equal('Allocated slot number 1');
    });
  });

  describe('Overload ParkingLot', function () {
    it('Should return error message since the parking lot is already full', function () {
      pLot.carEntry(car4);
      pLot.carEntry(car5);
      pLot.carEntry(car6);
      var resp = pLot.carEntry(car1);
      expect(resp).to.equal('Sorry, parking lot is full');
    });
  });

  describe('Get all cars of color', function () {
    it('Should return all cars of matching color with given color', function () {
      var resp = pLot.getCarsFromColor('WHITE');
      expect(resp).to.equal('KA-02-1234, KA-05-1234');
    });
  });

  describe('Get slot number of car', function () {
    it('Should return the slot number for given car', function () {
      var resp = pLot.getSlotFromCar('KA-03-1234');
      expect(resp).to.equal(1);
    });
  });

  describe('Get slot number of car not in parking lot', function () {
    it('Should return error message if car not found', function () {
      var resp = pLot.getSlotFromCar('GA-03-1234');
      expect(resp).to.equal('Not found');
    });
  });

  describe('Get all slots of color', function () {
    it('Should return all slots of matching color with given color', function () {
      var resp = pLot.getSlotsFromColor('BLUE');
      expect(resp).to.equal('3, 5');
    });
  });

});
