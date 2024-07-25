const apiRoutes = require("./api");

/**
 * 
 *  v1 
 */
const setupRoutes = (app) => {
  app.use("/api", apiRoutes);
};

module.exports = { setupRoutes };
