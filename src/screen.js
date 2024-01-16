import React, { useState } from "react";

const Screen = () => {
  let [valu, setValu] = useState("0");

  const handleCalculation = (e) => {
    if(valu.length===1 && valu==='0'){
      valu='';
    }
    
    console.log(e.target.name);

    valu += e.target.name;
    
    setValu(valu);
  };

  const backspaceCalculation=()=>{
      setValu(valu.slice(0,-1));
      if(valu.length===1){
        setValu('0');
      }

  }

  const clearCalculation = () => {
    setValu("0");
  };

  const calculate = () => {
    try {
      setValu(eval(valu).toFixed(2));
    } catch (error) {
      setValu("Error");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center  h-[150px] items-center mt-11 ">
        <div className="w-[450px] h-[150px] bg-black flex justify-center items-center rounded-t-lg ">
          <div className="w-[425px] h-[130px] bg-[#24273b] flex justify-center items-center">
            <input
              type="text"
              value={valu}
              readOnly
              className="bg-[#24273b] text-white w-[415px] h-[120px] text-5xl p-2 text-right"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center  h-[550px] ">
        <div className="w-[450px] h-[450px] bg-black grid grid-cols-4 rounded-b-lg">
          <button
            name="C"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={clearCalculation}
          >
            Clear
          </button>
          <button
            name="+-"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={backspaceCalculation}
          >
            C
          </button>
          <button
            name="%"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            %
          </button>
          <button
            name="/"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            /
          </button>

          <button
            name="7"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            7
          </button>
          <button
            name="8"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            8
          </button>
          <button
            name="9"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            9
          </button>
          <button
            name="*"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            X
          </button>
          <button
            name="4"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            4
          </button>
          <button
            name="5"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            5
          </button>
          <button
            name="6"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            6
          </button>
          <button
            name="-"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            -
          </button>
          <button
            name="1"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            1
          </button>
          <button
            name="2"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            2
          </button>
          <button
            name="3"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            3
          </button>
          <button
            name="+"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            +
          </button>
          <button
            name="0"
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            0
          </button>
          <button
            name="."
            className="text-white bg-violet-400 m-2 rounded-md text-2xl"
            onClick={handleCalculation}
          >
            .
          </button>
          <button
            className="text-white col-span-2 m-2 rounded-md text-2xl bg-red-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen;
