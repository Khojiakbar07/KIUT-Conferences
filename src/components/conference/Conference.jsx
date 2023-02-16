//tools
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//SCSS
import "./Conference.scss";
// component
import ConferenceCard from "./conference-card/ConferenceCard";

//BASE URL
const BASE_URL = "https://conference.alltravel.uz/apps";

const Conference = () => {
  const [conferencesArr, setConferencesArr] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const RESPONSE = await axios.get(`${BASE_URL}/conference/list/`);
        if (RESPONSE.status === 200) {
          setConferencesArr(RESPONSE.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(conferencesArr);
  return (
    <section className="conference">
      <div className="container">
        {conferencesArr?.length > 0 &&
          conferencesArr.map((conferenceData) => (
            <ConferenceCard key={uuidv4()} conference={conferenceData} />
          ))}
      </div>
    </section>
  );
};

export default Conference;
