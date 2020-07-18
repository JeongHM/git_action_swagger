const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Create global app objects
const app = express();

// Swagger definition
const swaggerDefinition = {
  components: {}, // ADD THIS LINE!!!
  openapi: "3.0.1",
  info: {
    title: "Swagger API V1", // Title of the documentation
    version: "0.1.0", // Version of the app
    description: "", // short description of the app
  },
  servers: [ {
    url: "http://127.0.0.1:5000/v1",
    description: 'Local server'
  }],
};

// options for the swagger docs
const options = {
  // import swaggerDefblocinitions
  swaggerDefinition,
  // path to the API docs
  apis: ["./docs/**/*.yaml"],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// use swagger-Ui-express for your app documentation endpoint
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = app.listen(process.env.PORT || 3031, () => {
  // eslint-disable-next-line no-console
  console.log(`'Listening on port '${server.address().port}`);
});