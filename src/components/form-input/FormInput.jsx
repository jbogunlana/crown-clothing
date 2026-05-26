import { FormInputLabel, Input, Group } from "../../styles/FormInput";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          // className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
