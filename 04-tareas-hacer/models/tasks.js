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

    deleteTask( id = '' ) {
        if ( this._list[id] ) {
            delete this._list[id];
        }
    }

    printToConsole() {
        const list = this.getList

        list.forEach( ({ description, completedDate }, i ) => {
            const index = ( completedDate )
                                ? `${i+1}.`.green
                                : `${i+1}.`.yellow
            const state = ( completedDate )
                                ? 'completed'.green
                                : 'pending'.yellow

            console.log( `${index} ${description} :: ${state}`)
        })
    }

    listCompleted() {
        const list = this.getList;

        let counter = 1;
        list.forEach( ({ description, completedDate } ) => {
            if ( completedDate ) {
                const index = `${counter}.`.green;
                console.log( `${index} ${description}`);
                counter++;
            }
        })
    }

    listPending() {
        const list = this.getList;

        
        let counter = 1;
        list.forEach( ({ description, completedDate } ) => {
            if ( !completedDate ) {
                const index = `${counter}.`.yellow;
                console.log( `${index} ${description}`);
                counter++;
            }
        })
    }

    completeTasks( ids = [] ) {
        ids.forEach( id => {
            const task = this._list[id];

            if ( !task.completedDate ) {
                task.completedDate = new Date().toISOString();
            }
        }) 
        
        Object.keys(this._list).forEach( id => {
            if( !ids.includes(id) ) {
                const task = this._list[id];
                task.completedDate = null;
            }
        })
    }
}

export {
    Tasks
}