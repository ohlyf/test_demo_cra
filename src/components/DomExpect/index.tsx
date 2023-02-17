import { FC } from "react";

interface IProps {}

export const DomExpect: FC<IProps> = ({}) => {
  return (
    <div>
      <div aria-label="empty_note"></div>
      <div role="note" style={{ display: "none" }} aria-hidden>
        1234
      </div>
      <div role="note">1234</div>
    </div>
  );
};
