import React from 'react';
import { Trans } from 'react-i18next';
import { nextSeo } from '../../utilities/nextSeo';

const Header1 = ({ defaultStyle, exStyle, align, transContent, children, content, color }) => {
  return (
    <h1 className={`text-7xl ${defaultStyle} ${exStyle} ${align} ${color}`}>
      {content ? <Trans i18nKey={transContent} /> : children}
    </h1>
  );
};

const Header2 = ({ defaultStyle, exStyle, align, color, content, transContent, children }) => {
  return (
    <h2 className={`text-6xl ${defaultStyle} ${exStyle} ${align} ${color}`}>
      {content ? <Trans i18nKey={transContent} /> : children}
    </h2>
  );
};

const Header3 = ({ defaultStyle, exStyle, align, color, content, transContent, children }) => {
  return (
    <h3 className={`text-5xl ${defaultStyle} ${exStyle} ${align} ${color}`}>
      {content ? <Trans i18nKey={transContent} /> : children}
    </h3>
  );
};

const Header4 = ({ defaultStyle, exStyle, align, color, content, transContent, children }) => {
  return (
    <h4 className={`text-4xl ${defaultStyle} ${exStyle} ${align} ${color}`}>
      {content ? <Trans i18nKey={transContent} /> : children}
    </h4>
  );
};

export default function Title({
  level,
  children,
  align,
  content,
  color = 'text-white',
  defaultStyle = 'font-bold',
  exStyle = '',
}) {
  const tranlatePath = nextSeo();
  const transContent = tranlatePath.transPath + content;

  const props = {
    level,
    children,
    align,
    content,
    transContent,
    defaultStyle,
    exStyle,
    color,
  };

  switch (level) {
    case 1:
      return Header1(props);
    case 2:
      return Header2(props);
    case 3:
      return Header3(props);
    case 4:
      return Header4(props);
    default:
      return Header1(props);
  }
}
