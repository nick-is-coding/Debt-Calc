import React from 'react';
import DebtCalc from './DebtCalc';

class LoanUpdates extends React.Component {
    render() {
        return(
            <div>
                <h1>Estimated Monthly Payments!</h1>
                    <ul>
                        <li>Remaining Payments</li>
                        <span></span>
                        <li>Monthly Payments</li>
                        <span></span>
                    </ul>
            </div>
        );
    };
}

export default LoanUpdates;