const {ImageKit} = require('@imagekit/nodejs')

const ImageKitclient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadfile(file) {

    const result = await ImageKitclient.files.upload({

        file,
        fileName: "music_" + Date.now(),
        folder: 'Spotify-Backend-Project/music'

    })

    return result
    
}

module.exports = uploadfile