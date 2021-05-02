const axios = require('axios');

export const getGistsForUser = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}/gists`)
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const getGistByID = async (gistId) => {
  try {
    const response = await axios.get(`https://api.github.com/gists/${gistId}`)
    return response;
  } catch (error) {
    console.error(error);
  }
}