import React from 'react';

import AppContext from '../contexts/AppContext';
import reducer from '../reducers/appReducer';

const AppState = (props) => {
    let {initialData = {}} = props;
    if (typeof window !== 'undefined') {
        initialData = window.__initialData__ || {}; // eslint-disable-line
        delete window.__initialData__; // eslint-disable-line
    }
    const [state, dispatch] = reducer.createReducer(
        {projects: initialData.projects}
    );

    const setProjects = (projects) => {
        dispatch({
            type: reducer.types.setProjects,
            payload: projects,
        });
    };

    const addProject = (project) => {
        dispatch({
            type: reducer.types.addProject,
            payload: project,
        });
    };

    const actions = {
        setProjects,
        addProject,
    };

    const {children} = props;
    return (
        <AppContext.Provider
            value={{
                projects: state.projects,
                _actions: actions,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppState;
