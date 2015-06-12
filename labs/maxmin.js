var array = [];
var findMinMax= function(array){
 
var largest = Math.max.apply(Math, array);
var smallest= Math.min.apply(Math, array);
console.log( smallest);
if(smallest===largest){
    newArray=[smallest];
}
else{
newArray=[smallest, largest];}
console.log(newArray);
return newArray;

};
