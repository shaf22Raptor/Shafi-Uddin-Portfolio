import React from 'react';
import ProjectClass from './ProjectClass';

export default class Project extends React.Component {
    render() {
        const { project, screenSize } = this.props;
        return (
            <div className='record'>
                {screenSize.screenSize == "medium" ? (
                    <div className='project'>
                        <div className='description'>
                            <a href="https://www.google.com/search?q=hello&sourceid=chrome&ie=UTF-8">{project.title}</a>
                            <div className='image' style={{
                                display: "flex",
                                justifyContent: "left"
                            }}>
                                <img src={project.previewImage} alt={project.imagePlaceHolder} />
                            </div>
                            <p style={{ textAlign: "left" }}>{project.description}</p>
                            <div className='skills-used'>
                                {project.languages.map((language, index) => (
                                    <p key={index}>{language}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
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
                    </div>
                )
                }
            </div>
        )
    }
}
