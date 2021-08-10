let style=`*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background-image:url('login1.jpg');
    background-size: cover;

}
#container{
    border: 1px solid black;
    width: 400px;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
    background-color:rgb(210, 216, 228);
    padding: 20px 20px;
    border-radius: 15px;
}
#container #register, #regis_ter,#dieukhoan{
    text-align: center;
}
#register{
    margin-bottom: 6px;
}
#container input,label {
    display: block;
    width: 100%;
}
#dangki{
    margin-left:70px;
    margin-top: 20px;
    width: 200px;
    background-color: #83a0d1;
    border-radius: 5px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
}
#dangki:hover {
    background-color:tomato;
}
input{
    padding: 10px;
    border-radius: 5px;
}
label{
    margin-bottom: 5px;
}
.dangnhap{
    text-align: center;
    margin-top: 40px;
}
`
class Register extends HTMLElement{
    constructor(){
        super()
        this._hoc=this.attachShadow({mode:"open"});
        this._hoc.innerHTML=`
        <style>
            ${style}
        </style>
        <div id="container">
        <h1 id="register"> REGISTER</h1>
        <label for="ho"> Username </label>
        <input type="text" id="ho"> <br>
        <label for="ten"> Fullname</label>
        <input type="text" id=" ten"> <br>
        <label for="email"> Email</label>
        <input type="text" id=" email"> <br>
        <label for="matkhau"> password </label>
        <input type="password" id="matkhau "> <br>
        <label for="nhaplaimatkhau"> confirm password</label>
        <input type="password" id=" nhaplaimatkhau"> <br>
       <button id="dangki"> Register </button>
       
        <p class="dangnhap"> You don't have an account yet ?<a href="http://127.0.0.1:5500/SS1/9/login.html"> ĐĂNG NHẬP </a>  </p>
    </div>`;
    }
}
window.customElements.define('register-screen',Register)