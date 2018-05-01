var A=[-1,-12,10,-19,-40, 0,943,3,2];
var B=[];
var C=[];
for (i=0; i<A.length; i++){
  if (A[i]>0){
    B.push(A[i]);
  }else{
    C.push(A[i]);
  }
}
console.log(B,C);