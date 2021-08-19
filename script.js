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

// adding 3 new promises
var p1 = new Promise((resolve)=>{
    resolve('Sucess1')
})
var p2 = new Promise((resolve)=>{
    resolve('Sucess2')
})
var p3 = new Promise((resolve)=>{
    resolve('Sucess3')
})
window.onload = ()=>{

    // method 1:
    promise.then((success)=>{
        console.log(success)

    }).catch((error)=>{
        console.log(error)
    })
    
    // method 2:
    userChecker().then
    Promise.all([p1,p2,p3]).then((success)=>{
        // added some dom stuff
        let ul = document.getElementsByClassName('ul-list')[0];

        for (message of success){

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(message));    
            ul.appendChild(li);
        }
    })

     

}


