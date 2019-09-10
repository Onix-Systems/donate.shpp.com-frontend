import {createReducerFactory} from './reducersHelpers';

const types = {
    setProjects: 'SET_PROJECTS',
    addProject: 'ADD_PROJECT',
};

const initialState = {
    projects: []
};

const setProjects = (projects, state) => {
    return {
        ...state,
        projects
    };
};

const addProject = (project, state) => {
    return {
        ...state,
        projects: [...state.projects, project]
    };
};

const reducer = (state, {type, payload}) => {
    switch (type) {
        case types.setProjects:
            return setProjects(payload, state);
        case types.addProject:
            return addProject(payload, state);
        default:
            return state;
    }
};

const returnObject = {
    reducer,
    types,
    initialState,
    createReducer: createReducerFactory(reducer, initialState),
};

export default returnObject;
