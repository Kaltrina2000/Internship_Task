import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Header } from "./Header";
import { OptionPage } from "./OptionPage";

export function Body() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const appStyle = {
    minHeight: "120vh",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const whiteDivStyle = {
    backgroundColor: "white",
    width: "400px",
    height: "600px",
    justifyContent: "center",
    margin: "13px",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
  };

  const innerDivStyle = {
    backgroundColor: "white",
    alignItems: "center",
    display: "flex",
    width: "370px",
    height: "20px",
    border: "2px solid #f0f0f0",
    padding: "15px",
    cursor: "pointer",
    marginBottom: "-12px",
    borderRadius: "5px",
  };
  const arrowStyle = {
    color: "grey",
    fontSize: "16px",
    position: "relative",
    top: "-25px",
    left: "350",
  };

  const handleOptionSelect = (optionName) => {
    setSelectedOption(optionName);
    setStep(2);
  };

  const handleGoBack = () => {
    setSelectedOption(null);
    setStep(1);
  };

  return (
    <div style={appStyle}>
      <Header step={step} />
      {step === 1 ? (
        <div style={whiteDivStyle}>
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Anti Wrinkle Treatment")}
          >
            <img
              src="/assets/images/image-first.png"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Anti Wrinkle Treatment
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Dermal Fillers")}
          >
            <img
              src="/assets/images/image-second.jpg"
              alt="  "
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Dermal Fillers
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Secret RF")}
          >
            <img
              src="/assets/images/image-third.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Secret RF
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Harmony CA")}
          >
            <img
              src="/assets/images/image-fourth.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Harmony CA
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Profhilo")}
          >
            <img
              src="/assets/images/image-fifth.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Profhilo
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Facials")}
          >
            <img
              src="/assets/images/image-sixth.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Facials
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Sclerotherapy")}
          >
            <img
              src="/assets/images/image-first.png"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Sclerotherapy
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div style={innerDivStyle} onClick={() => handleOptionSelect("LED")}>
            <img
              src="/assets/images/image-sixth.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              LED
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Fat Dissolve")}
          >
            <img
              src="/assets/images/image-second.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Fat Dissolve
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
          <div
            style={innerDivStyle}
            onClick={() => handleOptionSelect("Growth Factors")}
          >
            <img
              src="/assets/images/image-third.jpg"
              alt=""
              width="40"
              height="40"
            ></img>

            <p style={{ fontWeight: "500", color: "grey", marginLeft: "20px" }}>
              Growth Factors
            </p>
          </div>
          <ArrowForwardIosIcon style={arrowStyle} />
        </div>
      ) : (
        <>
          <OptionPage option={selectedOption} onBack={handleGoBack} />
          <Header step={step} selectedOption={selectedOption} />
        </>
      )}
      {step === 1 ? (
        <div
          style={{
            backgroundColor: "white",
            width: "400px",
            height: "30px",
            margin: "15px",
            padding: "15px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{ fontSize: "12px", color: "grey", fontWeight: "500" }}>
            Not sure about consultation type? Please, call{" "}
            <a
              href="tel:02037959063"
              style={{ color: "dodgerblue", textDecoration: "none" }}
            >
              {" "}
              0203 7959063
            </a>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
