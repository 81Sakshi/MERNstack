var i=350;
var bill;
if(i<=100)
{
 bill=0;
}
else if(i>100 && i<=200)
{
  bill=i*5;
}
else(i>=200)
{
  bill=(100*5)+((i-200)*10)
}
console.log("Total Amount="+bill)