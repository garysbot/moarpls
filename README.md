# moarpls
<img alt="ChatGPT Meme Generator" src="./public/samples/readme-preview.png" />

## Features
- ✅ User Auth & Sessions with NextAuth
    - ✅ Github
    - ☑️ Email
    - ☑️ Google
    - ☑️ MongoDB Adapter
      
- ☑️ Data Architecture
    - ✅ Install Mongoose
    - ✅ Install MongoDB
    - ✅ MongoDB Atlas database set up
    - ✅ `User` Model
    - ✅ `Joke` Model
    - ✅ `Meme` Model
    - ☑️ Model Validations
        - ☑️ Schema
        - ☑️ Server
        - ☑️ Client
- ☑️ User Upload & Interface
  - ✅ Form input for the `joke`
  - ✅ Result output components
  - ☑️ `user_prof_pic` upload or grab from auth for the mock ChatGPT screenshot
    
- ☑️ `moarpls` patented `moarmoarmoar` logic
  - ☑️ Chat Completions (JSON Mode) with the OpenAI Chat API takes in the user input `joke`
  - ☑️ Used as Prompts in the OpenAI Images API to generate images with DALL-E 3
    
- ☑️ `jimp` to merge `png` layers into an export for user download
  - ☑️ Background image with color #343541 to mimick ChatGPT.com UI
  - ☑️ Combined with the Images API response `png`
  - ☑️ `joke` rendered with jimp's `print` method
  - ☑️ Export for download

<br>

## Timeline
- Wednesday December 20th
    - ✅ User Auth & Sessions with Next Auth -- Github avail; others future.
    - ✅ Setup and tech stack choices
- Thursday December 21st
    - ✅ Frontend - Main components and styling
    - ✅ Data Architecture - Mongoose Models, MongoDB Database Connection

<br>

## Tech
<p>
  <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
  <img alt="OpenAI" src="https://img.shields.io/badge/-OpenAI-10A27F?style=flat-square&logo=openai&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/-TailwindCSS-0EA5E9?style=flat-square&logo=tailwindCSS&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
  <img alt="Mongoose" src="https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" />
</p>

- [Flowbite](https://www.flowbite-react.com/docs/components/accordion)
- jimp
- [TTF2FNT](https://ttf2fnt.com/)
- NextAuth

<br>

## Resources
- [MongoDB & Next.js Integration](https://github.com/garysbot/mongodb-nextjs-connection-sample)
- [MongoDB & NextAuth Adapter](https://authjs.dev/reference/adapter/mongodb)
- [Next.js + MongoDB + Vercel Connection Guide](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb)
- [Tailwind Docs](https://tailwindcss.com/docs/font-weight)
- [Flowbite Docs](https://www.flowbite-react.com/docs/components/button)