function output(a){
    document.getElementById('usernum').value+=a; 
}
function cancel(){
    document.getElementById('usernum').value=document.getElementById('usernum').value.slice(0,-1)
}
function canc(){
    document.getElementById('usernum').value =" "; 

}
function check(){
    let result =[];
    let user_input;
   let userNum=document.getElementById('usernum').value;
     user_input=userNum.split(',');
   let count=0;
   let m;
    for (let i=0; i<6; i++){
        let random=Math.floor(Math.random()*100)
        result[i]=random
    }
    for (values of user_input){
        for (value of result){
            if (value==values){
                 //document.getElementById("message").innerHTML="You just won $100"
                count++

               
            }
            //  if (values!=value){
            //  document.getElementById("message").innerHTML="You just lost $50"

             


            // }
            else if (values>100){
                window.alert("Error!Number must be less Than 100")
               
            }
           
         

            if (count==3 || user_input==3){
                window.alert("Valid 3 Congratulations!! Direct")
                document.getElementById("message").innerHTML="Valid! Congratulations!! 3 Direct"
                count=0

            }
          
            else if (user_input.length>3){
                document.getElementById("message").innerHTML="More than the required input, Please Enter  3 digits seperated by comma(,)  to play 3 direct or 2 digits for 2 sure"
               

            }
            else if(count==2 || user_input==2){
                document.getElementById('message').innerHTML="Valid!  Congratulations !! Two Sure";

                alert("success! Two Sure ")
                count=0
          }
            else if (user_input.length<2){
                document.getElementById("message").innerHTML="less than the required input, Please Enter  3 digits seperated by comma(,) to play 3 direct or 2 digits for 2 sure"
               

            }
            else{
                console.log("Lost")
             document.getElementById("error").innerHTML="You just lost $50"

            }

          //  console.log(count)
          //  console.log(user_input)
         // console.log(typeof user_input)
          console.log(typeof user_input)

        }

        
    }



    // for(let rand=0; rand<result.length; rand++){
    //     for(let num=0; num<userArr.length;num++){
    //         // console.log(userArr[num])
    //      if(userArr[num]==result[rand]){
           
    //         // count=count+1
    //         // count
    //         console.log("match")

    //      }
    //     }
    // }
//    console.log(result)
//    console.log(userArr)
   document.getElementById('user_num').innerHTML=result;
   //console.log(count)
}
document.getElementById('comp_num').innerHTML="The lucky  Values Are:"
document.getElementById('head').innerHTML="WELCOME TO THE BEST GAMBLING SITE"
document.getElementById('instruct').innerHTML="Please Ensure You select TWO or THREE Numbers Seperated with comma (,)"
