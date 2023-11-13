const getShopListData = require("../../data/shop_list");

module.exports = (req, res, next) => {
  const { _page, _limit } = req.query;
  const allData = getShopListData();
  const start = (_page - 1) * _limit;
  const end = _page * _limit;
  const data = allData.slice(start, end);
  setTimeout(() => {
    res.success({
      data,
      total: allData.length,
    });
  }, 2000);
};
