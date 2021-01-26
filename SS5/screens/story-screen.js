class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
        <create-post></create-post>
        <list-post></list-post>
        `;
        

        // this.shadowDom.querySelector('button').onclick = () => {
        //     auth.signOut()
        //         .then(() => {
        //             alert('Bạn đã đăng xuất khỏi tài khoản');
        //         })
        //         .catch((err) => {
        //             alert(err.message);
        //         })
        // }

    }
    

}


window.customElements.define('story-screen', StoryScreen)