const {combineImages,getImageBuffer} = require('./utils/utils')
const {DEFAULT_COMMANDS} = require('./utils/constants')

let argv = require('minimist')(process.argv.slice(2));

function main() {
    try{   
        let {
            greeting = DEFAULT_COMMANDS.greeting,
            who = DEFAULT_COMMANDS.who,
            width = DEFAULT_COMMANDS.width,
            height = DEFAULT_COMMANDS.height,
            color = DEFAULT_COMMANDS.color,
            size = DEFAULT_COMMANDS.size,
        } = argv;
        
        const firstImagePromise = getImageBuffer(greeting, width, height, color, size );
        const secondImagePromise = getImageBuffer(who, width, height, color, size );
        
        Promise.all([firstImagePromise, secondImagePromise]).then(imageBuffers => {
            combineImages(width, height, imageBuffers[0], imageBuffers[1] )
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

main()
