export const getToken = () => {
    const token = window.localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
};

export const setToken = (token: string) => {
    window.localStorage.setItem("token", JSON.stringify(token));
};