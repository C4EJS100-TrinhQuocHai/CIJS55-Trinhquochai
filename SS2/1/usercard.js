class UserCard extends HTMLElement{
    constructor(){
        super()
        this._shadowDom =this.attachShadow({ mode: 'open'})
        this.name=this.getAttribute('name')
        this._shadowDom.innerHTML=`<style>
        .card-container{
            width: 250px;
        }
        </style>
        <div class="card-container">
                <div>
                    <img src="https://picsum.photos/536/354" alt="">
                </div>
                <div class="card-body">
                    <div class="name">
                        NGUYEN VAN A
                    </div>
                    <div class="des">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem optio explicabo delectus quasi vero ad rem, nihil voluptatibus mollitia suscipit enim ipsum. Molestias, id quidem totam ipsam eveniet eos.
                    </div>
                </div>
            </div>`

    }
}
window.customElements.define( 'user-card',UserCard);
