//                                   Cross the Bridge
// Problem Statement
// While constructing a Building, a worker wants to move the boxes from warehouse to
// constructing site. Crossing the bodge in the path, the boxes have different weight.
// Each box has a weight in multiples of 25 (eg: 25/5O/75 or 100).

//Worker can carry multiple boxes at a time (given by time input parameter "carryCapacity") & can
// carry a maximum combined weight given by thc input parameter •maxWeight•
// For example, if carryCapacity is 3. then the worker should be able to move 3 boxes in a trip.
// However. if the max Weight value is 200, then thc worker cannot carry a combined box weight of
// more than 200.
// Given an array int[] box Weight, int carryCapacity, & int maxWeight, return the minimum
// number of trips necessary to move all of the boxes.
// Definition
// Class: CrossTheBridge
// Method: leastNumber
// Parameters: int[] box Weight, int carryCapacity, int maxWeight
// Returns: int - Minimum number of trips
// Method signature: public int leastNumber(int[] boxWeight, int carryCapacity, int maxweight)
// Constraints
//  box Weight will contain between 1 and 50 elements, inclusive.
//  weights will be in multiples of 25 and <= 100. {25, 50, 75, 100}
// carryCapacity will be between I and 5, inclusive.
//  maxWeight <= 350



// Examples
// Sr   |       boxWeight[]                                 | carryCapacity     | max weight    | Output
// 1    |       [50, 100. 25. 75. 50]                       |   2               |   150         |    3
// 2    |       [25, 25, 50, 25, 75, 100]                   |   3               |   200         |   2
// 3    |       [50, 50, 100, 100, so, 100, 50, 50,50, 50]  |   4               |   200         |   3
// 4    |       [50,50]                                     |   3               |   100         |   1

 class CrossTheBridge {
        constructor(arr, maxCapacity, maxWeight) {
          this.arr = arr;
          this.maxCapacity = maxCapacity;
          this.maxWeight = maxWeight;
        }
        leastNumber = () => {
          let tmpWeight = 0;
          let tripCount = 0;
          let count = 1;
          for (let index = 0; index < this.arr.length; index++) {
            if (tmpWeight + this.arr[index] <= this.maxWeight) {
              if (count == this.maxCapacity) {
                tripCount++;
                count = 0;
              }
            }
            count++;
          }
          if (count > 1) {
            tripCount++;
          }
          return tripCount;
        };
      }
      let arr_1 = [50, 100, 25, 75, 50];
      let maxCapacity_1 = 2;
      let maxWeight_1 = 150;
      let testCase_1 = new CrossTheBridge(arr_1, maxCapacity_1, maxWeight_1);
      console.log(`test case 1: ${testCase_1.leastNumber()}`);

      let arr_2 = [25, 25, 50, 25, 75, 100];
      let maxCapacity_2 = 3;
      let maxWeight_2 = 250;
      let testCase_2 = new CrossTheBridge(arr_2, maxCapacity_2, maxWeight_2);
      console.log(`test case 2: ${testCase_2.leastNumber()}`);

      let arr_3 = [50, 50, 100, 100, 50, 100, 50, 50, 50];
      let maxCapacity_3 = 4;
      let maxWeight_3 = 200;
      let testCase_3 = new CrossTheBridge(arr_3, maxCapacity_3, maxWeight_3);
      console.log(`test case 3: ${testCase_3.leastNumber()}`);

      let arr_4 = [50, 50];
      let maxCapacity_4 = 3;
      let maxWeight_4 = 100;
      testCase_4 = new CrossTheBridge(arr_4, maxCapacity_4, maxWeight_4);
      console.log(`test case 4: ${testCase_4.leastNumber()}`);