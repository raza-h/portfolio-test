import { Spin } from "antd";
import { FC } from "react";

const Loader: FC<{ left: string | number }> = ({ left }) => {
  return (
    <div
      className={`h-[100vh] w-[100%] absolute z-[300] bg-white transition-all flex justify-center items-center`}
      style={{ left }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loader;
