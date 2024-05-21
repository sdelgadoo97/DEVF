import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllAutores = async () => {
    const response = await fetch(`${BASE_URL}/autores`);
    const data = await response.json();
    return data; 
};

module.exports = { getAllAutores }