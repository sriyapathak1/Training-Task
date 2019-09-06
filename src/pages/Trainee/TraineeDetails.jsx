import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import TrainneList from './TraineeList';
import trainees from './data/trainee';

class TraineeDetails extends Component {
    render() {
        return (
            <div>
              <Link to={`/trainees`} className="link">
                    <TrainneList />
                </Link>
            </div>
        )
    }
}

export default TraineeDetails;
