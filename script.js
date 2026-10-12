document.getElementById("bmibtn").addEventListener("click", (e)=>{
const height = document.getElementById("height").value
const weigth = document.getElementById("weight").value
let result = null;

if(height.trim() === "" || weigth.trim() === ""){
    result = "Wrong input"
}else{
const height2 = height * height;
result = (weigth / height2) * 10000;
result = Number(result.toFixed(2));
}

const bmiValue = document.getElementById("bmivalue")
bmiValue.innerText = result
bmiValue.classList = "";
if(result <18.5){
    bmiValue.classList.add("underweight");
}else if(result >= 18.5 && result <= 24.5){
    bmiValue.classList.add("normal")
}else{
    bmiValue.classList.add("overweight");
}

})





