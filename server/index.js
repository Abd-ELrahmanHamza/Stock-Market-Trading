const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8000;

// Middleware to parse JSON data in requests
app.use(express.json());

// Enable CORS (for development purposes)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const handleAddUser = (user, res) => {
  try {
    // Specify the path to your JSON file
    const filePath = `${__dirname}/user.json`;
    const userNameToModify = user.name; // Replace with the username you want to modify
    const newValue = user; // Replace with the new value
    // Read the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err && err.code !== "ENOENT") {
        console.error("Error reading JSON file:", err);
        res.status(500).send("Error reading JSON file");
        return;
      }

      let jsonData = [];

      if (!err) {
        // Parse the JSON data into an array
        jsonData = JSON.parse(data);
      }

      jsonData[userNameToModify] = newValue;

      // Convert the updated array back to a JSON string
      const updatedJsonString = JSON.stringify(jsonData, null, 2); // The `null, 2` argument formats the JSON with 2 spaces for readability

      // Write the updated JSON back to the file
      fs.writeFile(filePath, updatedJsonString, "utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing JSON file:", writeErr);
          res.status(500).send("Error writing JSON file");
          return;
        }

        console.log("JSON file updated successfully.");
        res.status(201).send("User data saved successfully");
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving user data");
  }
};

const handleAddToStatistics = (statistic, value) => {
  try {
    // Specify the path to your JSON file
    const filePath = `${__dirname}/statistics.json`;
    // Read the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err && err.code !== "ENOENT") {
        console.error("Error reading JSON file:", err);
        return;
      }
      console.log(data);

      const jsonData = JSON.parse(data);
      console.log(jsonData);
      const usersData = jsonData[statistic];
      const date = new Date();
      const dateString = date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "-");
      if (value) {
        if (usersData.length >= 1) {
          usersData.push({
            name: dateString,
            value: usersData[usersData.length - 1].value + value,
          });
        } else {
          usersData.push({
            name: dateString,
            value: value,
          });
        }
      } else {
        usersData.push({
          name: dateString,
          value: usersData.length + 1,
        });
      }
      jsonData[statistic] = usersData;
      // Convert the updated array back to a JSON string
      const updatedJsonString = JSON.stringify(jsonData, null, 2); // The `null, 2` argument formats the JSON with 2 spaces for readability
      // Write the updated JSON back to the file
      fs.writeFile(filePath, updatedJsonString, "utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing JSON file:", writeErr);
          return;
        }
        console.log("JSON file updated successfully.");
      });
    });
  } catch (err) {
    console.log(err);
  }
};

// Endpoint for user data
app.post("/user", (req, res) => {
  const userData = req.body;
  handleAddToStatistics("investors");
  handleAddUser(userData, res);
});

app.get("/user", (req, res) => {
  const users = fs.readFileSync("user.json", "utf8");
  res.send(users);
});

app.post("/companiesRecords", (req, res) => {
  const companiesRecords = req.body;
  // Save the user data to a file (e.g., users.json)
  fs.writeFile(
    "companiesRecords.json",
    JSON.stringify(companiesRecords),
    (err) => {
      if (err) {
        console.error("Error saving stocks data:", err);
        res.status(500).send("Error saving user data");
      } else {
        res.status(201).send("Stocks data saved successfully");
      }
    }
  );
});

app.get("/companiesRecords", (req, res) => {
  const companiesRecords = fs.readFileSync("companiesRecords.json", "utf8");
  res.send(companiesRecords);
});

app.post("/company", (req, res) => {
  const company = req.body;
  // Save the user data to a file (e.g., users.json)
  fs.writeFile("company.json", JSON.stringify(company), (err) => {
    if (err) {
      console.error("Error saving user data:", err);
      res.status(500).send("Error saving user data");
    } else {
      res.status(201).send("User data saved successfully");
    }
  });
});

// Endpoint for user data
app.post("/stocks", (req, res) => {
  const companiesRecords = req.body;
  // Save the user data to a file (e.g., users.json)
  fs.writeFile("stocks.json", JSON.stringify(companiesRecords), (err) => {
    if (err) {
      console.error("Error saving user data:", err);
      res.status(500).send("Error saving user data");
    } else {
      res.status(201).send("User data saved successfully");
    }
  });
});

app.get("/stocks", (req, res) => {
  const stocks = fs.readFileSync("stocks.json", "utf8");
  res.send(stocks);
});

const handleAddStock = (stock, res) => {
  try {
    // Specify the path to your JSON file
    const filePath = `${__dirname}/stocks.json`;
    const nameToModify = stock.name; // Replace with the username you want to modify
    const newValue = stock; // Replace with the new value
    // Read the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err && err.code !== "ENOENT") {
        console.error("Error reading JSON file:", err);
        res.status(500).send("Error reading JSON file");
        return;
      }
      const jsonData = JSON.parse(data);
      const stocksData = jsonData["stocks"];
      const stockIndex = stocksData.findIndex(
        (stock) => stock.name === nameToModify
      );
      if (stockIndex === -1) {
        stocksData.push(newValue);
      } else {
        stocksData[stockIndex] = newValue;
      }
      jsonData["stocks"] = stocksData;
      // Convert the updated array back to a JSON string
      const updatedJsonString = JSON.stringify(jsonData, null, 2); // The `null, 2` argument formats the JSON with 2 spaces for readability
      // Write the updated JSON back to the file
      fs.writeFile(filePath, updatedJsonString, "utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing JSON file:", writeErr);
          res.status(500).send("Error writing JSON file");
          return;
        }
        console.log("JSON file updated successfully.");
        res.status(201).send("User data saved successfully");
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving user data");
  }
};
app.post("/stock", (req, res) => {
  const stock = req.body;
  handleAddStock(stock, res);
});
app.get("/statistics", (req, res) => {
  const statistics = fs.readFileSync("statistics.json", "utf8");
  res.send(statistics);
});

const handleTransactions = (paramData, paramUsername, res) => {
  try {
    // Specify the path to your JSON file
    const filePath = `${__dirname}/transactions.json`;

    // Read the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        res.status(500).send("Error reading JSON file");
        return;
      }

      // Parse the JSON data into an object
      const jsonData = JSON.parse(data);

      // Modify a specific value (for example, change the value for a user named "user1")
      jsonData[paramUsername] = paramData;

      // Convert the updated object back to a JSON string
      const updatedJsonString = JSON.stringify(jsonData, null, 2); // The `null, 2` argument formats the JSON with 2 spaces for readability

      // Write the updated JSON back to the file
      fs.writeFile(filePath, updatedJsonString, "utf8", (writeErr) => {
        if (writeErr) {
          console.error("Error writing JSON file:", writeErr);
          res.status(500).send("Error writing JSON file");
          return;
        }

        console.log("JSON file updated successfully.");
        res.status(201).send("User data saved successfully");
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving user data");
  }
};

app.post("/transactions", (req, res) => {
  const transactions = req.body;
  // Save the user data to a file (e.g., users.json)
  handleAddToStatistics("transactions");
  if (
    transactions.data &&
    transactions.data.price &&
    transactions.data.amount
  ) {
    if (transactions.data.type === "buy") {
      handleAddToStatistics(
        "money",
        transactions.data.price * transactions.data.amount
      );
    } else {
      handleAddToStatistics(
        "money",
        -transactions.data.price * transactions.data.amount
      );
    }
  }
  handleTransactions(transactions.data, transactions.userName, res);
});

app.get("/usersTransactions", (req, res) => {
  const transactions = fs.readFileSync("transactions.json", "utf8");
  res.send(transactions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
