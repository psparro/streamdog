const dashboardLoader = (req,res)=>
{
    if(req.session.userInfo.type == "Admin"){
        res.render("adminDashboard", {
            title: "Admin Dashboard"
        })
    }
    
    else{
        res.render("/user/dashboard");
    }
}

module.exports =  dashboardLoader; 