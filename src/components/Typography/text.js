import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { BiStar } from 'react-icons/bi';
import { transClassName } from '../../utilities/i18n';
import { nextSeo } from '../../utilities/nextSeo';

const TextDefualt = ({ padding, color, size, type, content, transContent, children, align }) => {
  return (
    <p
      className={transClassName(
        `${padding} ${color} ${size} ${align} ${type === 'bold' && 'font-bold'}`
      )}
    >
      {content ? <Trans i18nKey={transContent} /> : children}
    </p>
  );
};

const TextWithLink = ({ href, content, transContent, children }) => {
  const { t } = useTranslation();
  return (
    <a
      href={href || '#'}
      className={transClassName('text-red-link underline')}
      title={content ? t(transContent) : children}
    >
      {content ? <Trans i18nKey={transContent} /> : children}
    </a>
  );
};

const TextWithIcon = ({ padding, color, size, type, content, transContent, children }) => {
  return (
    <div className='flex items-center'>
      <div className='pr-5'>
        <BiStar size={24} className='text-blue-400' />
      </div>
      <div>
        <p
          className={transClassName(
            `${padding} ${color} ${size} ${type === 'bold' && 'font-bold'}`
          )}
        >
          {content ? <Trans i18nKey={transContent} /> : children}
        </p>
      </div>
    </div>
  );
};

const TextInline = ({ padding, color, size, type, content, transContent, children }) => {
  return (
    <span
      className={transClassName(`${padding} ${color} ${size} ${type === 'bold' && 'font-bold'}`)}
    >
      {content ? <Trans i18nKey={transContent} /> : children}
    </span>
  );
};

const TextWithImage = ({
  bgStyle,
  image,
  alt = 'not-found',
  imageSize,
  imageSizeHeight,
  padding,
  color,
  size,
  type,
  content,
  transContent,
  children,
}) => {
  return (
    <div className={`${bgStyle}`}>
      <img
        className='inline mx-2'
        src={image}
        alt={alt}
        title={alt}
        width={imageSize}
        height={imageSizeHeight}
      />
      <span
        className={transClassName(`${padding} ${color} ${size} ${type === 'bold' && 'font-bold'}`)}
      >
        {content ? <Trans i18nKey={transContent} /> : children}
      </span>
    </div>
  );
};

export default function Text({
  children,
  type,
  href,
  hrefTitle,
  content,
  align,
  bgStyle = 'flex-1 text-center',
  image = '',
  alt = 'simple',
  imageSize = 14,
  imageSizeHeight = '',
  color = 'text-white',
  size = 'text-md',
  padding = 'py-3',
}) {
  const tranlatePath = nextSeo();
  const transContent = tranlatePath.transPath + content;

  const props = {
    children,
    type,
    href,
    hrefTitle,
    content,
    align,
    bgStyle,
    image,
    alt,
    imageSize,
    imageSizeHeight,
    transContent,
    padding,
    color,
    size,
  };

  switch (type) {
    case 'inline':
      return TextInline(props);
    case 'icon':
      return TextWithIcon(props);
    case 'bold':
      return TextDefualt(props);
    case 'link':
      return TextWithLink(props);
    case 'image':
      return TextWithImage(props);
    default:
      return TextDefualt(props);
  }
}
