import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h2
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
