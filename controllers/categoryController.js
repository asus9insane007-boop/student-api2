const getCategories = (req, res) => {
  res.json({ message: "Get All Categories" });
};

const createCategory = (req, res) => {
  res.json({ message: "Create Category" });
};

module.exports = {
  getCategories,
  createCategory,
};