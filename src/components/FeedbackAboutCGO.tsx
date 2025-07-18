import React from "react";

type Props = {
  title?: string;
  text: string;
  name: string;
};

const FeedbackAboutCGO: React.FC<Props> = ({ title, text, name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 transition hover:shadow-lg">
      {title && (
        <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      )}
      <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
        “{text}”
      </blockquote>
      <div>
        <p className="text-sm text-gray-500 text-right">– {name}</p>
      </div>
    </div>
  );
};

export default FeedbackAboutCGO;
export type { Props as FeedbackAboutCGOProps };
