import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

export  async function POST(request: Request) {
    const {description}  = await request.json()
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        
        prompt: description,
        n: 1,
        size: "512x512",
    })
    
    const imageUrl =  response.data.data[0].url
    return NextResponse.json(
       
          {
            imageUrl,
          },  
        
        { status: 200 }
    )
}
