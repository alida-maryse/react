import React, { Component } from 'react';


class HeartRate extends Component {
    render() {
        return (
            <div className="box col-md-2 col-6" >
                <span style={{"fontSize": "100", "color": "red" }}  class="material-icons">
                    favorite
                </span>


            </div>
        );
    }
}

export default HeartRate;
