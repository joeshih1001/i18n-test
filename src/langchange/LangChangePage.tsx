import { FC } from "react";
import { Link } from "react-router-dom";

export const LangChangePage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
      <Link className="block" to="/zh-tw/home">
        繁體中文頁面
      </Link>
      <Link className="block" to="/zh-cn/home">
        簡體中文頁面
      </Link>
    </div>
  );
};
