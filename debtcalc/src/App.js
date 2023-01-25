import './App.css';
import DebtCalc from './DebtCalc';
// import LoanUpdates from './LoanUpdates';
// import MakePayment from './MakePayment';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Calculate your Debt!</h1>
        <DebtCalc/>
        {/* <LoanUpdates data={this.props.items}/> */}
        {/* <MakePayment/> */}
      </header>
    </div>
  );
};

export default App;
