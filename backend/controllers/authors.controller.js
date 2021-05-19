const Author = require("../models/Author");

const createAuthor = async (req, res) => {
  const author = await new Author({ name: "Treo Hi Fsooo Bar" });
  await author.save();
  res.status(201).json({
    data: author,
  });
};

const getSingleAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.status(201).json({
    data: author,
  });
};

const update = async (req, res) => {
  const author = await Author.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true },
  );

  console.log({ author });

  await author.save();

  res.status(201).json({
    data: author,
  });
};

const destroy = async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);

  res.status(204).json({
    data: author,
  });
};

module.exports = {
  createAuthor,
  getSingleAuthor,
  update,
  destroy,
};
