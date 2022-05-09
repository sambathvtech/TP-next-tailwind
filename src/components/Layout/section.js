import React from 'react';

const SectionDefualt = ({ align, children }) => {
  return <section className={`text-white mb-20 ${align}`}>{children}</section>;
};

const SectionColor = ({ bgColor, rounded, align, children }) => {
  return (
    <section className={`text-gray-700 space-y-4 my-5 ${bgColor} ${rounded} ${align}`}>
      {children}
    </section>
  );
};

export default function Section({ type, children, bgColor, rounded, align }) {
  const props = {
    type,
    children,
    bgColor,
    rounded,
    align,
  };

  switch (type) {
    case 'color':
      return SectionColor(props);
    default:
      return SectionDefualt(props);
  }
}
