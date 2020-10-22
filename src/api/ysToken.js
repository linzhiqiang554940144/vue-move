import {
    fetch
} from '@/utils/http'

export const getystoken = (formObj) => {
    return fetch({
        url: '/openapi/user/app/token/get',
        method: 'POST',
        data: {
            ...formObj
        },
        loading: false
    })
}

export const getysdevice = (formObj) => {
    return fetch({
        url: '/openapi/device/list',
        method: 'POST',
        data: {
            ...formObj
        },
        loading: false
    })
}
export const getyschannel= (formObj) => {
    return fetch({
        url: '/openapi/device/channel/list',
        method: 'POST',
        data: {
            ...formObj
        },
        loading: false
    })
}

export const getysvideo= (formObj) => {
    return fetch({
        url: '/openapi/cdn/video/get',
        method: 'POST',
        data: {
            ...formObj
        },
        loading: false
    })
}

export const getysvideostart= (formObj) => {
    return fetch({
        url: '/openapi/cdn/video/start',
        method: 'POST',
        data: {
            ...formObj
        },
        loading: false
    })
}