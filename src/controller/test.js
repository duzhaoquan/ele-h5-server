const test = require('../../data/test')

module.exports = (req,res,next) => {
    const testdata = test()
    testdata.desc = '我是自定义一个测试数据'
    res.success(testdata)
}


