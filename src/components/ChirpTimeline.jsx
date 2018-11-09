import React from 'react';

const ChirpTimeline = (props) => {
    return (
        <div className="row">
            {props.chirps.map((chirp, index) => {
                return (
                    <div key={index} className="col-md-12">
                        <div className="card text-success bg-secondary m-1 p-1 border-dark">
                            <div className="card-header text-center">{chirp.username} chirped:</div>
                            <h1 className='text-center'>{chirp.chirp}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ChirpTimeline;