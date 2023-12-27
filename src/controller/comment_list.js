const getCommentListData = require("../../data/comment");
function commentFilter(commentlist, filter) {
  switch (filter) {
    case "全部":
      return commentlist;
    case "最新":
      return commentlist;
    case "好评": {
      const list = commentlist.filter((e) => e.goodsRating > 3);
      return list;
    }
    case "差评": {
      const list = commentlist.filter((e) => e.goodsRating < 3);
      return list;
    }

    case "不好吃": {
      const list = commentlist.filter((e) => e.conment.includes("不好吃"));
      return list;
    }

    case "很鲜美": {
      const list = commentlist.filter((e) => e.conment.includes("鲜美"));
      return list;
    }

    case "有图视频": {
      const list = commentlist.filter((e) => e.imgUrl.length > 4);
      return list;
    }

    default: {
      return commentlist;
    }
  }
}
module.exports = (req, res, next) => {
  const { _page, _limit, _filter } = req.query;
  const allData = getCommentListData();

  const start = (_page - 1) * _limit;
  const end = _page * _limit;
  const commentlist = commentFilter(allData.comments, _filter);
  setTimeout(() => {
    res.success({
      comments: commentlist.slice(start, end),
      categores: allData.category,
      total: commentlist.length,
    });
  }, 1000);
};
