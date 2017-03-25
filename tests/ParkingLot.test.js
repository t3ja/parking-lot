"use strict";
//Module dependencies
const expect = require('chai').expect;


const Car = require('../src/Car'),
      Slot = require('../src/Slot'),
      ParkingLot = require('../src/ParkingLot');

var pLot, car1, car2, car3, car4;
describe('Parking Lot testing', function () {
  before(function() {
		pLot = new ParkingLot(5);
    car1 = new Car('KA-01-1234', 'BLACK');
    car2 = new Car('KA-02-1234', 'WHITE');
    car2 = new Car('KA-03-1234', 'WHITE');
    car2 = new Car('KA-04-1234', 'WHITE');
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

	describe('Get all cars of color', function () {
		it('Should return all cars of matching color with given color', function (done) {
      done({message: "Sample Error"});
		});
	});

	describe('Get slot number of car', function () {
		it('Should return the slot number for given car', function (done) {
      done({message: "Sample Error"});
		});
	});

  describe('Get all slots of color', function () {
		it('Should return all slots of matching color with given color', function (done) {
      done({message: "Sample Error"});
		});
	});

});
