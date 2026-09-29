const database = require("../services/fileDatabase");

async function list(req, res, next) {
  try {
    const newsList = await database.getLatest(10);
    res.render("news", { id: "", newsList });
  } catch (error) {
    next(error);
  }
}

async function detail(req, res, next) {
  try {
    const post = await database.findById(req.params.id);

    res.render("news", {
      id: req.params.id,
      posts: post ? [post] : []
    });
  } catch (error) {
    next(error);
  }
}

async function search(req, res, next) {
  try {
    const keyword = req.query.q || "";
    const newsList = keyword ? await database.search(keyword) : [];

    res.render("search", { keyword, newsList });
  } catch (error) {
    next(error);
  }
}

function showCreate(req, res) {
  res.render("create");
}

async function create(req, res, next) {
  try {
    await database.createPost(
      req.body.title,
      req.body.content
    );

    res.redirect("/news");
  } catch (error) {
    next(error);
  }
}

async function showEdit(req, res, next) {
  try {
    const post = await database.findById(req.query.newsId);
    res.render("edit", { post });
  } catch (error) {
    next(error);
  }
}

async function edit(req, res, next) {
  try {
    await database.editPost(
      req.body.newsId,
      req.body.title,
      req.body.description
    );

    res.redirect("/news/" + req.body.id);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    await database.deletePost(req.query.id);
    res.redirect("/news");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  detail,
  search,
  showCreate,
  create,
  showEdit,
  edit,
  remove
};
