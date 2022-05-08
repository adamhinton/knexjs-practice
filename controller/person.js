const personService = require("../service/person");

//Can also just do this the way I was taught at lambda
class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PersonController();
