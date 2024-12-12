const { div, input, button, ul, li, bind } = van.tags;

// Define reactive state for tasks
const tasks = van.state(["First Task", "Second Task"]);

// Function to add a new task
const addTask = (taskInput) => {
  if (taskInput.value.trim() !== "") {
    tasks.val = [...tasks.val, taskInput.value.trim()]; // Update state
    taskInput.value = ""; // Clear the input
  }
};

// Function to remove a task by index
const removeTask = (index) => {
  tasks.val = tasks.val.filter((_, i) => i !== index);
};


// To-Do App Component
export const TodoApp = () => {
  const taskInput = van.state(""); // Temporary input state
  
  return div(
    { class: "flex flex-col gap-5 mt-80" },
    // Creating A New Task
    div(
      { class: "flex align-items justify-center gap-5" },
      input({ 
        type: "text", 
        placeholder: "Enter a task...", 
        class: "text-black px-5 py-2 border rounded-lg outline-none",
        oninput: (e) => (taskInput.val = e.target.value) 
      }),
      button({ 
        class: "text-white bg-green-600 px-5 py-1 rounded-lg",
        onclick: () => addTask({ value: taskInput.val }) 
      }, "Add Task")
    ),
    // Display Tasks
    () => ul(
      { class: "flex flex-col justify-between p-5 mx-auto gap-5 w-[22rem] border rounded-lg" },
      tasks.val.map((task, index) => 
        li(
          { class: "flex items-center justify-between gap-5" },
          task,
          button(
            {
              class: "text-white bg-red-500 px-5 py-1 rounded-lg",
              onclick: () => removeTask(index)
            },
            "Delete"
          )
        )
      )
    )
  );
};