import { redirect } from "../index.js"

const style = `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}
#register-form{
    width: 40%;
    margin: auto;
    text-align: center;
    background: tomato;
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
class RegisterScreens extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.innerHTML = `
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
            <input-wraper type="password" id="confirm-password" placeholder="comfirm-password"></input-wraper>
            <button class="btn">
                Register
            </button>
            <div >
               <p> Alread have an account? </p>
               <a href="#" id="redirect">LOGIN</a>
            </div>

        </form>
    </div>
        `
        this._shadowRoot.getElementById('redirect').addEventListener('click',()=>{
            redirect('login')
        })
        this._shadowRoot.getElementById('register-form')
            .addEventListener('submit', (e) => {
                e.preventDefault()
                //console.log( this._shadowRoot.getElementById('name').value);
                //this._shadowRoot.getElementById('name').value='123'
                //console.log( this._shadowRoot.getElementById('email').value)
                //console.log( this._shadowRoot.getElementById('pass').value)
                // console.log( this._shadowRoot.getElementById('comfirm-password').value)
                const name = this._shadowRoot.getElementById('name').value
                const email = this._shadowRoot.getElementById('email').value
                const pass = this._shadowRoot.getElementById('pass').value
                const confirmpass = this._shadowRoot.getElementById('confirm-password').value
                let isValid=true;
                if (name.trim() === '') {
                    this._shadowRoot.getElementById('name').setErr('please nhap name!');
                    isValid=false;
                } else {
                    this._shadowRoot.getElementById('name').setErr('');
                }
                if (email.trim() === '') {
                    this._shadowRoot.getElementById('email').setErr('please nhap email!');
                    isValid=false;
                } else {
                    this._shadowRoot.getElementById('email').setErr('');
                }
                if (pass.trim() === '') {
                    this._shadowRoot.getElementById('pass').setErr('please nhap mat khau!');
                    isValid=false;
                } else {
                    this._shadowRoot.getElementById('pass').setErr('');
                }
                if (confirmpass.trim() === '') {
                    this._shadowRoot.getElementById('confirm-password').setErr('please nhap lai mat khau!');
                    isValid=false;
                } else if (pass != confirmpass) {
                    this._shadowRoot.getElementById('confirm-password').setErr('mật khẩu không trùng khớp!');
                    isValid=false;
                }else if(pass===confirmpass){
                    this._shadowRoot.getElementById('confirm-password').setErr('');
                }

                if(isValid){
                    firebase.auth().createUserWithEmailAndPassword(email,pass).then((res)=>{
                       alert(' bạn đã đăng kí thành công');
                    
                       firebase.auth().currentUser.sendEmailVerification()
                       firebase.auth().currentUser.updateProfile({
                           displayName: name
                       })
                       redirect('login')
                    }).catch((err)=>{
                        alert(err.message)
                    })
                }
                
            })
    }
}
window.customElements.define('register-screens', RegisterScreens)