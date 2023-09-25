export const getCode = (url) => {
    let code = url.split('/').pop();
    if (/[=]/.test(code)) {
        code = code.split('=').pop();
    }
    return code;
}