import { FC } from "react";

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
        />
        <input type="number" name="age" defaultValue={23} required />
        <input
          type="radio"
          name="sex"
          value="man"
          defaultChecked
          aria-checked
        />
        <input type="radio" name="sex" value="woman" />
      </form>

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
