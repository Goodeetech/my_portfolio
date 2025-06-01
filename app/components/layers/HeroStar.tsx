import React, { ReactNode } from "react";

const HeroStar = ({
  children,
  size,
  rotation,
}: {
  children: ReactNode;
  size: number;
  rotation: number;
}) => {
  return (
    <div
      className={`absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 animate-spin [animation-duration:20s] `}
    >
      <div
        className=" size-fit "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex animate-spin [animation-duration:10s]"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroStar;
