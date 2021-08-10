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
class LoginScreens extends HTMLElement {
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
            
            <input-wraper type="email" id="email" placeholder="email"></input-wraper>
            <input-wraper type="password" id="pass" placeholder="password"></input-wraper>
            
            <button class="btn">
                Login
            </button>
            <div >
               <p> Alread  don't have an account? </p>
               <a href="#" id="redirect">Register</a>
            </div>

        </form>
    </div>
        `
        this._shadowRoot.getElementById('redirect').addEventListener('click', () => {
            redirect('register')
        })
        this._shadowRoot.getElementById('register-form')
            .addEventListener('submit', (e) => {
                e.preventDefault()
                //console.log( this._shadowRoot.getElementById('name').value);
                //this._shadowRoot.getElementById('name').value='123'
                //console.log( this._shadowRoot.getElementById('email').value)
                //console.log( this._shadowRoot.getElementById('pass').value)
                // console.log( this._shadowRoot.getElementById('comfirm-password').value)
                const email = this._shadowRoot.getElementById('email').value
                const pass = this._shadowRoot.getElementById('pass').value
                let isValid = true;
                if (email.trim() === '') {
                    this._shadowRoot.getElementById('email').setErr('please nhap email!');
                    isValid = false;
                } else {
                    this._shadowRoot.getElementById('email').setErr('');
                }
                if (pass.trim() === '') {
                    this._shadowRoot.getElementById('pass').setErr('please nhap mat khau!');
                    isValid = false;
                } else {
                    this._shadowRoot.getElementById('pass').setErr('');
                }
                if (isValid) {
                    firebase.auth().signInWithEmailAndPassword(email, pass).then((res) => {
                        //console.log(res);
                        //alert('đăng nhập thành công!')
                        const user = {
                            id: res.user.uid,
                            email: res.user.email,
                            displayName: res.user.displayName


                        }
                        window.currentUser = user
                        redirect('story')
                        //console.log(user); 
                        // lưu vào biến global biến được sử dụng ở nhiều nơi
                    }).catch((err) => {
                        alert(err.message)
                    })
                }

            })
    }
}
window.customElements.define('login-screen', LoginScreens)