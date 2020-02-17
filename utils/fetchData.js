
const prefix = process.browser ? 'https://cors-anywhere.herokuapp.com/' : ''; // TODO: Remove when CORS will be fixed

export const fetchDataPost = async (body, url) => {
  try {
    const response = await fetch(`${prefix}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${process.env.AUTH_TOKEN}`,
      },
      body,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const fetchDataGet = async (url) => {
  try {
    const response = await fetch(`${prefix}${url}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${process.env.AUTH_TOKEN}`,
      },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
