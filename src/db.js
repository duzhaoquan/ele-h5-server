
// const test = require('../data/test')

// module.exports = () =>{
//     return {
//         testjson0: test()
//     }
// }


const test = require('../data/test')

function responseData(data) {
    return {
        code: 0,
        msg: '请求成功',
        data,
    }
}

module.exports = () => {
    return {
        testjson0: test(),
    }
}