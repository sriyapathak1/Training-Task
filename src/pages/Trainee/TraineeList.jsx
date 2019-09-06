import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import trainees from './data/trainee';

 class TraineeList extends Component {
    
    render() {
        const { match } =this.props;
        return (
            <div>
                <ul>
                
                    {trainees.map(field => (
                        <Link to={ field.id} key={field.name}> 
                        <li>{field.name} </li>
                         </Link>
                     ) ) }
                </ul>
            </div>
        )
    }
}

// renderTrainee = (trainee) => {
//     const { match } =this.props;
//     return (
//         <li>
//             <Link to={`${match.path}/${trainee.id}`}>
//             {trainee.name}
//             </Link>
//         </li>
//     )
// }

export default TraineeList;
