const {EntityService} = require("./EntityService");

class ShopService extends EntityService {
    destroy() {
        const currentUser = {id: 1};
        const owner = {id: 1};

        if (owner.id === currentUser.id) {
            super.destroy()
        } else {
            throw new Error(`You are not shop's owner.`)
        }
    }
}

module.exports = {
    ShopService
}