import axios from 'axios';
const TIMEOUT = 20000;

// 创建HTTP请求通用前缀与过期时间
const service = axios.create({
    baseUrl: baseUrl,
    timeout: TIMEOUT
});