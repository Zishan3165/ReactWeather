function add(a,b){
  return a+b;


}
console.log(add(1,2));

var addStatement= (a,b)=>{
 return a+b;

};

var addExpression= (a,b)=> a+b;
console.log(addStatement(2,4));
console.log(addExpression(2,5));
