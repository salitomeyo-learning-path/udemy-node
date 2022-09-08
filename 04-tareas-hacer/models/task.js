import { v4 as uuidv4 } from 'uuid';

class Task {
    id = '';
    description = '';
    completedDate = null;

    constructor( description ) {
        this.id = uuidv4();
        this.description = description;
        this.completedDate = null;
    }
}

export {
    Task
}
