function handleComplete(taskName) {
    const totalTask = document.getElementById("total-task");
    const completedTasks = document.querySelector(".text-3xl.font-bold");
    const activityLog = document.getElementById("activity-log"); 

    let currentTotal = parseInt(totalTask.textContent);
    let completedCount = parseInt(completedTasks.textContent);

    if (currentTotal > 0) {
        totalTask.textContent = currentTotal - 1;
        completedTasks.textContent = completedCount + 1;
    }

    const now = new Date();
    const logEntry = document.createElement("p");
    logEntry.textContent = `You have completed the task ${taskName}  at ${now.toLocaleTimeString()}`;
    logEntry.classList.add("text-lg", "mt-2", "text-gray-700", "bg-slate-100", "p-4", "rounded-lg");

    activityLog.appendChild(logEntry);

    const completeButton = event.target;
    completeButton.disabled = true;
    completeButton.classList.add("bg-gray-300");
    completeButton.textContent = "Completed";

    alert("Board Updated Successfully");

    checkAllTasksCompleted();
}

function checkAllTasksCompleted() {
    const totalTask = document.getElementById("total-task");
    const currentTotal = parseInt(totalTask.textContent);

    if (currentTotal === 0) {
        alert("All tasks have been completed!");
    }
}

function clearHistory() {
    document.getElementById("activity-log").innerHTML = "";
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
