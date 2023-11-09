const {EntityService} = require("./EntityService");

class UserService extends EntityService {
    emit() {
        console.log('notify subscribers about changes')
    }

    save(definition) {
        if (!definition.avatarUrl) {
            throw Error('No avatar')
        }

        const result = super.save();
        if (result) this.emit()

        return result;
    }
}

module.exports = {
    UserService
}
