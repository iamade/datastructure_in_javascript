// function reverse(str) {
//     let newArray = []
//     const strArray = str.split(' ');
//     console.log('strArray',strArray);
//     for(let i = strArray.length - 1; i >= 0; i--)
//     {
//         newArray.push(strArray[i]) 
//         console.log('newArray',newArray);
//     }
//     str = newArray.join(' ')
//     console.log('str',str)
// }
// reverse('Hi My name is Ade')


//MergeSort using For
// function mergeSortedArray(array1, array2){
//     const mergedArray = [];
//     if(array1.length === 0  ){
//         return array2;
//     }
//     if(array2.length === 0) {
//         return array1;
//     }

//     for(let i=0; i<array1.length; i++) {
//         mergedArray.push(array1[i]);
//     }
//     for(let j=0; j<array2.length; j++ ){
//         mergedArray.push(array2[j]);
//     }
    
//     return mergedArray
//     // console.log('mergedArray', mergedArray.sort(compareNumbers));
    
// }
// mergeSortedArray([0,3,4,31], [4,6,30]);

// function compareNumbers(a, b){
//     return a - b;
// }

//MergeSort using While
// function mergeSortedArray(array1, array2){
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];
//     let i = 1;
//     let j = 1;

//     if(array1.length === 0){
//         return array2
//     }

//     if(array2.length === 0){
//         return array1
//     }

//     while(array1Item || array2Item) {
//         console.log(array1Item, array2Item);
//         if (!array2Item || array1Item < array2Item){
//             mergedArray.push(array1Item);
//             array1Item = array1[i];
//             i++
//         }
//         else{
//             mergedArray.push(array2Item);
//             array2Item = array2[j];
//             j++ 
//         }
      
//     }
//     console.log('mergedArray', mergedArray);
//     // return mergedArray

// }
// mergeSortedArray([0,3,4,31], [4,6,30]);

//*********Implement A Hash Table********

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i ) % 
            this.data.length
        }
        return hash;
    }
    
    set(key, value){
      let address = this._hash(key)
        if(!this.data[address]){
            this.data[address].push([key, value])
            return this.data
        }      
        }
    

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(courrentBucket);
        if(currentBucket){
            for(let i = 0; i <currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined

    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')