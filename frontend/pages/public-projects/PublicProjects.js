import React from 'react';
import AppContext from '../../contexts/AppContext';
import projectsService from '../../services/projectsService';

export default class PublicProjects extends React.Component {
    static requestInitialData() {
        return projectsService.fetchProjects()
            .then(({data}) => data)
            .then((projects) => ({projects}));
    }

    componentDidMount() {
        const {projects, _actions} = this.context;
        if (!projects || projects.length === 0) {
            PublicProjects.requestInitialData()
                .then((data) => _actions.setProjects(data.projects));
        }
    }

    render() {
        const {projects} = this.context;
        return (
            <div>
                {projects.map((item, key) => (
                    <div key={[item.id, key].join('_')}>
                        {item.id}
                    </div>
                ))}
            </div>
        );
    }
}

PublicProjects.contextType = AppContext;
