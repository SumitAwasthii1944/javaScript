// if
const userLoggedIn=true
const debitcard=true

if(userLoggedIn && debitcard){
          console.log("can buy courses");
          
}

//switch case
// switch (key) {
//           case value:
                    
//                     break;

//           default:
//                     break;
// }
const month =3
switch (month) {
          case 1:
                    console.log("january");
                    break;
          case 2:
                    console.log("February");
                    break;
          case 3:
                    console.log("march");
                    break;
          case 4:
                    console.log("april");
                    break;

          default:
                    console.log("default case matched")
                    break;
}

const month1 ="feb"
switch (month1) {
          case "jan":
                    console.log("january");
                    break;
          case "feb":
                    console.log("February");
                    break;

          default:
                    console.log("default case matched")
                    break;
}