import React from 'react'

function Home(){
    const currentTime = new Date()
    const currentHour = currentTime.getHours() 
    
    let greet
    if(currentHour < 12){
        greet = 'Good Morning !'
    } else if (currentHour < 17 ){
        greet = 'Good Afternoon !'
    }else{
        greet = 'Good Evening !'
    }
    return(
        <div>
            <h4 style = {{color:'rgb(114, 6, 51)',fontStyle:'inherit',textAlign:'start',lineHeight: 3}}>.... {greet} </h4>
            <h3 style={{textAlign:'center',color:'rgb(0 45 100)',fontSize:'30px',margin:'30px 0px 0px 0px'}}><em>Welcome !!!</em></h3>
            <h3 style={{textAlign:'center',color:'rgb(0 45 100)',fontSize:'25px',margin:'40px 0px 0px 0px'}}><em> A Simple Contacts App with OTP SMS Sending Functionality</em></h3>

        </div>
    )
}

export default Home