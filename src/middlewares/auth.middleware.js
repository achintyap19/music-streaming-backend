const jwt = require('jsonwebtoken')

async function authArtist(req, res, next){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.role!=='artist'){
            return res.status(403).json({message: 'you dont have access'})
        }

        req.user = decoded

        next()

    }catch(err){
        console.log(err)
        return res.status(401).json({message: 'Unauthoirzed'})
    }
}

async function authUser(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.role!=='user'){
            return res.status(403).json({message: 'only user can get all songs'})
        }


        next()

    }catch(err){
        console.log(err)
        return res.status(401).json({message: 'Unauthoirzed'})
    }
}
module.exports = {authArtist, authUser}