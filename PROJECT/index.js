import './screens/register-screens.js'
import './screens/login-screen.js'
import'./components/input-wraper.js'
import './screens/story-screen.js'
import './components/header.js'
import './components/create-post.js'
import './components/list-post.js'
import './components/post-item.js'
import './utils.js'
redirect('register')
export function redirect(screenName){
    if(screenName ==='login'){
        document.querySelector('#app').innerHTML=`<login-screen></login-screen>`
    }else if(screenName ==='register'){
        document.querySelector('#app').innerHTML=`<register-screens></register-screens>`
    }else if(screenName ==='story'){
        document.querySelector('#app').innerHTML=`<story-screen></story-screen>`
    }

}