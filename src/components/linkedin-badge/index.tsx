import { Image } from "antd";
import { profile } from "../../assets";

const LinkedinBadge = () => {
  return (
    <figure className="p-10 border-2 border-[var(--background)] flex flex-col items-center justify-center rounded-full">
      <Image
        width={200}
        src={profile}
        preview={false}
        className="rounded-full"
      />
    </figure>
  );
};

export default LinkedinBadge;
