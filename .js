
const form =
document.getElementById("studentform");




const table=
document.getElementById("studentTable");



const registerButton=
document.getElementById("registerbutton");




let studentId=103;


form.addEventListener(
    "submit",
function(event){
    
    event.preventDefault();
    
    const name =
    document.getElementById("name").value.trim();


    const email =
    document.getElementById("email").value.trim();



    const course =
    document.getElementById("course").value.trim();

    if(
        name===""||
        email===""||
        course===""||
    ){
        message.innerText =
        "Please fill all fields.";

        message.style.color ="red";

        return;
    }
     const row =
     document.createElement("tr");
     row.innerHTML=`
}
     <td>$(student Id)</td>

     <td>$(name)</td>

     <td>$(email)</td>

     <td>$(course)</td>

     <td>
        <button class="deletebutton";
        delete 
        </button></td>
        ;

        table.appendChild(row);
        const deleteButton =
            row.querySelector(".deleteButton");
        deleteButton.addEventListener(
            "click",
            function() {

                row.remove();

            }
        );
        message.innerText =
            "Student registered successfully!";

        message.style.color = "green";

        registerButton.innerText =
            "Registered ✓";

        studentId++;

        form.reset();


    }
);
        


      

