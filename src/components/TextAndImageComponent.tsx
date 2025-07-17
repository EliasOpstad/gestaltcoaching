import React from "react";

type Props = {
  imageSrc: string;
  altText: string;
  title: string;
  text: string;
  reverseOrder?: boolean;
};

const TextAndImageComponent: React.FC<Props> = ({
  imageSrc,
  altText,
  title,
  text,
  reverseOrder = true,
}) => {
  return (
    <div className={`flex ${reverseOrder ? "flex-row-reverse" : "flex-row"}`}>
      <div className="basis-1/2">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="basis-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextAndImageComponent;
