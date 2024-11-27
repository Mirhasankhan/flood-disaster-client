import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: object | null | string;
  readOnly?: boolean;
  placeholder?: string;
};

const PHInput = ({
  type,
  name,
  label,
  disabled,
  defaultValue,
  readOnly,
  placeholder,
}: TInputProps) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
              className="bg-transparent  placeholder:text-white pl-10 focus:bg-transparent hover:bg-transparent hover:placeholder:hidden text-white"
              required
              readOnly={readOnly}
              placeholder={placeholder}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
