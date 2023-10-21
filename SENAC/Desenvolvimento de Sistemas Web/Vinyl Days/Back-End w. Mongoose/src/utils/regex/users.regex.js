const name = /^[A-Za-z\s'-.]{5,60}$/;
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/;

export { name, email, password };