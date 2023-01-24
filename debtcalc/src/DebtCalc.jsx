import React from 'react';
import LoanUpdates from './LoanUpdates';
import MakePayment from './MakePayment';
import styles from './styles.css';

class DebtCalc extends React.Component {
    constructor() {
        super();
        this.state = { 
            loan: '',
            interest: '',
            term: '',
            items: [],
        };
    }

handleLoan = ({ target: {value}}) => this.setState({ loan: value });
handleInterest = ({ target: {value}}) => this.setState({ interest: value });
handleTerm = ({ target: {value}}) => this.setState({ term: value });

handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        loan: this.state.loan,
        interest: this.state.interest,
        term: this.state.term,
    }

    this.setState((state) => ({
        items: [...state.items, newItem],
        text: '',
    }));
}


    render() {
        return(
            <div>
                <div className='Top-container'>
                    <div className='Debt-container'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Loan Amount:
                                <input 
                                    onChange={this.handleLoan}
                                    type="text"
                                    autoComplete="off"
                                    value={this.state.text}
                                />
                            </label>
                            <br />
                            <label>
                                Interest Rate:
                                <input
                                    onChange={this.handleInterest}
                                    type="text"
                                    autoComplete="off"
                                    value={this.state.text}
                                />
                            </label>
                            <br />
                            <label>
                                Desired Loan Term:
                                <input
                                    onChange={this.handleTerm}
                                    type="text"
                                    autoComplete="off"
                                    value={this.state.text}
                                />
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                        <br/>
                    </div>
                    <div className='Loan-container'>
                        <LoanUpdates/>
                    </div>
                </div>
                     <br/>
                     <MakePayment/>
            </div>
        );
    };
}

export default DebtCalc;

