const musicModel = require('../models/music.model')
const albumModel = require('../models/album.model')
const jwt = require('jsonwebtoken')
const uploadFile = require('../services/storage.service')


async function createMusic(req, res){

   
        const {title} = req.body
        const file = req.file


        const result = await uploadFile(file.buffer.toString('base64'))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id
        })

        res.status(201).json({
        message:'music created successfully',
        music:{
            id:music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })

    }
   
async function createAlbum(req,res) {
    

        const {title, musicIds} = req.body
        const album =await albumModel.create({
            title,
            artist: req.user.id,
            music: musicIds
        })
        res.status(201).json({
            message: 'album created successfully',
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.music
            }
        })

    }

async function getAllMusic(req, res) {
    const music = await musicModel.find().populate('artist')
    res.status(200).json({
        message:'music fetched successfully',
        music: music
    })
}

async function getAllAlbums(req, res){
    const albums = await musicModel.find()
    res.status(200).json({
        message:'albums fetched successfully',
        albums: albums
    })
}
    

module.exports = { createMusic , createAlbum, getAllMusic, getAllAlbums}

