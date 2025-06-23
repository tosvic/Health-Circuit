import Category from "../models/categorymodel.js";
import Article from "../models/articlemodel.js";

// to add new category
export const createNewCategory = async (req, res) => {
  const { categoryName, description } = req.body;

  // const catName = String()

  try {
    // checks if category name already exist in the article table
    const checkCategoryName_Article = await Article.findOne({
      where: { category: categoryName },
    });

    if (checkCategoryName_Article) {
      return res.send("Category already exist!");
    }

    // checks if category name already exist in the category table
    const checkCategoryName_Category = await Category.findOne({
      where: { categoryName: categoryName },
    });

    if (!checkCategoryName_Category) {
      const newCategory = await Category.create({
        categoryName,
        description,
      });

      if (!newCategory) {
        return res.status(400).json({
          status: false,
          message: "Unable to add category",
          data: [],
        });
      }

      return res.status(200).json({
        status: true,
        message: "Successfully added",
      });
    }
    return res.send("Category already exist!");
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// edit category
const editCategory = async (req, res) => {
  const { categoryName, description } = req.body;
  //   to be continued...
};
