import Article from "../models/articlemodel.js";
// import User from '../models/usermodel.js'

// Creating a new article

export const createArticle = async (req, res) => {
  const { title, category, author, tags, content } = req.body;
  const userId = Number(req.user.id)

  // const image = req.file;
  // const imagePath = image ? image.path : null;
  // const imageName = image ? image.filename : null;

  const checkTitle = await Article.findOne({ where: { title } });

  if (checkTitle) {
    return res.status(400).json({
      status: false,
      message: "Title already exist",
      data: [],
    });
  }

  try {
    const addArticle = await Article.create({
      title,
      category,
      author,
      tags,
      // imagePath,
      // imageName,
      content,
      userId
    });

    if (!addArticle) {
      return res.status(400).json({
        status: false,
        message: "Unable to create article",
        data: [],
      });
    }

    return res.status(200).json({
      status: true,
      message: "Article has been created successfully",
    });
  } catch (err) {
    // console.error(err); // this will show the real reason Sequelize failed
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};
