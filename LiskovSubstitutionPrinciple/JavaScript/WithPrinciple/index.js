const {EntityService} = require("./EntityService");
const {ShopService} = require("./ShopService");
const {UserService} = require("./UserService");


const entityService = new EntityService();
entityService.destroy();

const shopService = new ShopService();
shopService.destroy();

const userService = new UserService();
userService.save();

