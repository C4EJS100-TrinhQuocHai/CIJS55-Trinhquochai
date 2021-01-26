const style = `
  .item-container{
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
  }
`
class PostItem extends HTMLElement{
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({mode:"open"})
    this.content = this.getAttribute('content')
    this.author = this.getAttribute('author')
    this.image = this.getAttribute('image')
    console.log(this.image)
    let imgEle=''
    if(this.image){
        imgEle=`<img src ="${this.image}"/>`
    }
    
    this._shadowRoot.innerHTML = `
      <style>
        ${style}
      </style>
      <div class="item-container">
      ${imgEle}
        <div class="athor"> ${this.author} </div>
        <div class="content"> ${this.content} </div>
      </div>
    `
  }
  static 
  attributeChangeCallback(){

  }
}
window.customElements.define('post-item', PostItem)