const asynchandler = require("express-async-handler");
const productuploadDetails = require("../models/SlideShowModel");

const GalleryDataUpload = asynchandler(async (req, res) => {
  const {
    //   productName,
    //   productPrice,
    //   productQuantity,
    //   productDetails,
    //   productSize,
    //   productCategory,
    productDetails,
  } = req.body;

  const productImage = req.file.path;

  if (
    //   !productName ||
    //   !productPrice ||
    //   !productQuantity ||
    !productDetails ||
    //   !productSize ||
    //   !productCategory ||
    !productImage
  ) {
    res.status(400);
    throw new Error("Please enter all the product  details");
  }

  const ProductData = await productuploadDetails.create({
    // productName,
    // productPrice,
    // productQuantity,
    productDetails,
    // productSize,
    // productCategory,
    productImage,
  });

  if (ProductData) {
    res.status(201).json({
      _id: ProductData._id,
      //   productName: ProductData.name,
      //   productPrice: ProductData.price,
      //   productQuantity: ProductData.Quantity,
      productDetails: ProductData.Details,
      //   productSize: ProductData.Size,
      //   productCategory: ProductData.Category,
      productImage: ProductData.Image,
    });
    console.log("Done ");
  } else {
    res.status(400);
    console.log("Unable to to make");
    throw new Error("Failed to upload the product");
  }
});

const FetchGalleryData = asynchandler(async (req, res) => {
  try {
    const productData = await productuploadDetails.find();
    res.status(200).json({ ProductData: productData });
    console.log("Here is the product data", productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const DeleteGalleryData = asynchandler(async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productuploadDetails.findById(productId);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await product.deleteOne(); // Use deleteOne() to delete the document
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
});
module.exports = { GalleryDataUpload, FetchGalleryData, DeleteGalleryData };
