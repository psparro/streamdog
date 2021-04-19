const isAdmin = (req,res,next)=>{
    if(req.session.userInfo.type == "Admin")
    {
        next();
    }
    else{
        res.render("error");
    }
}

module.exports = isAdmin;