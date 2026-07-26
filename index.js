const express = require("express");
const app = express();

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 }
];

// Search Route (must come before :id)
app.get("/products/search", (req, res) => {
  const keyword = req.query.keyword || "";

  const result = products.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  res.json(result);
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

// Add new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});