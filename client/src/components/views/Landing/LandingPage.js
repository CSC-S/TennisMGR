/*eslint-disable*/
import React, { useState } from "react";
import MapContainer from "./Sections/MapContainer";
import styled from "styled-components";

function LandingPage() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <form
        style={{ marginLeft: "500px", marginTop: "15px", marginBottom: "10px" }}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={Place} />
    </>
  );
}

export default LandingPage;
