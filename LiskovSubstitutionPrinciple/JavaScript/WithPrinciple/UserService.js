const {EntityService} = require("./EntityService");

class UserService extends EntityService {
    emit() {
        console.log('notify subscribers about changes')
    }

    save(definition) {
        const result = super.save();
        if (result) this.emit()

        return result;
    }
}

module.exports = {
    UserService
}
