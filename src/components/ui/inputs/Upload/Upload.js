import recieve from "../../../../assets/icons/recieve.svg";
import { useState } from "react";
export default function Upload({ text = "dsadsad" }) {
  const [name, setName] = useState(text);
  function handleChange(e) {
 
    const getName = e.target.value.split("\\");
    setName(getName[getName.length - 1]);
  }
  return (
    <div className="upload">
      <input
        type="file"
        onChange={(e) => handleChange(e)}
        id="upload"
        title=""
      />
      <label htmlFor="upload"></label>
      <div className="row center-y gap-5">
        <img width={17} height={17} src={recieve} alt="reviece" />
        <span className="xxsmall-text text-main text-gray">{name}</span>
      </div>
    </div>
  );
}
