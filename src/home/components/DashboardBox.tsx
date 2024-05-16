import { FC } from "react";
import { MdArrowRightAlt } from "react-icons/md";

interface Props {
  title: string;
  button: string;
  pointBoxTitle: string;
  onPoint: (title: string) => void;
  onPointOut: () => void;
}

export const DashBoardBox: FC<Props> = ({
  title,
  button,
  onPoint,
  onPointOut,
  pointBoxTitle,
}) => {
  return (
    <div
      className="rounded-2xl bg-white p-8 cursor-pointer"
      key={title}
      onMouseEnter={() => onPoint(title)}
      onMouseLeave={()=>onPointOut()}
    >
      <p className="text-font28w500">{title}</p>
      <div>
        <p>{button}</p>
        <div
          className={`text-2xl transition duration-300 ${
            title === pointBoxTitle ? "translate-x-6" : ""
          }`}
        >
          <MdArrowRightAlt />
        </div>
      </div>
    </div>
  );
};
