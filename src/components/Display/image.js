import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

const DefaultImage = ({
  src,
  alt,
  height,
  width,
  layout,
  objectFit,
  defaultImageBlStyle,
  defaultImageStyle,
}) => {
  return (
    <div className={`${height} ${width} ${defaultImageBlStyle}`}>
      <NextImage
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        className={defaultImageStyle}
      />
    </div>
  );
};

const ImageLink = ({
  src,
  alt,
  height,
  width,
  linkTo,
  layout,
  objectFit,
  defaultImageBlStyle,
  defaultImageStyle,
}) => {
  return (
    <NextLink href={linkTo}>
      <a title={alt}>
        <DefaultImage
          src={src}
          alt={alt}
          height={height}
          width={width}
          layout={layout}
          objectFit={objectFit}
          defaultImageBlStyle={defaultImageBlStyle}
          defaultImageStyle={defaultImageStyle}
        />
      </a>
    </NextLink>
  );
};

export default function Image({
  type,
  src,
  alt,
  height = 'h-40',
  width = 'w-96',
  linkTo,
  layout = 'fill',
  objectFit = 'cover',
  defaultImageBlStyle = 'relative',
  defaultImageStyle = 'absolute z-10',
}) {
  const props = {
    type,
    src,
    alt,
    height,
    width,
    linkTo,
    layout,
    objectFit,
    defaultImageBlStyle,
    defaultImageStyle,
  };

  switch (type) {
    case 'link':
      return ImageLink(props);
    default:
      return DefaultImage(props);
  }
}
