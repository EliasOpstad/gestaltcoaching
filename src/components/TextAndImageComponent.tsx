import React from "react";

type Props = {
  imageTitle?: string;
  imageSrc: React.ReactNode;
  altText: string;
  title: string;
  text: React.ReactNode;
  reverseOrder?: boolean;
};

const TextAndImageComponent: React.FC<Props> = ({
  imageTitle,
  imageSrc,
  altText,
  title,
  text,
  reverseOrder = true,
}) => {
  return (
    <div
      className={`flex ${
        reverseOrder ? "flex-row-reverse" : "flex-row"
      } object-cover w-full`}
    >
      <div className="basis-1/2">
        {imageTitle && (
          <h3 className="text-2xl font-bold mb-2">{imageTitle}</h3>
        )}
        {typeof imageSrc === "string" ? (
          <img src={imageSrc} alt={altText} />
        ) : Array.isArray(imageSrc) ? (
          <ul className="list-disc pl-6 space-y-2">
            {imageSrc.map((src, index) => (
              <li key={index}>{src}</li>
            ))}
          </ul>
        ) : (
          imageSrc
        )}
      </div>
      <div className="basis-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        {Array.isArray(text) ? (
          <ul className="list-disc pl-6 space-y-2">
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default TextAndImageComponent;
