import React from 'react';
import ProjectClass from './ProjectClass';

export default class Project extends React.Component {
    render() {
        const { project } = this.props;
        return (
            <div className='project'>
                <div className='description'>
                    <a href="https://www.google.com/search?q=hello&sourceid=chrome&ie=UTF-8">{project.title}</a>
                    <p style={{ textAlign: "justify" }}>{project.description}</p>
                    <div className='skills-used'>
                        {project.languages.map((language, index) => (
                            <p key={index}>{language}</p>
                        ))}
                    </div>
                </div>
                <div className='image'>
                    <img src={project.previewImage} alt={project.imagePlaceHolder} />
                </div>

                {/*{link && <a href = {gitlink}>View on GitHub</a>} */}
            </div>
        )
    }
}



