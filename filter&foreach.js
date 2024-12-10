var taskInfo=[
    {
        taskNumber:1,
        taskStatus:"completed"
    },
    {
         taskNumber:2,
         taskStatus:"still pending"
    },
    {
         taskNumber:3,
         taskStatus:"completed"
    },
    {
        taskNumber:4,
        taskStatus:"still pending"
    }
]

var completedTasks=taskInfo.filter(task=>task.taskStatus=="completed");
console.log(completedTasks);

var taskInfo=completedTasks.forEach(task=>{
    var status=task.taskStatus;
    console.log(status);
})

console.log(taskInfo);