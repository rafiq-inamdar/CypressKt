import { getConstantValue } from "typescript";

let array1: number[] = [1, 2, 3, 5, 6];

// //tostring method
// let array2: string = array1.toString();
// console.log(array2);
// //.join method
// let array3 = array1.join('&');
// console.log(array3);

// //push and pop mehod
// let array4 = array1.pop();
// console.log(array1, array4); // [ 1, 2, 3, 5 ] 6

// let array5 = array1.push(7);
// console.log(array1, array5);

// //shift unshift method
// // shift and unshift method are same as push and pop only difference is shift pops the first element and unshift method
// //adds new element in the beginnig of array and returns updated length of array
// let array6 = array1.shift();
// console.log(array6, array1)

// let array7 = array1.unshift(99);
// console.log(array7, array1)

function arraydelete() {
    delete array1[0]
    console.log(array1)  //[ <1 empty item>, 2, 3, 5, 7 ]
}


function concatArray() {
    let array2 = [0, 9, 8, 6]
    let concatedArray = array1.concat(array2)
    console.log(concatedArray)
}



function sortingArray() {
    let array1 = [3, 87654, 43, 63, 234, 2, 1]
    array1.sort();
    console.log(array1) //[   1,  2, 234, 3, 43,  63, 87654 ]\\
    /**sort works alphabetically so in our case as the array has numbers it is sorting the array on the basis of its first digit */

}


function sortingNumArray() {
    let compare = (a: number, b: number) => {
        return a - b
    };
    let NumArray = [3, 87654, 43, 63, 234, 2, 1];
    NumArray.sort(compare);
    console.log(NumArray);
    /*here compare function compares the elements from the array and returns the smallest element as we have provided a-b if we want the largest element first 
    we have to provide b-a which will give the ascending order array */
};
function reverseArray() {
    let newArray = array1.reverse()
    console.log(newArray)

}

//Splice and slice

function usingSplice() {
    let newArray = [3, 56, 77, 23, 555, 1, 93, 53]
    newArray.splice(3, 2, 121, 133, 120)

    /*splice method accepts 3 arguments (index of element to deletefrom, no of elements to delete after index, new elements to add)
    and returns array with deleted items  */
    console.log(newArray)
}

function usingSlice() {
    let newArray = [3, 56, 77, 23, 555, 1, 93, 53]
    let newArray1 = newArray.slice(2, 6)

    /*splice returns the element of the array*/
    console.log(newArray1)
}

// arraydelete();
// concatArray();
// sortingArray();
// sortingNumArray();
// reverseArray();
// usingSplice();
// usingSlice();

function usingForLoop() {
    let arr = [6, 76, 65, 32, 423, 532, 13]

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
    }

}


function usingForEach() {
    let arr = [6, 76, 65, 32, 423, 532, 13]

    arr.forEach(element => {
        console.log(element)
    })
};


function usingArrayFrom(){
    let name = 'Hanas'
    let arrName = Array.from(name)
    console.log(arrName);
/**Array from is used to convert object into array, here a string is converted and returned as array of strings
 * mostly array from is used to convert the html documents returned from Dom into array as it is object from we cannot use for loop for it
 */
}


//for..of
function usingForOf() {
    for(let i of array1){
        console.log(i)
    }
    /*this is simplified way of printing the elements from array as i here holds the elements in array
    we can use for(let i in array1)  this returns keys of the object but in this case it will return the indexex of elements 
    as array is also an object*/
}

function usingForIn() {
    let obj = {
        name:"Omprakash",
        age:12,
        rollNo: 90
    }
    for(let i in obj){
        console.log(i) // name age rollNo
    }
}

function usingArraymap() {
    let arr = [43,32,23,85]
   let a = arr.map((value,index,array)=>{
        console.log(value)
        return value+index
    })
    console.log(a)
    /**map and foreach are same there is no major difference in operation but map retruns a new array which can be used
     * further to perform new functions.
     */
}

function usingArrayFilter() {
    let arr = [43,32,23,85]
   let a = arr.filter((a)=>{
        return a>40
    })
    /**Array filter isa simple method it returns a new array with filtered elements  */
    console.log(a)
}

function usingArrayReduce() {
    let arr = [43,32,23,85]
   let a = arr.reduce((a,b)=>{
        return a -b
    })
    /**Array reduce is a method which returns single digit number  */
    console.log(a)
}
//usingForLoop();
// usingForEach();
//usingArrayFrom();
//usingForOf();
// usingForIn();
// usingArraymap();
// usingArrayFilter();
usingArrayReduce();
