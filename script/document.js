//Access 
function access(event){
    event.preventDefault();

    const acs = document.getElementById("access");
    const user = document.getElementById("name").value;
    const psswd = document.getElementById("password").value;
    const doc = document.getElementById("doc");

    if(psswd == "370180" && user == "tvu370" ){
        acs.style.display = "none" ;
        doc.style.display = "block" ;
    }
    else{
        alert('Invalid Access !');
        event.target.reset;
    }
}