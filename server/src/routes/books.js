import express  from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router();

router.post('/register', async (req, res) =>{
    try{
        const data = req.body;
    
        if (!data.title || !data.author || !data.year || !data.imageURL || !data.copies){
            res.json({
                "Error" : "Missing data!"
            });

            // console.log(data)
            res.status(400)
            return;
        }
    
        await prisma.book.create({
            data: {
                title: data.title,
                author: data.author,
                year: parseInt(data.year),
                imageURL: data.imageURL,
                copies: parseInt(data.copies)
            }
        })
        res.json({
            "Sucess" : "Book Created sucessfully."
        })

    } catch (e){
        console.error(`Error: ${e}`);
    }
})


router.get('/books', async (req, res) =>{
    try{
        const books = await prisma.book.findMany();
        res.json(books)
        res.status(200)

    } catch(e){
        res.json({
            "Error" : e
        })
    }
})

router.get('/findByAuthor', async (req, res) =>{
    const author = req.query.author
    // console.log(author)
    try{
        const books = await prisma.book.findMany({
            where: {author : author}
        })
        res.json(books)
        res.status(200)

    } catch(e){
        res.json({
            "Error" : e
        })
    }
})

router.get('/findByTitle', async (req, res) =>{
    const title = req.query.title
    try{
        const books = await prisma.book.findMany({
            where: {title : title}
        })
        res.json(books)
        res.status(200)

    } catch(e){
        res.json({
            "Error" : e
        })
    }
})

router.get('/findByYear', async (req, res) =>{
    const year = parseInt(req.query.year)
    try{
        const books = await prisma.book.findMany({
            where: {year : year}
        })
        res.json(books)
        res.status(200)

    } catch(e){
        res.json({
            "Error" : e
        })
    }
})


export default router;