# Parking Lot

## Solution

## Commands

* `git clone` - clone the repository
* `npm install` - install dependency packages
* `npm test` -> Run the npm test cases
* `npm start` -> Run the program


## Problem Statement

I own a parking lot that can hold up to n cars at any given point in time. Each slot is given a number starting at 1 
increasing with increasing distance from the entry point in steps of one. I want to create an automated ticketing system
that allows my customers to use my parking lot without human intervention.

When a car enters my parking lot, I want to have a ticket issued to the driver. The ticket issuing process includes us 
documenting the registration number (number plate) and allocating an available parking slot to the car before actually 
handing over the ticket to the driver. We assume that our customers are nice enough to always park in the slots allocated 
to them. The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns 
the ticket with the time the car was parked in the lot, which then marks the slot they were using as being available. 
Total parking charge should be calculated as per the parking time. Charge applicable is $10 for the first 2 hours and 
$10 for every additional hour.

We interact with the system via a simple set of commands which produce a specific output. Please take a look at the 
example below, which includes all the commands you need to support - they're self-explanatory. The system should accept
a filename as a parameter at the command prompt and read the commands from that file.

## Commands

* `create [size]` - Creates parking lot of size n
* `park [car-number]` - Parks a car
* `leave [car-number] [hours]` -> Removes (unpark) a car
* `status` -> Prints status of the parking lot

## Examples

Input (content of file)

```text
create 6
park KA-01-HH-1234
park KA-01-HH-9999
park KA-01-BB-0001
park KA-01-HH-7777
park KA-01-HH-2701
park KA-01-HH-3141
leave KA-01-HH-3141 4
status
park KA-01-P-333
park DL-12-AA-9999
leave KA-01-HH-1234 4
leave KA-01-BB-0001 6
leave DL-12-AA-9999 2
park KA-09-HH-0987
park CA-09-IO-1111
park KA-09-HH-0123
status
```

Output (from console)

```text
Created parking lot with 10 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
Allocated slot number: 6
Registration Number KA-01-HH-3141 from Slot 6 has left with Charge 30
Slot No. Registration No.
1        KA-01-HH-1234
2        KA-01-HH-9999
3        KA-01-BB-0001
4        KA-01-HH-7777
5        KA-01-HH-2701
Allocated slot number: 6
Sorry, parking lot is full
Registration Number KA-01-HH-1234 from Slot 1 has left with Charge 30
Registration Number KA-01-BB-0001 from Slot 3 has left with Charge 50
Registration Number DL-12-AA-9999 not found
Allocated slot number: 1
Allocated slot number: 3
Sorry, parking lot is full
Slot No. Registration No.
1        KA-09-HH-0987
2        KA-01-HH-9999
3        CA-09-IO-1111
4        KA-01-HH-7777
5        KA-01-HH-2701
6        KA-01-P-333




