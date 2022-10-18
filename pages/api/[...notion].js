// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Client } = require("@notionhq/client")

// import type { NextApiRequest, NextApiResponse } from 'next'

// Initializing a client
const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
})

const databaseId = process.env.NEXT_DATABASE_URL


export default function handler(req, res) {

    const { payload } = req.query

    // console.log(payload)
    console.log(req.query.notion)

    async function addItem(text) {
        try {
          const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
              title: { 
                title:[
                  {
                    "text": {
                      "content": text
                    }
                  }
                ]
              }
            },
          })
          console.log(response)
          console.log("Success! Entry added.")
        } catch (error) {
            
          console.error(error)
        //   console.error(error.body)
        }
      }
    //   addItem("Yurts in Big Sur, California")
    


    res.status(200).json({ name: 'John Doe' })
  }
  