
var axios = require("axios");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/", function(req, res) {
    axios.get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            res.render("index", {characters: response.data})
        })
  });

};
