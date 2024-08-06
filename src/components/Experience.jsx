import React from 'react';
import ExperienceClass from './ExperienceClass';

export default class Experience extends React.Component{
    render() {
        const { experience } = this.props;
        return (
            <div className='experience'>
                <h3>{experience.jobTitle}</h3>
                <p>{experience.company}</p>
                <p>{experience.description}</p>
                <p>{experience.startYear}</p>
                <p>{experience.endYear}</p>
                {/*{link && <a href = {gitlink}>View on GitHub</a>} */}
            </div>
        )
    }
}