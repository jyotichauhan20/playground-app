const tasks = {
    tasks:[{
        text:'Grocery shpping',
        completed:true
    },{
        text:'Clean yard',
        completed:false
    },{
        text:'Film course',
        completed:false
    }],
    getTaskToDo(){
        return this.tasks.filter((task)=>task.completed===false)
        // const taskToDo = this.tasks.filter((task)=>task.completed===false)
        // {
        //     return task.completed===false

        // })
        // return taskToDo
    }
}
console.log(tasks.getTaskToDo())