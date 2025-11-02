/*javascript execution context
{} -> golbal execution context
 ->function execution context
 ->Eval execution context
 
{} -> Memory creation phase or creation phase
 -> execution phase*/

 //example
 /*
 let val1=10
 let val2=5
 function addNum(num1,num2){
          let total=num1+num2
          return total
 } 
 let result1=addNum(val1,val2)
 let result2=addNum(10,2)

 1)Global execution --> this ke andar
 2)memory creation phase
          val1 -undefined
          val2 - undefined
          addNum - definition
          result1 - undefined
          result2 - undefined
3)execution phase
          val1<-- 10
          val2<-- 5
          addNum--> ****************************************************
                    * new variable environment + execution thread      *
                    * -> memory phase                                  *
                    *      val1 - undefined                            *
                    *      val2 - undefined                            *
                    *      total - undefined                           *
                    * -> execution context                             *
                    *      num1 -> 10                                  *
                    *      num2 -> 5                                   *
                    *     total -> 15 => returned to the global context*
                    *                                                  *
                    * **************************************************
                    * kaam hone ke baad ye delete bhi ho jata h
          result1=15
          result2 --> firse same repeat hoga as in result1
*/