const style=`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}
#register-form{
    width: 40%;
    margin: auto;
    text-align: center;
    background: cornsilk;
    height:100%;
    padding-top:3%;
}
.title{
    font-size:30px;
    font-weight:600;
    margin-bottom:20px;
}
.container{
    height: 100vh;
}
`
class RegisterScreens extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:'open'})
        this._shadowRoot.innerHTML=`
        <style>
            ${style}
        </style>
        <div class="container">
        <form id="register-form" >
            <div class="title">
                    share story
            </div>
            <input-wraper type="text" id="name" placeholder="fullname"></input-wraper>
            <input-wraper type="email" id="email" placeholder="email"></input-wraper>
            <input-wraper type="password" id="pass" placeholder="password"></input-wraper>
            <input-wraper type="password" id="comfirm-password" placeholder="comfirm-password"></input-wraper>
            

            <button class="btn">
                Register
            </button>
            <div id="redirect">
                Alread have an account? Login
            </div>

        </form>
    </div>
        `
      this._shadowRoot.getElementById('register-form')
      .addEventListener('submit',(e)=>{
          e.preventDefault()
         console.log( this._shadowRoot.getElementById('name').value)
         this._shadowRoot.getElementById('name').value='123'
         console.log( this._shadowRoot.getElementById('email').value)
         console.log( this._shadowRoot.getElementById('pass').value)
         console.log( this._shadowRoot.getElementById('comfirm-password').value)
         const email=this._shadowRoot.getElementById('email').value
         const pass=this._shadowRoot.getElementById('pass').value
         firebase.auth().createUserWithEmailAndPassword(email,pass)
      })  
    }
}
window.customElements.define('register-screens',RegisterScreens)