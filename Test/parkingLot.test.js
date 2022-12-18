const request = require("supertest");
const app = require('../index');

const parkingLotController= require('../controller/parkingLot')

describe(("parking lot testing"),()=>{
    
    test('create parking lot ',()=>{
        parkingLotController.createParkingLot(6);
        let parkingAvailableLot= parkingLotController.parkingAvailableLot;
        expect(parkingAvailableLot.length).toBe(6);
        expect(parkingAvailableLot).toContain(5);
        expect(parkingAvailableLot[0]).toBe(1);
    })

    test('park a vahical ',()=>{
        parkingLotController.parkVahical('KA-01-HH-1234');
        let parkingAvailableLot= parkingLotController.parkingAvailableLot;
        let vahicals= parkingLotController.vahicals;
        expect(parkingAvailableLot.length).toBe(5);
        expect(parkingAvailableLot).not.toEqual(expect.arrayContaining([0]));
        expect(parkingAvailableLot[0]).toBe(2);
        expect(vahicals).toEqual(expect.arrayContaining([
            expect.objectContaining({
                registrationNumber:'KA-01-HH-1234',
                lotNumber:1
            })
        ]))
    })

    test('unpark a vahical ',()=>{
        parkingLotController.unparkVahical('KA-01-HH-1234',4);
        let parkingAvailableLot= parkingLotController.parkingAvailableLot;
        let vahicals= parkingLotController.vahicals;
        expect(parkingAvailableLot.length).toBe(6);
        expect(parkingAvailableLot[0]).toBe(1);
        expect(vahicals).toEqual(expect.arrayContaining([]));
    })

    test('parkinglot status ',()=>{
        parkingLotController.getStatus();
        let parkingAvailableLot= parkingLotController.parkingAvailableLot;
        let vahicals= parkingLotController.vahicals;
        expect(parkingAvailableLot.length).toBe(6);
        expect(parkingAvailableLot[0]).toBe(1);
        expect(vahicals).toEqual(expect.arrayContaining([]));
    })
})