console.log("App Started");
let working_list = ["Walk", "Run", "sprint", "talk", "hunt"];
let command = prompt("Enter your command");

while (command != "exit" && command != "invalid") {
    if (command == "exit") {
        console.log("exiting app!");
        break;
    }
    else if (command == "list") {
        console.log(`____________________`);
        for (let i = 0; i < working_list.length; i++) {
            console.log(`${i} : ${working_list[i]}`);
        }
        console.log(`____________________`);
        command = prompt("Enter your command: ");

    }
    else if (command == "add") {
        let task = prompt("enter a task to add");
        working_list.push(task);
        command = prompt("Enter your command: ");
        console.log("Task added!");
    }
    else if (command == "del") {
        delIn = prompt("Which index you want to delete");
        if (delIn == "last") {
            delIn = working_list.length - 1;
        }
        working_list.splice(delIn, 1);
        command = prompt("Enter your command: ");

    }
    else {
        console.log("Invalid Command");
        command = prompt("Enter your command: ");

    }
}