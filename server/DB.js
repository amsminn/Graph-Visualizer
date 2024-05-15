import mongoose from 'mongoose';

let db = null;
async function DB() {
    if(db) {
        return db;
    } else {
        await mongoose.connect('mongodb+srv://amsminn:1234@cluster0.fbbcrij.mongodb.net/graph_visualizer?retryWrites=true&w=majority&appName=Cluster0').then(() => { 
            console.log('MongoDB Connected!');
        }).catch(err => { console.log(err); });
        db = mongoose.connection;
        return db;
    }
}

export default DB;