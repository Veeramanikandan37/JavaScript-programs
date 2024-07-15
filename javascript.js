// 1st program

// for(let i=1;i<=100;i++)
// {
//     if(i%3==0 && i%5==0)
//         console.log("FizzBuzz");
//     else if(i%3==0)
//         console.log("Fizz");
//     else if(i%5==0)
//         console.log("Buzz");
//     else 
//         console.log(i);
// }

// ----------------------------------------------------------------------------

//2nd program

// function palindromeCheck(str){
//     let l=0,r=(str).length-1;
//     while(l<r){
//     if((str).charAt(l)!=(str).charAt(r))
//     {
//         return "Not a Palindrome";
//     } 
//     l++;
//     r--;
//     }
//     return "Palindrome";
// }

// let str = "malayalam";
// let result = palindromeCheck(str);
// console.log(str+" is "+result);

// ----------------------------------------------------------------------------

//3rd program

// function largestNumber(num)
// {
//     let max=num[0];
//     for(let i=0;i<num.length;i++)
//     {
//         if(num[i]>max)
//             max=num[i];
//     }
//     return max;
// }

// let arr = [1,4,6,9,11,20,33,23];
// console.log("Largest Number among the array is "+largestNumber(arr));

// ----------------------------------------------------------------------------

//4th program

// function repeat(str){
//     let result = {};
//     for(i = 0; i < str.length; i++){
//     	if(result[str[i]]){
//     		result[str[i]]++;
//     	}
//         else{
//     		result[str[i]] = 1;
//     	}
//     }
//     	return result;
//     }
//     let str="helloworld";
//     let result = repeat(str);
//     console.log(result);

// ----------------------------------------------------------------------------

//5th program

// function LongestStr(str)
// {
//     let longestword="";
//     let max=0;
//     let count=0;
//     let l=0;
//     let start=0;
//     let len = str.length;
//     while(l <  len)
//     {   
//        if(str.charAt(l)==" ")
//        {
//            if(count>max)
//            {
//             max=count;
//             longestword=str.slice(start,l+1);
//            }
//            start=l+1;
//            count=0;
//        }
//        count++;
//        l++;
//     }
//      return longestword;
// }
// let str = "hi hello everyone gather up here";
// let res = LongestStr(str);
// console.log("Longest word in the string is : "+res);

// ----------------------------------------------------------------------------

//6th program 

// function fact(num)
// {
//     let mul=1;
//     for(let i=1;i<=num;i++)
//     {
//         mul*=i;
//     }
//     return mul;
// }

// let val=5;
// console.log("Factorial of "+ val+" is "+fact(val));

// ----------------------------------------------------------------------------

//7th program

// function Cel_to_Fah(temp)
// {
//     return (temp*(9/5) + 32);
// }
// let temp = 45;
// console.log("Celsius value is "+temp+" the value of fahrenheit is "+Cel_to_Fah(temp));

// ----------------------------------------------------------------------------

//8th program

// let n = 10;
// let arr = [0,1,2,3,4,6,7,8,9];
// for(let i=0;i<n;i++)
// {
//     if(i!=arr[i])
//     {
//         console.log("The missing value in the array is "+i);
//         break;
//     }
// }

// ----------------------------------------------------------------------------