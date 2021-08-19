// added line locally
var userType = true;
// Promises JS

// Create a promise
// method 1:
// Promise takes a function with two parameters (resolve,reject) 

var promise =  new Promise((resolve,reject)=>{
    if(userType){
        resolve('Success');
    }
    else{
        reject('Failed')
    }
})


// method 2:
// Promise takes a function with two parameters (resolve,reject) 
function userChecker(){
    return new Promise((resolve,reject)=>{
        if(userType)
        {
            resolve('Success');
        }
        else
        {
            reject('Failed')
        }
    })
}

window.onload = ()=>{

    // method 1:
    promise.then((success)=>{
        console.log(success)

    }).catch((error)=>{
        console.log(error)
    })
    
    // method 2:
    userChecker().then

}


