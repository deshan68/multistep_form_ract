import { FormEvent, useState } from "react";
import AccountForm from "./forms/AccountForm";
import AddressForm from "./forms/AddressForm";
import UserForm from "./forms/UserForm";
import { useMultiStepForm } from "./useMultiStepForm";
import "./App.css";

type FormData = {
  name: string;
  dob: string;
  email: string;
  phone_num: string;
  add_1: string;
  add_2: string;
  add_3: string;
  zip: string;
  card_name: string;
  card_num: string;
  ex_date: string;
  security_code: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  dob: "",
  email: "",
  phone_num: "",
  add_1: "",
  add_2: "",
  add_3: "",
  zip: "",
  card_name: "",
  card_num: "",
  ex_date: "",
  security_code: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateField(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const { step, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateField={updateField} />,
      <AddressForm {...data} updateField={updateField} />,
      <AccountForm {...data} updateField={updateField} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div className="main-container">
      <form onSubmit={onSubmit}>
        {/* navigation */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "50%",
            width: "100%",
            transform: "translateX(50%)",
          }}
        >
          <div className="progress-container">
            <div
              style={{
                width: `${((currentStepIndex + 1) / 3) * 100}` + "%",
                backgroundColor: "#4681f4",
                height: "10px",
              }}
            />
          </div>
        </div>

        {/* content */}
        {step}

        {/* buttons */}
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            gap: "1rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back} className="backBtn">
              Back
            </button>
          )}

          <button>{isLastStep ? "Finish" : " Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
