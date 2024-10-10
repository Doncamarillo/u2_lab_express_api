const {Schema} = require ('mongoose')

const actorSchema = new Schema (
    {
        name: {type: String, required: true},
        age: { type: Number, required: true },
        living: {type: Boolean, required: true},
        role: {type: String, required: true},
        appearsIn: {type: Schema.Types.ObjectId, ref:'appearance'}
    },
    {timestamps: true}

)

module.exports = actorSchema