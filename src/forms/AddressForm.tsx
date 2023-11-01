import FormWrapper from "./FormWrapper";

type userData = {
  add_1: string;
  add_2: string;
  add_3: string;
  zip: string;
};
type userFormProps = userData & {
  updateField: (fields: Partial<userData>) => void;
};
const AddressForm = ({
  add_1,
  add_2,
  add_3,
  zip,
  updateField,
}: userFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <div className="field-container">
        <label>Address line 1</label>
        <input
          type="text"
          // required
          value={add_1}
          onChange={(e) => updateField({ add_1: e.target.value })}
          placeholder="Street address"
        />
      </div>

      <div className="field-container">
        <label>Address line 1</label>
        <input
          type="text"
          // required
          value={add_2}
          onChange={(e) => updateField({ add_2: e.target.value })}
          placeholder="Rd, Mwt, etc"
        />
      </div>

      <div className="field-container">
        <label>Address line 3</label>
        <input
          type="text"
          // required
          value={add_3}
          onChange={(e) => updateField({ add_3: e.target.value })}
          placeholder="City"
        />
      </div>

      <div className="field-container">
        <label>Zip code</label>
        <input
          type="text"
          // required
          value={zip}
          onChange={(e) => updateField({ zip: e.target.value })}
          placeholder="12345"
        />
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
