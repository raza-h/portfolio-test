import { Image } from "antd";
import { Suspense, useEffect } from "react";
import { profile } from "../../assets";

const LinkedinBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <figure className="p-10 border-2 border-[var(--background)] flex flex-col items-center justify-center rounded-full">
          <Image
            width={200}
            src={profile}
            preview={false}
            className="rounded-full"
          />
        </figure>
      }
    >
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="razah1214"
        data-version="v1"
      ></div>
    </Suspense>
  );
};

export default LinkedinBadge;
