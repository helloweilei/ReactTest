export function formatTime(time) {
    time = time || Date.now()
    const date = new Date(time)
    return date.getFullYear() + '-' +
        formatNum(date.getMonth() + 1) + '-' +
        formatNum(date.getDate()) + ' ' +
        formatNum(date.getHours()) + ':' +
        formatNum(date.getMinutes()) + ':' +
        formatNum(date.getSeconds())
}
const formatNum = val => (val < 10 ? '0' : '') + val