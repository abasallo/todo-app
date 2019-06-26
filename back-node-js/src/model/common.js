export default {

    preSaveUpdatedAndCreatedAt: function (next) {

        let now = new Date()
        this.updated_at = now
        !this.created_at && (this.created_at = now)

        next()
    }
}
