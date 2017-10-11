import sideBarMocks from '../../__mocks__/sideBarMocks';

export const loadSidebar = pageName => (
  new Promise((resolve, reject) => {
    resolve(sideBarMocks[pageName]);
  })
);
