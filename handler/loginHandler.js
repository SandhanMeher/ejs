const bcrypt=require("bcrypt")
const {StudentCollection}=require("../model/studentSchema");

function showloginEjs(req, res) {
  res.render("login");
}


async function loginHandler(req, res) {
  console.log(req.body);

  const a = await StudentCollection.findOne({
    name: req.body.name,
  });
  console.log(a);
  if (a) {
    const match = await bcrypt.compare(req.body.rollno, a.rollno);
    if (match) {
      res.send(a);
    } else {
      res.send("password not matched");
    }
  } else {
    res.send("name matched but nott rollno");
  }
}

module.exports={
    showloginEjs,
    loginHandler
}