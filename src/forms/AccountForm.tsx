import FormWrapper from "./FormWrapper";

type userData = {
  card_name: string;
  card_num: string;
  ex_date: string;
  security_code: string;
};
type userFormProps = userData & {
  updateField: (fields: Partial<userData>) => void;
};
const AccountForm = ({
  card_name,
  card_num,
  ex_date,
  security_code,
  updateField,
}: userFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <div className="field-container">
        <label>Name on Card</label>
        <input
          type="text"
          // required
          value={card_name}
          onChange={(e) => updateField({ card_name: e.target.value })}
          placeholder="Athif Aslam"
        />
      </div>
      <div className="field-container">
        <label>Card Number</label>
        <input
          type="text"
          // required
          value={card_num}
          onChange={(e) => updateField({ card_num: e.target.value })}
          placeholder="1234 7831 1385 1838"
        />
      </div>
      <div className="field-container">
        <label>Expire Date</label>
        <input
          type="text"
          // required
          value={ex_date}
          onChange={(e) => updateField({ ex_date: e.target.value })}
          placeholder="MM/DD"
        />
      </div>
      <div className="field-container">
        <label>Security Code</label>
        <input
          type="text"
          // required
          value={security_code}
          onChange={(e) => updateField({ security_code: e.target.value })}
          placeholder="123"
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
