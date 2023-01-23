import React from 'react';
import LoanUpdates from './LoanUpdates';
import MakePayment from './MakePayment';

class DebtCalc extends React.Component {
    constructor() {
        super();
        this.state = { };
    }


    render() {
        return(
            <div>
                <label htmlFor="newFinance">Calculate your debt!</label>
                <br/>
                    <form>
                        <label>
                            Loan Amount:
                            <input type="text" name="name"/>
                        </label>
                        <br />
                        <label>
                            Interest Rate:
                            <input type="text" name="interest-rate"/>
                        </label>
                        <br />
                        <label>
                            Desired Loan Term:
                            <input type="text" name="desired-term" placeholder="monthly"/>
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                     </form>
                     <br/>
                     <LoanUpdates/>
                     <br/>
                     <MakePayment/>
            </div>
        );
    };
}

export default DebtCalc;

