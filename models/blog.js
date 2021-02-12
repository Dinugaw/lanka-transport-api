const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },

        body: {
            type: {},
          
            min: 200,
            max: 2000000
        },
        excerpt: {
            type: String,
            max: 1000
        },
        mtitle: {
            type: String
        },
        mdesc: {
            type: String
        },
        vehicleType:{
            type: String
        },
        isAc:{
            type:String
        },
        morningStartTime:{
            type:String
        },
        morningEndTime: {
            type:String
        },
        eveningStartTime: {
            type:String
        },
        eveningEndTime: {
            type:String
        },
        route: [{address:String ,city: String, lat: String, long: String}],
        photo: {
            data: Buffer,
            contentType: String
        },
        telephone: {
            type: String
        },
        vehicleNumber: {
            type: String
        },
        categories: [{ type: ObjectId, ref: 'Category', required: true }],
        tags: [{ type: ObjectId, ref: 'Tag', required: true }],
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
