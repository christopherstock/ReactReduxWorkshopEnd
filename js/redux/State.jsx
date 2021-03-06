/**
*   Defines the global application state.
*
*   @author  Christopher Stock
*   @version 1.0
*/
class State
{
    /**
    *   Creates a new application state object.
    *
    *   @param {string[]} taskList The task list as an array.
    */
    constructor( taskList = [] )
    {
        this.taskList = taskList;
    }
}