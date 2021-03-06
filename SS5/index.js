import './screens/register-screen.js';
import './screens/login-screen.js';
import './screens/story-screen.js'
import './components/create-post.js'
import './components/input-wrapper.js';
import './components/list-post.js'
import './components/post-item.js'



export function redirect(screenName) {     
    if(screenName === 'login') {
        document.querySelector('#app').innerHTML = `<login-screen></login-screen>`;

    }else if(screenName === 'register') {
        document.querySelector('#app').innerHTML = `<register-screen></register-screen>`;
    }else if (screenName === 'story') {
        document.querySelector('#app').innerHTML = `<story-screen></story-screen>`;
    }
}


auth.onAuthStateChanged((user) => {
    if(user) {
        const userLogin = {
            email: user.email,
            displayName: user.displayName,
            id: user.uid
        }

        window.currentUser = userLogin;
        redirect('story');
        //document.querySelector('#app').querySelector('story-screen').userLogOut();
    }else {
        redirect('login'); 
    }
})