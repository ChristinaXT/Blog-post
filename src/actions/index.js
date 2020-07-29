import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS'
  };
};
