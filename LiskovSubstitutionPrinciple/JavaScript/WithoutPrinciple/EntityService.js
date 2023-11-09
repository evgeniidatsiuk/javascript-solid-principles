class EntityService {
    save() {
        console.log(`${EntityService.name}: save`)
    }

    findOne() {
        console.log(`${EntityService.name}: findOne`)
    }

    destroy() {
        console.log(`${EntityService.name}: destroy`)
    }

    update() {
        console.log(`${EntityService.name}: update`)
    }
}

module.exports = {
    EntityService
}