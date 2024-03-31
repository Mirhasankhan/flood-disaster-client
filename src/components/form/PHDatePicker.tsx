import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

const PHDatePicker = ({ name, label, disabled }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              {...field}
              size="large"
              style={{ width: "100%" }}
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHDatePicker;
