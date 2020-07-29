import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts =  () => {
   const respose = jsonplaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS'
    payload: response
  };
};
