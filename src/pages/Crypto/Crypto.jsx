import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { getCrypto } from "../../api/external";
import styles from "./Crypto.module.css";

function Crypto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // IIFE: immediately invoked function expression
    (async function cryptoApiCall() {
      const response = await getCrypto();
      setData(response);
      console.log("data", data);
      // console.log("data[0] ", data[0]);
      // const parsedData = JSON.parse(data[0].responseText);
      // console.log("parsedData ", parsedData);
      // console.log("data[0].code ", data[0].);

    })();

    // Cleanup
    setData([]);
  }, []);

  if (data.length === 0) {
    return <Loader text="crytocurrenices" />;
  }

  const negativeStyle = {
    color: "#ea3943",
  };

  const positiveStyle = {
    color: "#16c784",
  };

  return (
    // <h1>currencies</h1>
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>#</th>
          <th>Currency</th>
          <th>Code</th>
          <th>Symbol</th>
          <th>Decimal Digits</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>

        {data.map((coin, index) => (

          <tr id={coin} className={styles.tableRow}>
            <td>{index + 1}</td>
            <td>{coin.name}</td>
            {/* <td>{coin.name_plural}</td> */}
            <td>{coin.code}</td>
            <td>
              <div className={styles.symbol}>{coin.symbol}</div>
            </td>
            <td>{coin.decimal_digits}</td>
            <td>{coin.type}</td>
            {/* <td>
              <div className={styles.logo}>
                <img src={coin.image} width={40} height={40} /> {coin.name}
              </div>
            </td> */}

            {/* <td>{coin.current_price}</td> */}
            {/* <td
              style={
                coin.price_change_percentage_24h < 0
                  ? negativeStyle
                  : positiveStyle
              }
            >
              {coin.price_change_percentage_24h}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Crypto;
