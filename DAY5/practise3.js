var weight=30;
var h=1.80;
var BMI=weight/(h*h);

if (BMI<18.5)
{
 console.log("underweight")
}

else if(BMI>=8.5 && BMI<=24.9)
{
console.log("normal weight")
} 

else if(BMI>=25 && BMI<=29.9)
{
console.log("overweight")
}

else(BMI>30)
{
console.log("obese")
}


 


