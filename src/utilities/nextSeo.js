import { useRouter } from 'next/router';
import { navbarBtnsData } from '../constants/navbarBtn';

export const nextSeo = () => {
  const route = useRouter();
  const urlPath = route.pathname;
  const arr = navbarBtnsData.slice();

  let newArr = {};

  arr.map((load) => {
    if (load.linkTo === (urlPath === '/' ? '/' : `${urlPath}/`)) {
      newArr = {
        ...load,
        seo: {
          ...load.seo,
          title: `${load.seo.title} WG滙遊會`,
        },
      };
    }
    load.childs.map((load1) => {
      if (load1.linkTo === (urlPath === '/' ? '/' : `${urlPath}/`)) {
        newArr = {
          ...load1,
          seo: {
            ...load1.seo,
            title: `${load.seo.title} ${load1.seo.title} WG滙遊會`,
          },
        };
      }
      return null;
    });
    return null;
  });

  return newArr;
};
