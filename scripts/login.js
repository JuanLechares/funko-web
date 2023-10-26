function logear(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    users.forEach(e => {
        if(email==e.email && pass==e.pass){
            if(e.typeUser=="adm"){window.location="./admin.html"}
            else if(e.typeUser=="cliente"){window.location="./index.html"}
            return;
        }
    });
}


var users=[ 
    {
        email:"admin",
        pass:"1234",
        typeUser:"adm"
    },
    {
        email:"juan",
        pass:"1234",
        typeUser:"cliente"
    },
    {
        email:"pablo",
        pass:"1234",
        typeUser:"cliente"
    },
    {
        email:"juanlechares.ing@outlook.com",
        pass:"1234",
        typeUser:"cliente" 
    }
]
