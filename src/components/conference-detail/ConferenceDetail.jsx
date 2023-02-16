//tools
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//SCSS
import "./ConferenceDetail.scss";

//BASE_URL
const BASE_URL = "https://conference.alltravel.uz/apps";

const ConferenceDetail = () => {
  const { conferenceId } = useParams();
  const [conferenceItem, setConferenceItem] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const RESPONSE = await axios.get(
          `${BASE_URL}/conference/retrieve/${conferenceId}`
        );
        if (RESPONSE.status === 200) {
          setConferenceItem(RESPONSE.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [conferenceId]);
  console.log(conferenceItem);

  return (
    <section>
      <div className="container"></div>
    </section>
  );
};

export default ConferenceDetail;
