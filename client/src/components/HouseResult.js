import React, {useState, useEffect} from 'react';
import ravenclawImage from "../assets/images/ravenclaw.jpg";
import slytherinImage from "../assets/images/slytherin.jpg";
import gryffindorImage from "../assets/images/gryffindor.jpg";
import hufflepuffImage from "../assets/images/hufflepuff.jpg";

const HouseResult = (props) => {
  const { house } = props;
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (house === "Gryffindor") {
      setUrl(gryffindorImage);
    } else if (house === "Slytherin") {
      setUrl(slytherinImage);
    } else if (house === "Ravenclaw") {
      setUrl(ravenclawImage);
    } else if (house === "Hufflepuff") {
      setUrl(hufflepuffImage);
    }
  }, [house]);

  return (
    <div className="imageBackground" style={{ backgroundImage: "url(" + url + ")" }}></div>
  );
};

export default HouseResult;
