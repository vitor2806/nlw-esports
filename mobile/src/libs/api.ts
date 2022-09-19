import axios from 'axios';

const ip = '192.168.0.199';

export const api = axios.create({ baseURL: `http://${ip}:3333` });
