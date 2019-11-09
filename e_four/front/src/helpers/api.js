import axios from 'axios';

const HOST = {
  prod: '/api/', 
  dev: 'http://localhost:4000/api/', 
};
// let which = new Promise((resolve, _) => {
//   ['prod', 'dev'].forEach((x) => {
//     axios.get(HOST[x] + 'status')
//       .then(() => {
//         resolve(x);
//       })
//       .catch(() => {});
//   });
// });
const which = 'prod';

const postBlog = async (id, content) => {
  return (
    await axios.post(HOST[await which] + 'set', { id, content })
  ).data;
};

const getBlog = async (id) => {
  return (
    await axios.get(HOST[await which] + 'blog/' + id)
  ).data;
};

const getAll = async function () {
  return (
    await axios.get(HOST[await which] + 'blogs')
  ).data;
};

export {
  postBlog, 
  getBlog, 
  getAll, 
};
