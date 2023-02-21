import "./InfoTable.scss";
const InfoTabel = () => {
  return (
    <div className="register__info-table">
      <table className="register__info-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="head-td" rowSpan={2}>
              Presentation & Paper Publication*
            </td>
            <td>US$300 per paper</td>
          </tr>
          <tr>
            <td>US$300 per paper + journal APC (if applied)</td>
          </tr>
          <tr>
            <td className="head-td">
              Presentation & Publication in the Collected Volume**
            </td>
            <td>UZS25,000 per 1 page</td>
          </tr>
          <tr>
            <td className="head-td">Participation and Presentation Only</td>
            <td>Free for everyone. Prior registration is required.</td>
          </tr>
        </tbody>
      </table>
      <p className="register__info-table__def">
        * published by world publishers and submitted for indexation by the
        leading databases.
        <br />
        ** published by the Kimyo International University in Tashkent.
      </p>
    </div>
  );
};

export default InfoTabel;
