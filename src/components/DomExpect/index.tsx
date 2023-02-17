import { FC } from "react";
import { Form } from "@douyinfe/semi-ui";

interface IProps {}

export const DomExpect: FC<IProps> = ({}) => {
  return (
    <div>
      {/* 是否可见断言 */}
      <div aria-label="empty_note"></div>
      <div role="note" style={{ display: "none" }} aria-hidden>
        1234
      </div>
      <div role="note">1234</div>

      {/* 表单验证 */}
      <form aria-label="form">
        <input
          type="text"
          name="username"
          disabled
          aria-disabled
          defaultValue="alien"
          aria-label="form_username"
        />
        <input
          type="number"
          name="age"
          defaultValue={23}
          required
          aria-label="form_age"
        />
        <input
          type="radio"
          name="sex"
          value="man"
          defaultChecked
          aria-checked
          aria-label="form_sex"
        />
        <input type="radio" name="sex" value="woman" aria-label="form_sex" />
      </form>

      {/* semi表单验证 */}
      <Form
        initValues={{ username: "alien", age: 23, sex: "man", hobby: "code" }}
        aria-label="semi-form"
      >
        <Form.Input field="username" disabled name="username" />
        <Form.InputNumber field="age" required name="age" />
        <Form.RadioGroup field="sex" name="sex">
          <Form.Radio value="man" />
          <Form.Radio value="woman" />
        </Form.RadioGroup>
        <Form.Select field="hobby" name="hobby">
          <Form.Select.Option value="code">code</Form.Select.Option>
          <Form.Select.Option value="read">read</Form.Select.Option>
        </Form.Select>
      </Form>
      {/* 代码层面验证 */}
      <div
        role="note"
        style={{ display: "none" }}
        className="test hidden"
        aria-hidden
      >
        1234
      </div>
    </div>
  );
};
