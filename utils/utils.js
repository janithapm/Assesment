const {BASE_URL} = require('./constants')

var blend = require('@mapbox/blend');
var request = require('request');
let { writeFile } = require('fs');
let { join } = require('path');

function combineImages(width, height, imageOne, imageTwo) {
    blend([{
        buffer: Buffer.from(imageOne,'binary'),
        x: 0,
        y: 0,
    }, {
        buffer: Buffer.from(imageTwo,'binary'),
        x: width,
        y: 0,
    }], {
        width: width * 2,
        height: height,
        format: 'jpeg',
    }, (err, data) => {
        if (err)
            throw new Error(err)
        const fileOut = join(process.cwd(), `/cat-card.jpg`);
        writeFile(fileOut, data, 'binary', (err) => {
            if (err)
                throw new Error(err)
            console.log("The file was saved! at "+ fileOut);
        });

    })
}

function getImageBuffer(person, width, height, color, size){
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            encoding: 'binary',
            qs: {width, height, color, size},
            url: BASE_URL+person, // concat with + is more efficent
        };
        request(options, async(err, res, body) => {
        if(err){
            throw new Error(err)
        }
        return resolve(body)
    });
    })
}


module.exports = { combineImages, getImageBuffer}