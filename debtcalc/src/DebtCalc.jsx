import React from 'react';
import './debtCalcStyles.css';

class DebtCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loan: '',
            interest: '',
            items: [],
            amountOfPayments: '',
            monthlyPayment: '',
        };
    }

handleLoan = ({ target: {value}} ) => this.setState({ loan: value });
handleInterest = ({ target: {value}} ) => this.setState({ interest: value });

handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        loan: this.state.loan,
        interest: this.state.interest,
    }

    this.setState((state) => ({
        items: [...state.items, newItem],
        loan: '',
        interest: '',
    }));
    this.calculateValue(newItem);
    
};

calculateValue = (e) => {
    // Monthly Payment = (Loan Amount * Interest Rate) / (1 - (1 + Interest Rate)^(-Loan Term (in months)))
    let loanAmount = e.loan;
    let interestRate = e.interest / 100;
    let totalInterest = (interestRate / 12) * loanAmount;
    let principalPayment = loanAmount * (1 / 100);
    let monthlyPayment = (totalInterest + principalPayment).toFixed(2);
    let amountOfPayments = loanAmount / principalPayment;
    this.setState({monthlyPayment});
    this.setState({amountOfPayments});

}


render() {
    return (
            <div className='Debt-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-item'>
                        <label> Loan Amount: </label>
                            <div className='form-input'>
                                <input 
                                    onChange={this.handleLoan}
                                    type="number"
                                    autoComplete="off"
                                    value={this.state.loan}
                                />
                            </div>
                    </div>
                    <br/>
                    <div className='form-item'>
                        <label> Interest Rate: </label>
                            <div className='form-input'>
                                <input
                                    onChange={this.handleInterest}
                                    type="number"
                                    autoComplete="off"
                                    value={this.state.interest}
                                />
                            </div>
                    </div>
                    <br/>
                    <div className='form-action'>
                        <input 
                            type="submit"
                            value="calculate"
                            className='calculate-button'
                        />
                    </div>
                </form>
                <br/>
                <div>
                    <h3># of Payments:</h3>
                    {this.state.amountOfPayments}
                    <h3>Payment Amount:</h3>
                    {this.state.amountOfPayments}
                </div>
            </div>)
        };  
};

export default DebtCalc;