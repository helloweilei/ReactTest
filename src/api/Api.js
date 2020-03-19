import request from './ApiUtil'

export function getSongCategoies() {
    return request.get('/songs/categories')
}