import React from 'react';

const ContainerDefualt = (children) => {
  return <div className='p-5 pt-7 space-y-4 xl:w-4/5 2xl:w-2/5 mx-auto mb-8'>{children}</div>;
};

export default function Container({ type, children }) {
  switch (type) {
    default:
      return ContainerDefualt(children);
  }
}
