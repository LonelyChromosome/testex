const studentModel = require("../models/studentModel");

async function list(req, res, next) {
  try {
    const students = await studentModel.getAllStudents();
    res.render("student-list", { items: students });
  } catch (error) {
    next(error);
  }
}

async function detail(req, res, next) {
  try {
    const student = await studentModel.findStudentById(req.params.studentCode);
    res.render("studentDetail", { item: student });
  } catch (error) {
    next(error);
  }
}

async function search(req, res, next) {
  try {
    const keyword = req.query.q || "";
    const results = keyword ? await studentModel.searchByName(keyword) : [];
    res.render("find", { keyword, results });
  } catch (error) {
    next(error);
  }
}

function showCreate(req, res) {
  res.render("student-create");
}

async function create(req, res, next) {
  try {
    const name = req.body.fullname;
    const email = req.body.mail;
    await studentModel.create(name, email);
    res.redirect("/students");
  } catch (error) {
    next(error);
  }
}

async function showEdit(req, res, next) {
  try {
    const student = await studentModel.findById(req.query.studentId);
    res.render("student-edit", { student });
  } catch (error) {
    next(error);
  }
}

async function edit(req, res, next) {
  try {
    await studentModel.updateStudent(
      req.body.id,
      req.body.name,
      req.body.email
    );
    res.redirect("/students/" + req.body.id);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    await studentModel.remove(req.query.id);
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
  create,
  showEdit,
  edit,
  remove
};
