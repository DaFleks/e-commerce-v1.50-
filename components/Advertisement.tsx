"use client";

import clsx from "clsx";

const Advertisement = ({
  children,
  backgroundImage,
  className = "",
}: {
  children?: React.ReactNode;
  backgroundImage: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx("bg-fixed p-8 h-[300px] flex justify-center flex-col gap-4 relative shadow-[0px_0px_15px_-4px_rgba(0,0,0,0.75)]", className)}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPositionY: "100%", backgroundPositionX: "70%" }}
    >
      {children}
    </div>
  );
};

export default Advertisement;
