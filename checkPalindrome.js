//Given the string, check if it is a palindrome.

function solution(inputString) {
    if(inputString.length <= 10^5 && inputString.length>=1){
        inputString = inputString.toLowerCase();
        let b = false;
        let c= inputString.length;
        for(let i=0; i<c/2; i++ ){
            if(inputString[i] == inputString[c-1-i]){
                b = true;
            }
            else{
                b = false;
                break;
            }
        }
        return b;   
    }
}
