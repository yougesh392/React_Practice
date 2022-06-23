import { React } from "react";
import { useForm } from "./useForm";
const FormUsage = () => {
  const [values, handleValues] = useForm({ email: "", password: "" });
  //   const [values2, handleValues2] = useForm({ firstName: "", lastName: "" });
  return (
    <div>
      <>
        <input value={values.email} name="email" onChange={handleValues} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleValues}
        />
      </>
    </div>
  );
};
export default FormUsage;
