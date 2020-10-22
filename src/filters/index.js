// 过滤器转化为 保留小数点后两位
export const formatNum = (data) => {
    data = Number(data).toFixed(3)
    const newStr = parseFloat(data)
    return newStr
}
