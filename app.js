let englishMarks = document.getElementById("english").value;
let mathsMarks = document.getElementById("maths").value;
let physicsMarks = document.getElementById("physics").value;
let chemistryMarks = document.getElementById("chemistry").value;
let computerMarks = document.getElementById("computer").value;

let totalMarks = document.getElementById("total").value;
let totalAvarage = document.getElementById("average").value;
document.getElementById("btn").addEventListener("click",()=>{
    totalMarks = parseFloat(englishMarks)+ parseFloat(mathsMarks)+ parseFloat(physicsMarks)+parseFloat(chemistryMarks)+parseFloat(chemistryMarks);
    totalAvarage = (totalMarks%5)*100;
    if(totalAvarage>90){
        document.getElementById("grade").innerText = "Grade-A"
    }
    else if(totalAvarage <89 || totalAvarage > 80 ){
        document.getElementById("grade").innerText = "Grade-B"
    }
    else if(totalAvarage <79 || totalAvarage > 70 ){
        document.getElementById("grade").innerText = "Grade-C"
    }
    else if(totalAvarage <69 || totalAvarage > 60 ){
        document.getElementById("grade").innerText = "Grade-D"
    }
    else if(totalAvarage <59 || totalAvarage > 50 ){
        document.getElementById("grade").innerText = "Grade-F"
    }
    
})