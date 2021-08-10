const controller = {}
controller.register = (data) => {
    if (data.firstName.trim() === '') {
        view.setErrorMesage('first-name-error', 'Please input your first name')
    } else {
        view.setErrorMesage('first-name-error', '')
    }
    if (data.lastName.trim() === '') {
        view.setErrorMesage('last-name-error', 'Please input your last name')
    } else {
        view.setErrorMesage('last-name-error', '')
    }
    if (data.email.trim() === '') {
        view.setErrorMesage('email-error', 'Please input your  email')
    } else {
        view.setErrorMesage('email-error', '')
    }
    if (data.password.trim() === '') {
        view.setErrorMesage('password-error', 'Please input your password')
    } else {
        view.setErrorMesage('password-error', '')
    }
    if (data.confirmPassword.trim() === '') {
        view.setErrorMesage('confirm-password-error', 'Please input your confirm password')
    } else if (data.confirmPassword.trim() !== data.password.trim()) {
        view.setErrorMesage('confirm-password-error', "password didn't match !")
    }
    else {
        view.setErrorMesage('confirm-password-error', '')
    }
    if (data.firstName !== ''
        && data.lastName !== ''
        && data.email !== ''
        && data.password !== ''
        && data.confirmPassword === data.password) {
        model.register(data)
    }
}
controller.login = ({ email, password }) => {
    view.setErrorMesage('email-error', email === '' ? 'Please input your email' : '')
    view.setErrorMesage('password-error', password === '' ? 'Please input your password' : '')
    if (email !== '' && password !== '') {
        model.login({ email, password })
    }
}
