
import './App.css';
import Header from "./Component/Header"
import Balance from "./Component/Balance"
import AccountSummery from "./Component/AccountSummery"
import TranscationHistory from "./Component/TranscationHistory"
import { AddTransction } from './Component/AddTransction';
import { GlobalProvider } from './Component/Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div className="App">
    <Header/>
    <div className="balanceContainer">
      <div className="incomandaccoutSummery">
      <Balance/>
    
    <AccountSummery/>
    <div className="HistoryContainer">
   <TranscationHistory/>
   </div>
   <div className="addtransaction">
   <AddTransction/>
   </div>
 
    
      </div>
     
    </div>
   
     
   
   
    </div>
    </GlobalProvider>
  );
}

export default App;
