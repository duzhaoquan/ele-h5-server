module.exports = (req, res) => {
  const { id } = req.query;
  if (!id) {
    req.fail("id 为空！");
    return;
  }
  const shopPage = require("../../data/shop_page")();
  setTimeout(() => {
    return res.success(shopPage);
  }, 1000);
};
