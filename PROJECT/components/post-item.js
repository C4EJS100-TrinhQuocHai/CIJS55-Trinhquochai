const style = `
    .item-container{
        border:1px solid #dbdbdb;
        margin-bottom:10px;
        padding:10px;
        border-radius:5px;
    }
`
class PostItem extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: "open" })
        this.content = this.getAttribute('content')
        this.author = this.getAttribute('author')
        this.image = this.getAttribute('image')
        let imgEle = ''
        if (this.image) {
            imgEle = `<img src ="${this.image}"/>`
        }


        this._shadowRoot.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="item-container">
                <div class="author">${this.content} </div>
                <div class="content">${this.author} </div>
            </div>
            
            
        `
    }
}
window.customElements.define('post-item', PostItem)