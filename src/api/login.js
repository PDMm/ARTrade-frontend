import request from '@/utils/request'

export function login(userName, password) {
    return request({
        url: '/login',
        method: 'post',
        data: {
            username: userName,
            password: password
        }
    });
}