export const getCode = (url) => {
    let code = url.split('/').pop().match(/[a-zA-Z0-9_-]{11}/);
    return code[0];
}