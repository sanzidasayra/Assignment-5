function handleComplete() {
    alert("Board Updated Successfully")
}

function pickDifferentColor() {
    const colors = [
        "bg-blue-100", "bg-red-100", "bg-orange-100", "bg-yellow-100", "bg-pink-100", "bg-indigo-100", "bg-green-100", "bg-violet-100", "bg-teal-100", "bg-cyal-100", "bg-rose-100"
    ]
    return colors[Math.floor(Math.random() * colors.length)];
}
function handleColorChange() {
   const element = document.getElementById("bg-color");
   element.classList = "bg-slate-100 poppins-regular pb-9";
   element.classList.add(pickDifferentColor());
}