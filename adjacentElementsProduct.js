//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    let l = inputArray.length;
    if((max <=1000 && min >= -1000 ) && (l >=2 && l<=10)){
        let maxProd ;
        for (i=0; i< l-1 ; i++){
            let p = inputArray[i] * inputArray[i+1];
            if (i == 0){
                maxProd = p;
            }
            else if(p > maxProd){
                maxProd = p;
            }
        }
        return maxProd;
        }
}
