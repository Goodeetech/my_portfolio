import React, { ReactNode } from "react";

const HeroStar = ({
  children,
  size,
  rotation,
  animationDuration,
}: {
  children: ReactNode;
  size: number;
  rotation: number;
  animationDuration?: number;
}) => {
  return (
    <div
      className={`absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2  `}
    >
      <div
        className="animate-spin "
        style={{
          animationDuration: `${animationDuration}s`,
        }}
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
            className="inline-flex animate-spin [animation-duration:8s]"
            style={{
              transform: `rotate(${rotation * -1}deg) `,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStar;
