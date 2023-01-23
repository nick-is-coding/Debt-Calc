import React from 'react';

class LoanUpdates extends React.Component {
    constructor() {
        super();
        this.state = { };
    }


    render() {
        return(
            <div>
                <h1>Estimated Monthly Payments!</h1>
                <br/>
                    <div>
                        <h4>Total Principal Paid</h4>
                        <h4>Total Interest Paid</h4>
                        <h4>Remaining Loan Amount</h4>
                    </div>
            </div>
        );
    };
}

export default LoanUpdates;