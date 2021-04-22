class Hoc extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:'open'})
        this._shadowRoot.innerHTML='hoc mai nhe ban hihi'
    }
}
window.customElements.define('hoc-mai',Hoc)