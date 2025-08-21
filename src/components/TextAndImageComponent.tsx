import React from "react";
import {
  H1_SIZE,
  H2_SIZE,
  HEADING_FONT,
  BODY_FONT,
  FONT_WEIGHT_BOLD,
  MEDIUM_PADDING,
  SMALL_MARGIN,
  MEDIUM_MARGIN,
  TEXT_COLOR,
} from "../styles/variables";

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
          <h1
            style={{
              fontSize: H1_SIZE,
              fontFamily: HEADING_FONT,
              fontWeight: FONT_WEIGHT_BOLD,
              marginBottom: SMALL_MARGIN,
              color: TEXT_COLOR,
            }}
          >
            {imageTitle}
          </h1>
        )}
        {typeof imageSrc === "string" ? (
          <img src={imageSrc} alt={altText} />
        ) : Array.isArray(imageSrc) ? (
          <ul
            style={{
              paddingLeft: MEDIUM_PADDING,
              color: TEXT_COLOR,
              fontFamily: BODY_FONT,
            }}
            className="list-disc space-y-2"
          >
            {imageSrc.map((src, index) => (
              <li key={index}>{src}</li>
            ))}
          </ul>
        ) : (
          imageSrc
        )}
      </div>
      <div style={{ padding: MEDIUM_PADDING }} className="basis-1/2">
        <h2
          style={{
            fontSize: H2_SIZE,
            fontFamily: HEADING_FONT,
            fontWeight: FONT_WEIGHT_BOLD,
            marginBottom: MEDIUM_MARGIN,
            color: TEXT_COLOR,
          }}
        >
          {title}
        </h2>
        {Array.isArray(text) ? (
          <ul
            style={{
              paddingLeft: MEDIUM_PADDING,
              color: TEXT_COLOR,
              fontFamily: BODY_FONT,
            }}
            className="list-disc space-y-2"
          >
            {React.Children.toArray(text).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : typeof text === "string" || typeof text === "number" ? (
          <p style={{ color: TEXT_COLOR, fontFamily: BODY_FONT }}>{text}</p>
        ) : (
          // anything that's not a plain string/number gets a block wrapper
          <div
            className="prose max-w-none"
            style={{ color: TEXT_COLOR, fontFamily: BODY_FONT }}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAndImageComponent;
