import { Image } from "antd";
import "./index.css";

const Header = () => {
  return (
    <header
      id="hide-header"
      className="px-2 py-4 xl:px-24 xl:py-4 w-[100%] flex justify-between items-center border top-0 bg-white fixed z-[200]"
    >
      <h2 className="text-3xl mt-2">
        R<span className="text-[var(--primary)]">H</span>
      </h2>
      <Image
        src={
          "https://dbzproperty-a.akamaihd.net/static_assets/dubizzleLogo.svg"
        }
        alt={"Dubizzle Group"}
        width={100}
        preview={false}
        className="inline mb-4"
      />
    </header>
  );
};

export default Header;
