

const baseApiUrl = import.meta.env.VITE_REACT_APP_BASE_API_URL || '';

console.info("Este es el base API", baseApiUrl)

const list = async () => {

  const response = await fetch(`${baseApiUrl}/task-groups`);
  const groups = await response.json();

  return groups;

}

export default {

  list

}