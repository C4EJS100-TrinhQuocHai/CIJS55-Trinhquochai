const style = `
    .header{
    display:flex;
    justify-content:space-between;
    background:#0097A7;
    align-items:center;
    height:64px;
    padding:0 50px;
    }
`
class Header extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: "open" })
        this._shadowRoot.innerHTML = `
        <style>
            ${style}
        </style>
    <div class="header">
        <div>
        Logo
        </div>
        <div>
        <div> avatar </div>
        <div> logout </div>
        </div>
    </div>
        `
    }
}
window.customElements.define('story-header', Header)