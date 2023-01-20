const schemas = require('../models/shemas.js');




exports.getLogin = (req,res) =>{
    res.render('login',{title: 'Login',loggedIn: false, error:null})
} 
exports.getSignup = (req,res) =>{
    res.render('new-acct',{title: 'New Account',loggedIn: false, error:null})
} 

exports.getLogout = (req,res) =>{
    req.session.destroy()
    res.redirect('/')
}
//everytime we talk to database we need to have an async function
exports.postLogin = async (req,res)=>{
    let email = req.body.emailInput
    let pass = req.body.pwdInput
    let loginSuccess = false
    let sesh = req.session
    sesh.loggedIn = false

    let users = schemas.users
    let qry = {email:email}

    if (email != '' && pass != '') {
        let userResult = await users.findOne(qry)
        .then( async(data) =>{
            if(data) {
                let passResult = await bcrypt.compare(pass,data.password)
                .then((isMatch)=>{
                    if(isMatch){
                    sesh.loggedIn = true
                    loginSuccess = true
                    }
                })
            }
        })
        if(loginSuccess=== true){
            res.redirect('/')
        }else{
            res.render('login',{title: 'Login',loggedIn: false, error:'Invalid Login'})
        }
    }

}