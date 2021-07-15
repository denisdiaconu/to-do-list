const handleGetData = () => {
  const list = localStorage.getItem('todo');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};
export default handleGetData;