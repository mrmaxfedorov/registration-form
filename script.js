'use strict'

const emailReg = document.querySelector('#email-reg')
const passwordReg = document.querySelector('#password-reg')
const passwordNull = document.querySelector('#password_null')
const btnReg = document.querySelector('#reg-btn')
const emailRegNull = document.querySelector('#email_null')
const emailInvalid = document.querySelector('#email_invalid')
const emailName = document.querySelector('.form__email-title')
const passwordName = document.querySelector('.form__password-title') 
const passwordLength = document.querySelector('#password_valid')
const input = document.querySelector('#check')
const checkboxReg = document.querySelector('#check')
const checkNull = document.querySelector('#check-null')

const asteriskOne = document.querySelector('.asteriskOne')
const asteriskTwo = document.querySelector('.asteriskTwo')
const asteriskThree = document.querySelector('.asteriskThree')

const formBottom = document.querySelector('.form__bottom') 

let emailAddress = ''
let password = ''
let checkbox = null
let users = {}
let emailValid, passwordValid, checkboxValid = false

emailReg.addEventListener('input', (e) => {
  emailAddress = e.target.value
})
passwordReg.addEventListener('input', (e) => {
  password = e.target.value
})

btnReg.addEventListener('click', (e) => {
  e.preventDefault()
  registrationValidation()
  validationSuccessful()
})

checkboxReg.addEventListener('change', (e) => {
  checkbox = e.target.checked
})

const registrationValidation = () => {
  if (emailAddress.length == '') {
    emailRegNull.style.display = 'block'
    emailInvalid.style.display = 'none'
    emailReg.style.borderColor = '#CB2424'
    emailName.style.color = '#CB2424'
    asteriskOne.style.color = '#CB2424'
    emailValid = false
  } else {
    emailRegNull.style.display = 'none'
    emailReg.style.borderColor ='#787878'
    emailName.style.color = '#787878'
    asteriskOne.style.color = 'black'
    if (!validateEmail(emailAddress)) {
      emailInvalid.style.display = 'block'
      emailReg.style.borderColor = '#CB2424'
      emailName.style.color = '#CB2424'
      asteriskOne.style.color = '#CB2424'
    } else {
      emailInvalid.style.display = 'none'
      emailReg.style.borderColor ='#787878'
      emailName.style.color = '#787878'
      asteriskOne.style.color = 'black'
      users.email = emailAddress
      emailValid = true
    }
  }
  if (password.length == '') {
    passwordNull.style.display = 'block'
    passwordReg.style.borderColor = '#CB2424'
    passwordName.style.color = '#CB2424'
    passwordLength.style.display = 'none'
    asteriskTwo.style.color = '#CB2424'
    asteriskTwo.style.margin = '-6px'
    passwordValid = false
  } else {
    passwordNull.style.display = 'none'
    passwordReg.style.borderColor ='#787878'
    passwordName.style.color ='#787878'
    asteriskTwo.style.color = 'black'
    if (password.length < 8) {
      passwordLength.style.display = 'block'
      passwordReg.style.borderColor = '#CB2424'
      passwordName.style.color = '#CB2424'
      asteriskTwo.style.color = '#CB2424'
      asteriskTwo.style.margin = '-6px'
    } else {
      passwordLength.style.display = 'none'
      passwordReg.style.borderColor = '#787878'
      passwordName.style.color = '#787878'
      asteriskTwo.style.color = 'black'
      asteriskTwo.style.margin = '-6px'
      users.password = password
      passwordValid = true
    }
  }
  if (!checkbox) {
    checkNull.style.display = 'block'
    asteriskThree.style.color = '#CB2424'
    formBottom.style.margin = '0px'
    checkboxValid = false
  } else {
    checkNull.style.display = 'none'
    asteriskThree.style.color = 'black'
    formBottom.style.margin = '0px'
    checkboxValid = true
  }
}

const validationSuccessful = () => {
  if (emailValid && passwordValid && checkboxValid) {
    console.log();
    localStorage.users = JSON.stringify(users);
    console.log(localStorage);
  }
}


const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}