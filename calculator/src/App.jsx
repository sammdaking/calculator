import { useState } from "react";
import style from "./style.module.scss";
function App() {
  // let numArray = [];
  const [click, setClick] = useState(true);
  const [takeNumber, setTakeNumber] = useState("");
  const [takeNumber2, setTakeNumber2] = useState("");
  const [proccesSymbol, setProccesSymbol] = useState("");

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const procesFuck = (takeNumber, symbol) => {
    setProccesSymbol(symbol);
    setTakeNumber2(takeNumber);
    setTakeNumber("");
  };
  const delFuck = () => {
    setTakeNumber(takeNumber.slice(0, -1));
  };
  const resetFunk = () => {
    setTakeNumber2("");
    setTakeNumber("");
  };
  const addPoint = () => {
    click &&
      setTakeNumber((prevNum) => {
        const value = prevNum + ".";
        setClick(!click);
        setTakeNumber(value);
      });
  };
  const takeNumberFunc = (n) => {
    setTakeNumber((prev) => prev + n);
  };
  //2 sayı ve bir işlem
  const procesResult = (takeNumber, takeNumber2, proccesSymbol) => {
    // const result = `${takeNumber}${proccesSymbol}${takeNumber2}`
    let result = "";
    // short ife geçir
    switch (proccesSymbol) {
      case "+":
        result = (parseFloat(takeNumber2) + parseFloat(takeNumber)).toFixed(2);
        break;
      case "-":
        result = (parseFloat(takeNumber2) - parseFloat(takeNumber)).toFixed(2);
        break;

      case "/":
        result = (parseFloat(takeNumber2) / parseFloat(takeNumber)).toFixed(2);
        break;

      case "x":
        result = (parseFloat(takeNumber2) * parseFloat(takeNumber)).toFixed(2);
        break;
      default:
        break;
    }
    setTakeNumber(result);
    setTakeNumber2("");
  };

  // const operations = ["+", "-", "/", "x", "DEL", "RESET", "=" , "."];
  return (
    <div className={style.container}>
      <div className={style.midSide}>
        <div className={style.themeSide}>
          <h3>Calculator</h3>
        </div>
        <div className={style.screanSide}>
          <div>{`->${takeNumber2}`}</div>
          <div>{takeNumber}</div>
        </div>
        <div className={style.numberSide}>
          {numbers.map((num, i) => (
            <button onClick={() => takeNumberFunc(num)} key={i}>
              {num}
            </button>
          ))}
          <button onClick={() => procesFuck(takeNumber, "+")}>+</button>
          <button onClick={() => procesFuck(takeNumber, "-")}>-</button>
          <button onClick={() => procesFuck(takeNumber, "x")}>x</button>
          <button onClick={() => addPoint()}>.</button>
          <button onClick={() => procesFuck(takeNumber, "/")}>/</button>
          <button onClick={() => delFuck()}>DEL</button>
          <button
            className={style.anotherButtonStyle}
            onClick={() => resetFunk()}
          >
            RES
          </button>
          <button
            className={style.anotherButtonStyle}
            onClick={() => procesResult(takeNumber, takeNumber2, proccesSymbol)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
