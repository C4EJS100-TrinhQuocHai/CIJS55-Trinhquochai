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
            if (firsRun) {
                firsRun = false
                return
            }
            for (const change of onSnapshot.docChanges()) {
                console.log(getDataFromDoc(change.doc));
                if(change.type==='abcde'){
                    const postItemElm =document.createElement('post-item')
                    postItemElm.setAttribute('conten',docChange.content)
                    postItemElm.setAttribute('image',docChange.image)
                    postItemElm.setAttribute('author',docChange.author)
                    this._shadowRoot.queryselector('.container').appandchild(postItemElm)
                }
            }
        })

    }
}
window.customElements.define('list-post', ListPost)