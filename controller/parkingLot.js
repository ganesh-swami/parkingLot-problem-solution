const fs = require("fs");


class ParkingLot {
    
    constructor(){
        this.parkingAvailableLot=[];
        this.vahicals=[];
        this.parkingSize=0;
        
    }

    handleAll(){


        try{
            let inputFilePath=__dirname+'/../input.txt';
            if(fs.existsSync(inputFilePath)){
                let lineReader = require('readline').createInterface({
                    input: fs.createReadStream(inputFilePath)
                });
                let This=this; 
                lineReader.on('line', function (line) {
                    // console.log('1111 ',line)
                    try{
                        This.processInputCommand(line);
                    }
                    catch(e){
                        console.log('Error ',e);
                        
                    }
                });
                
            }
            else{
                console.log('input file not found'); 
            }
        }
        catch(e){
            console.log('Error ',e);
        }

    }

    createParkingLot(size){
        // console.log('create parking lot size of ',size)
        
        this.parkingSize=parseInt(size)
        for (let i = 1; i <= size; i++) {
            this.parkingAvailableLot.push(i);
        }
        console.log('Created parking lot with '+size+' slots');
    }

    parkVahical(vahicalNumber){

        if(this.parkingSize===0){
            console.log('parkinglot is not created')
        }
        else if(this.parkingSize===this.vahicals.length){
            console.log('Sorry, parking lot is full')
        }
        else{
            let vahical={
                registrationNumber:vahicalNumber,
                lotNumber:this.parkingAvailableLot[0]
            }
            this.vahicals.push(vahical);
            console.log('Allocated slot number: '+this.parkingAvailableLot[0]);
            this.parkingAvailableLot.shift(); // remove first element
            
        }
    }

    unparkVahical(vahicalNumber,hours){
        if(this.parkingSize===0){
            console.log( 'parkinglot is not created')
        }
        else if(this.vahicals.length===0){
            console.log( 'parkinglot is empty')
        }
        else{
            let foundVahical=false;
            for (let i = 0; i < this.vahicals.length; i++) {
                const vahical = this.vahicals[i];
                if(vahical.registrationNumber===vahicalNumber){
                    foundVahical=true;
                    // remove from array
                    this.vahicals.splice(i,1);
                    // add this lot to
                    this.parkingAvailableLot.push(vahical.lotNumber);
                    this.parkingAvailableLot.sort(); 
                    console.log('Registration Number '+vahicalNumber+' from Slot '+vahical.lotNumber+' has left with Charge '+hours*10)
                    break;
                }
            }

            if(!foundVahical){
                console.log( 'Registration Number '+vahicalNumber+' not found');
            }

        }
    }

    getStatus(){
        console.log('Slot No. Registration No.');
        
        this.vahicals.sort((a,b) => a.lotNumber - b.lotNumber);
        this.vahicals.map((vahical)=>{
            console.log(vahical.lotNumber+'     '+vahical.registrationNumber); 
        })
    }

    processInputCommand(command){
        let commandData = command.split(" ");
        
        switch (commandData[0]) {
            case 'create':
                this.createParkingLot(commandData[1]);
                break;
            case 'park':
                this.parkVahical(commandData[1]);
                break;
            case 'leave':
                this.unparkVahical(commandData[1],commandData[2]);
                break;
            case 'status':
                this.getStatus();
                break;
            default:
                break;
        }

    }
}

module.exports=new ParkingLot();