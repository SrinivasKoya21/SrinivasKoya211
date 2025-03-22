const tasks = [
    { id: 1, page: "work/agecalculator.html", name: "Age Calculator" },
    { id: 2, page: "work/Callstack.html", name: "Stack" },
    { id: 3, page: "work/bootstrapforms.html", name: "Bootstrap Form" },
    { id: 4, page: "work/bulb_q.html", name: "Bulb" },
    { id: 5, page: "work/Calculatoe.html", name: "Calculator" },
    { id: 6, page: "work/checkoutform.html", name: "CheckOutForm" },
    { id: 7, page: "work/ConditionStatement.html", name: "Grade Calculator" },
    { id: 8, page: "work/dashboard.html", name: "Dashboard" },
    { id: 9, page: "work/Star_printing.html", name: "Star Printing" },
    { id: 10, page: "work/Midtermlayout.html", name: "Midterm Layout" },
    { id: 11, page: "work/Name_Hover_Effect.html", name: "Name Hoover Effect" },
    { id: 12, page: "work/LayoutQuiz.html", name: "Quiz Layout" },
    { id: 13, page: "work/UI_Object.html", name: "UI Object" },
    { id: 14, page: "work/Vanish.html", name: "Vanish"}
];

const nav = document.getElementById("task-nav");
tasks.forEach(task => {
    const button = document.createElement("button");
    button.classList.add("task-btn");
    button.textContent = task.name;
    button.addEventListener("click", () => {
        document.getElementById("task-frame").src = task.page;
    });
    nav.appendChild(button);
});

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    document.getElementById("task-frame").src = "";
});
nav.appendChild(resetButton);