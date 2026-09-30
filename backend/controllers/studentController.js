const studentModel = require("../models/studentModel");

async function list(req, res, next) {
  try {
    const students = await studentModel.getAllStudents();
    res.render("student-list", { students });
  } catch (error) {
    next(error);
  }
}

async function detail(req, res, next) {
  try {
    const student = await studentModel.findById(req.params.id);
    res.render("student-detail", { student });
  } catch (error) {
    next(error);
  }
}

async function search(req, res, next) {
  try {
    const keyword = req.query.keyword || "";
    const results = keyword
      ? await studentModel.search(keyword)
      : [];

    res.render("search", { keyword, results });
  } catch (error) {
    next(error);
  }
}

function showCreate(req, res) {
  res.render("student-create");
}

async function create(req, res, next) {
  try {
    const { name, email } = req.body;
    await studentModel.create(name, email);
    res.redirect("/students");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  detail,
  search,
  showCreate,
  create
};
