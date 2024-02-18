import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import backgroundImage from "./images/bg-img.jpg";

function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // const imageURL = `https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg`;
  const swap = () =>{
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div
        className="absolute inset-0 bg-black/30"
        style={{ backdropFilter: 'blur(7px)' }}
        ></div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                  label ="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=> setAmount(amount)}
                  onAmountChange={(amount) =>{
                    setAmount(amount)
                  }}
                  selectCurrency={from}
                />
              </div>
              <div className=" relative w-full h-0.5">
                <button className=" absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label ="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  selectCurrency={to}
                  
                />
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from} to {to}.
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
