
module.exports = (req, res) => {

    const { _label_like } = req.query
    const allData = require('../../data/home_search')()
    const list = allData.list.filter((v) => v.label.includes(_label_like))
    
    setTimeout(() => {
        return res.success({ list })
    },1000)
}