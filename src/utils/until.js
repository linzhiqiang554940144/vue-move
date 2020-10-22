export function formatDayTime(val, format) {
  if (val) {
    let date = new Date(val)
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (M < 10) {
      M = '0' + M;
    }
    if (D < 10) {
      D = '0' + D;
    }
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (format === 'YY-MM-DD hh:mm') {
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m;
    } else if (format === 'YY-MM-DD hh:mm:ss') {
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    } else {
      return Y + '-' + M + '-' + D;
    }
  } else {
    return '';
  }
}