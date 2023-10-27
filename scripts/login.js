
function logear(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    const userSucess=users.find((e)=>{
        email==e.email && pass==e.pass && (e.typeUser=="adm"? 
        (window.location="admin.html")
        :
        (window.location="index.html"))
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

