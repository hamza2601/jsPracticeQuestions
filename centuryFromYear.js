//Given a year, return the century it is in. 
//The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {
    if(year <= 2005 && year >=1){
    let quotient = year/100;
    let remainder = year % 100;
    if (remainder == 0){
        return quotient;
    }
    else{
        quotient = quotient -(remainder/100);
        return quotient + 1
    }   
    }
}
