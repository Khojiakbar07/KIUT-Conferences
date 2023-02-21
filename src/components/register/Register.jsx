import InfoTable from "./info-table/InfoTable";
import "./Register.scss";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="register-inner">
          <h3 className="register-title line">Registration</h3>
          <p className="register-text">
            All registrations and submissions are managed through the Research
            Advances submission system that guides you stepwise through the
            process of entering data about forum participants and uploading your
            files. To ensure that manuscripts are correctly assigned to the
            track, participants must select the appropriate event option when
            reaching the Event Selection step during submission. Please note
            that the papers registered with the Research Advances platform will
            be carefully peer reviewed and, if accepted, published in the
            appropriate forum proceedings, edited book volumes, or partner
            journals as full articles. These papers will be submitted for
            indexation by the leading databases (including Scopus, Web of
            Science). If one would like to participate in the forum with
            publication of the presented papers in the proceedings published by
            the Kimyo International University in Tashkent, it is required to
            register on the forum webpage and upload an original paper. Once
            again, please note that this volume is not submitted for further
            indexation by the leading databases
          </p>
          <InfoTable />
        </div>
      </div>
    </section>
  );
};

export default Register;
