const style=`
    .error{
        color:blue;
    }
`
class Inputwraper  extends HTMLElement{
    constructor(){
        super()
        this._shadowDom=this.attachShadow({mode:'open'})
        this.type=this.getAttribute('type')
        this.placeholder=this.getAttribute('placeholder')
        this._shadowDom.innerHTML = `
        <style>
            ${style}
        </style>
        <div>
            <input type="${this.type}" placeholder="${this.placeholder}">
            <div class="error"> </div>
        </div >
        `
    }
    
    get value(){
        return this._shadowDom.querySelector('input').value
    }
    set value(value){
        this._shadowDom.querySelector('input').value=value
    }
    setErr(err){
        this._shadowDom.querySelector('.error').innerText=err
    }
}
window.customElements.define('input-wraper',Inputwraper)