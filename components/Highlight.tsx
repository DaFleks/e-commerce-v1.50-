"use client";

const Highlight = ({ icon = <></>, title = "", text = "" }: { icon?: React.ReactNode; title?: string; text?: string }) => {
  return (
    <div className="bg-amber-800 text-center p-4 select-none shadow-[0px_0px_15px_-4px_rgba(0,0,0,0.75)]">
      <div className="w-fit mx-auto mb-4">{icon}</div>
      <p className="text-xl mb-4">{title}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Highlight;
