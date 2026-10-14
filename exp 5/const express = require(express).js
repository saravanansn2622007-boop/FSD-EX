const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB Error:", error);
    });

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    quantity: Number
});

const Product = mongoose.model("Product", productSchema);

// Create
app.post("/api/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// Read
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Update
app.put("/api/products/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(product);
});

// Delete
app.delete("/api/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Product deleted successfully"
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});