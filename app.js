function redKnight(N, P) {
    // догнати і вивести тру коли N = P
    let result = 0;
    let n = N
    let p = P
    let shag = 0;
    while (n <= p) {
        result = n;
        n += 2;
        p += 1;
        shag += 1;
        
    };

    if(shag % 2 === 0 && N === 0){
      console.log(['Black', result])
    }
    if(shag % 2 != 0 && N === 0){
      console.log(['White', result])
    }
    if(shag % 2 === 0 && N === 1){
      console.log(['Black', result + 1])
    }
    if(shag % 2 != 0 && N === 1){
      console.log(['White', result + 1])
    }
    
   }
   
   redKnight(0, 8);
   redKnight(0, 7);
   redKnight(1, 6);
   redKnight(1, 5);

   // 5 > 6 > 7 > 8 > 9
   // 1 > 3 > 5 > 7 > 9


   ///-----------------------------------------///
/* 
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
*/

   function unluckyDays(year){
    let unlucky = 0;
    for(let i = 0; i < 12; i ++){
      unlucky += new Date(year, i, 13).getDay() === 5 ? 1 : 0;
    }
    return unlucky;
  }