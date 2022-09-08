import { Task } from "./task.js";

class Tasks {
    _list = {}

    get getList() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            list.push( this._list[key] );
        })

        return list;
    }

    constructor() {
        this._list = {};
    }

    createTasksFromList( tasksList = [] ) {
        console.log( tasksList );
        tasksList.forEach( task => {
            this._list[task.id] = task;
        })
    }

    createTask( description = '' ) {
        const task = new Task( description );
        this._list[task.id] = task;
    }
}

export {
    Tasks
}