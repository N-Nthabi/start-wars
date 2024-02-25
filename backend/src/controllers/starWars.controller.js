const asyncHandler = require("express-async-handler");
const db = require('../models/index');
const config = require('../config/config');
const { Op } = require('sequelize');
const axios = require('axios');

exports.search = asyncHandler(async (req, res, next) => {
  try{
    const userId = req.userId;
    const searchTerm = req.body.searchTerm;
    const now = Date.now();

    const fifteenMinutesAgo = new Date(now - config.development.cacheTime); 
    

    let searchResult = await db.Search.findOne({where: {searchTerm: searchTerm, createdAt: {
      [Op.between]: [fifteenMinutesAgo, now],
    }}});

    

  
    if (searchResult) {
      res.status(200).send(searchResult.result)
      return;
    }

     searchResult = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
    

      await db.Search.create({
      searchTerm: searchTerm,
      userId: userId,
      result: {"data": searchResult.data.results },
     });

     res.status(200).send(searchResult.data.results);
   
  }catch(e){
    res.status(400).send({"message": 'Failed to find search.', "trace": e});
  }
 
});

