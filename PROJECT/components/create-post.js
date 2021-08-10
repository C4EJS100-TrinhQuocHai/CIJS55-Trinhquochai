const style=`
#contend{
    width:600px;
    height:100px;
    margin-left:300px;
    margin-top:30px;
    border-radius:5px;
    background:tomato;
}
`
class CreatePost extends HTMLElement {
    constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: "open" })
        this._shadowDom.innerHTML = `
        <div class="create-post">
        <textarea id="contend" row="10"></textarea>
        <input id="file" type="file">
        <button id="post"> Post</button>
        </div>

        <style>
            ${style}
        </style>

        `
        this._shadowDom.getElementById('post').addEventListener("click", () => {

            const data = {
                authname: currentUser.displayName,
                createAt :new Date().toISOString() ,
                createdBy: currentUser.id,
                content: this._shadowDom.getElementById('contend').value

                
            }
            firebase.firestore().collection('post').add(data)
            this._shadowDom.getElementById('contend').value='';
        });
    }
}
window.customElements.define('create-post', CreatePost)