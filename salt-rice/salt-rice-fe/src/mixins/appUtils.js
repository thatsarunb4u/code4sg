import store from '../store';

let protectedFetch = async (url, options) => {
    const response = await fetch(url, {
        ...options,
        headers: new Headers({
            'x-access-token':store.getters.getToken,
            "Content-Type": "application/json"
        }),
      });
    return response;
}

export {
    protectedFetch
}