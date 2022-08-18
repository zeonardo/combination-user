const user = {
  get: () => fetch(`https://randomuser.me/api/`)
    .then(response => {
      if (response.ok) {
        return response
      }

      throw new Error('error fetching user', response.status);
    })
    .then(data => data.json())
    .catch(error => {
      throw new Error('error fetching user', error);
    })
};

export default user;