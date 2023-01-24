import React from 'react';

class LoanUpdates extends React.Component {
    constructor() {
        super();
        this.state = { 
            // principal: this.state.principal,
            // interest: this.state.interest,
            // loanAmount: this.state.loanAmount,
        };
    }



    render() {
        const { principal } = this.props;
        return(
            <div>
                <h1>Estimated Monthly Payments!</h1>
                    <ul>
                        <li>Total Principal Paid</li>
                        <span>
                            {/* {principal.map((item) => (
                                <span>{principal.paid}</span>
                            ))} */}
                        </span>
                        <li>Total Interest Paid</li>
                        <span></span>
                        <li>Remaining Loan Amount</li>
                        <span></span>
                    </ul>
            </div>
        );
    };
}

export default LoanUpdates;