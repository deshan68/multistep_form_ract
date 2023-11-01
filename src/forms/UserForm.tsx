import FormWrapper from "./FormWrapper";

type userData = {
  name: string;
  dob: string;
  email: string;
  phone_num: string;
};
type userFormProps = userData & {
  updateField: (fields: Partial<userData>) => void;
};
const UserForm = ({
  name,
  dob,
  email,
  phone_num,
  updateField,
}: userFormProps) => {
  return (
    <FormWrapper title="Personal Information">
      <div className="field-container">
        <label>Name</label>
        <input
          type="text"
          // required
          value={name}
          onChange={(e) => updateField({ name: e.target.value })}
          placeholder="Enter your First and Last name"
        />
      </div>

      <div className="field-container">
        <label>Date of Birth</label>
        <input
          type="text"
          // required
          value={dob}
          onChange={(e) => updateField({ dob: e.target.value })}
          placeholder="DD/MM/YYY"
        />
      </div>
      <div className="field-container">
        <label>Email</label>
        <input
          type="email"
          // required
          value={email}
          onChange={(e) => updateField({ email: e.target.value })}
          placeholder="email@gmail.com"
        />
      </div>

      <div className="field-container">
        <label>Phone Number</label>
        <input
          type="text"
          // required
          value={phone_num}
          onChange={(e) => updateField({ phone_num: e.target.value })}
          placeholder="+94 77 123 456"
        />
      </div>
    </FormWrapper>
  );
};

export default UserForm;
