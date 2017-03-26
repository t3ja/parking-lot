"use strict";
//Module dependencies
const expect = require('chai').expect;


const Car = require('../src/Car'),
ParkingLot = require('../src/ParkingLot');

var pLot, regNos, colors;
describe('Parking Lot testing', function () {
  before(function() {
    pLot = new ParkingLot();
    pLot.create(5);
    regNos = [
      'KA-01-1234',
      'KA-02-1234',
      'KA-03-1234',
      'KA-04-1234',
      'KA-05-1234',
      'KA-06-1234'
    ];
    colors = [
      'BLACK',
      'WHITE',
      'GREY',
      'BLUE',
      'WHITE',
      'BLUE'
    ];
  });

  describe('Create New Parking Lot with predefined slots', function () {
    it('Should create a new ParkingLot instance with 5 slots and return the message', function () {
      var resp = pLot.create(5);
      expect(resp).to.equal('Created a parking lot with 5 slots');
    });
  });

  describe('Assign slot to car1', function () {
    it('Should assign first slot to the input car', function () {
      var resp = pLot.carEntry(regNos[0], colors[0]);
      expect(resp).to.equal('Allocated slot number: 1');
    });
  });

  describe('Assign slot to car2', function () {
    it('Should assign second slot to the input car', function () {
      var resp = pLot.carEntry(regNos[1], colors[1]);
      expect(resp).to.equal('Allocated slot number: 2');
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
      var resp = pLot.carEntry(regNos[2], colors[2]);
      expect(resp).to.equal('Allocated slot number: 1');
    });
  });

  describe('Overload ParkingLot', function () {
    it('Should return error message since the parking lot is already full', function () {
      pLot.carEntry(regNos[3], colors[3]);
      pLot.carEntry(regNos[4], colors[4]);
      pLot.carEntry(regNos[5], colors[5]);
      var resp = pLot.carEntry(regNos[0], colors[0]);
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
