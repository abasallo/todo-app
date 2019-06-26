import mongoose from 'mongoose'

import common from './common'

import config from '../config'

export default mongoose.model('Todo', new mongoose.Schema({

    created_at: { type: Date },
    updated_at: { type: Date },

    completed: { type: Boolean, default: false },
    text: { type: String, default: config.todo.defaults.text },
    email: { type: String, required: true }

}).pre('save', common.preSaveUpdatedAndCreatedAt))