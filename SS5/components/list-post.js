import { getDataFromDocs } from '../ultis.js'
const style=`
.container{
    width:60%;
    margin:auto;
}`
class ListPost extends HTMLElement {
     constructor() {
        super()
        this._shadowDom = this.attachShadow({ mode: "open" })
        this.renderHtml()
        this.listenChange()

        
    }
    async renderHtml(){
        const res=await firebase.firestore().collection('post').get()
        console.log(getDataFromDocs(res.docs))
        this.listPost=getDataFromDocs(res.docs)
        let html=''
        for(const item of this.listPost){
            html += `<post-item content="${item.content}" image="${item.image ? item.image:""}" author="${item.author}"></post-item content>`
        }
        this._shadowDom.innerHTML =`
        <style>
            ${style}
        </style>
        <div class="container">
            ${html}
        </div>
        `
        
    }
    listenChange(){
        firebase.firestore().collection('post').onSnapshot((onSnapshot)=>{
            console.log(onSnapshot.docChanges());
        })
    }
}
window.customElements.define('list-post', ListPost)