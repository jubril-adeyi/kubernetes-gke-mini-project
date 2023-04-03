function validateUsername(username){
    if(username == null){
        return true
    }
    if(username.length <6){
        return false
    }
    else {return  true
    }
}
function validatePassword(password){
    if(password==null){
        return true
    }
    if(password.length < 8){
        return false
    }
    else {return  true
    }
}

const userDetails ={
    "jbadeyi" :{
        firstName : "jubril",
        lastName : "adeyi",
        password : "jubril123",
        verification: "true"
    },
    "damilare" :{
            firstName : "dare",
            lastName : "adeyi",
            password : "dare123",
            verification: "false"
        },
    'amira' :{
        firstName : "amirah",
        lastName : "adeyi",
        password : "amirah123",
        verification:" true"
    }
}


function displayUserDetails(){
    let username = prompt("Enter your username")
        while (validateUsername(username) == false) {
            username = prompt("Please input username with more than 6 characters")
        }
        if(username==null){
        return
        }
    let password = prompt("Enter your password")
        while (validatePassword(password) == false){
        password = prompt("Please input password with more than 8 characters")
        
        }
        if(password===null){
            return
        }

    let passwordVerify = prompt("Please confirm your password")
        while (passwordVerify!=password){
            if (passwordVerify == null){
          return }
          passwordVerify=prompt("passwords do not match! please input correct password")
        
        }

    const theUsers = userDetails[username]

    if(!theUsers){
        alert('this user does not exist, please input a valid username')
        return
    }
    if (theUsers.password!=password){
        alert("this password is not correct, please try again")
        return
    }

    alert (` these are the details for ${username}: \n
    First name :${theUsers.firstName}:\n
    Last name :${theUsers.lastName}:\n
    verification :${theUsers.firstName}:\n`
    )
}

displayUserDetails()

