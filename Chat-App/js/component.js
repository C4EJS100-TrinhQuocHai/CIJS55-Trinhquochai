const component= {}
component.welcomePage= `
 <h1>
    welcome to chat app
</h1>`
component.registerPage=
`
<div class="register-container">
<form action="" id="register-form">
  <div class="register-header"> Chat Online </div>
  <div class="name-wrapper">
    <div class="input-wrapper">
      <input type="text" placeholder="First name..." name="firstName">
      <div class="error" id="first-name-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="text" placeholder="Last name..." name="lastName">
      <div class="error" id="last-name-error"></div>
    </div>
  </div>
  <div class="input-wrapper">
    <input type="email" placeholder="Email..." name="email">
    <div class="error" id="email-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Password..." name="password">
    <div class="error" id="password-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="password" placeholder="Confirm Password..." name="confirmPassword">
    <div class="error" id="confirm-password-error"></div>
  </div>
  <div class="form-action">
    <div>
      Already have an account? <a href="#" id="redirect-to-login" class="cursor-pointer">Login</a>
    </div>
    <button class="btn  cursor-pointer" type="submit" > Register </button>
  </div>

</form>
</div>
`
component.loginPage=`
<div class="login-container">
    <form action="" id="login-form">
      <div class="login-header"> Chat Online </div>
      <div class="input-wrapper">
        <input type="email" placeholder="Email..." name="email">
        <div class="error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="Password..." name="password">
        <div class="error" id="password-error"></div>
      </div>
      <div class="form-action">
        <div>
          Don't have  account? <a id="redirect-to-register" href="#" class="cursor-pointer">Register</a>
        </div>
        <button class="btn  cursor-pointer" type="submit"> login </button>
      </div>

    </form>
  </div>
`
component.chatPage=`<div class="chat-container">
<div class="header">
    Chat Online
</div>
<div class="main">
    <div class="conversation-detail">
        <div class="conversation-title">
            First conversation
        </div>
        <div class="list-message">
            
        </div>
        <form id="send-message-form">
            <div class="input-wrapper">
                <input type="text " placeholder="type a message" name="message">
            </div>
            <button id="send" type="submit">Send</button>
        </form>
    </div>
</div>
</div>  `