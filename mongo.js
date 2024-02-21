const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/notesApp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1'

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'Joy Is a talented prosecutor',
//     important: true
// })

// note
//    .save()
//    .then(result => {
//     console.log('note saved')
//     mongoose.connection.close()
//    })

Note
   .find({})
   .then(notes => {
    notes.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
   })

