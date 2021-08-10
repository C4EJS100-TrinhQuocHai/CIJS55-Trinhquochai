const model= {}
model.currentUser=
model.register= async (data)=>{
    try {
        const response= await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        firebase.auth().currentUser.updateProfile({
            displayName:data.firstName+''+data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        view.setActiveScreen('loginPage')

    } catch (err) {
        //console.log(err);
    }
  
}
model.login= async ({email,password})=>{
    try {
    const response =await firebase.auth()
    .signInWithEmailAndPassword(email, password)
        //console.log(response);
        if(response && response.user.emailVerified){
            // vao man chat
            model.currentUser={
                email:response.user.email,
                displayName:response.user.displayName,
            }
            view.setActiveScreen('chatPage')
        }else{
            alert('please verify your email')
        }
    } catch (err) {
        //console.log(err);
        alert(err.message);
    }
    
}
