import {getDataFromDocs} from '../utils.js'
const style=`
.container{
    width:60%;
    margin:auto;
}
`
class ListPost extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: "open" })
        this.renderHtml()
    }
    async renderHtml(){
      const res = await firebase.firestore().collection('posts').get()
       console.log(getDataFromDocs(res))
       this.listPost=getDataFromDocs(res)
       let html =''
       for (const item of this.listPost) {
           html+=`  <post-item content="${item.content}" image="${item.image ? item.image :''}" author="${item.author}"></post-item>`
       }
        this._shadowRoot.innerHTML = 
        `
        <style>
            ${style}
        </style>
        <div class="container">
            ${html}
        </div>
        
        `
        
    }
}
window.customElements.define('list-post', ListPost)