import "./BankTable.scss";

const BankTable = () => {
  return (
    <table className="register__bank-table">
      <thead>
        <tr>
          <th colSpan={2}>TIPF 2023 Bank Account Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="head-td">Bank</td>
          <td>Ipak Yo'li Bank</td>
        </tr>
        <tr>
          <td className="head-td">Account No..</td>
          <td>2020 8000 0009 0096 3002</td>
        </tr>
        <tr>
          <td className="head-td">Swift Code</td>
          <td>01028</td>
        </tr>
        <tr>
          <td className="head-td">Bank Address</td>
          <td>
            100100, Toshkent c., Yakkasaroy district, street. Usmon Nosir, 5
          </td>
        </tr>
        <tr>
          <td className="head-td">Branch</td>
          <td>Yakkasaroy Branch</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BankTable;
