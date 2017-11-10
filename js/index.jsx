// specify the application title
const APPLICATION_TITLE = "React Task List";

// set page title
document.title = APPLICATION_TITLE;

// reference the main container
let mainContainer = document.getElementById( "mainContainer" );

// create redux store
let store = Redux.createStore( Reducer.globalReducer );

store.dispatch( Action.createTask( "Müll rausbringen" ) );
store.dispatch( Action.createTask( "Abwaschen"        ) );
store.dispatch( Action.createTask( "Wäsche waschen"   ) );
store.dispatch( Action.moveTaskUp( 2 ) );
store.dispatch( Action.deleteTask( 0 ) );

// render the App component into the main container
ReactDOM.render(

    <ReactRedux.Provider store={ store }>

        <App
            title={ APPLICATION_TITLE }
        />

    </ReactRedux.Provider>,
    mainContainer
);