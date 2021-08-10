window.onload=()=>{
  
  var firebaseConfig = {
    apiKey: "AIzaSyBhtH7r3RHIklfKsZobTmXn59Dd6JcPidk",
    authDomain: "chat-app-4f9a2.firebaseapp.com",
    projectId: "chat-app-4f9a2",
    storageBucket: "chat-app-4f9a2.appspot.com",
    messagingSenderId: "240007223929",
    appId: "1:240007223929:web:8442e53ce52b452a1d92a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //console.log(firebase.app());
  //khi chay ham lan dau,khi login,khi logout
  
  view.setActiveScreen('registerPage')

}
