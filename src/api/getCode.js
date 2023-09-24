const getCode = (url) => {
    let code = url.split('/').pop();
    if (/[=]/.test(code)) {
        code=code.split('=').pop();
    }
    return code;
}

const pruebas = [
    'https://www.youtube.com/watch?v=MJkdaVFHrto',
    'https://youtu.be/MJkdaVFHrto',
    'https://www.youtube.com/watch?v=bs81DNsMrnM',
    'https://youtu.be/bs81DNsMrnM'
]
pruebas.forEach(item => console.log(getCode(item)));