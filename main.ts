function addNumbers(...nums:number[]) {  
   let i;   
   let sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3,4,9,8,7,6,7,8,9) ;
addNumbers(1,2,3,4,5,10,10,10,10,10,20);