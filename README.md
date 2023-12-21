# moarpls

### Features
- ✅ User Auth & Sessions with NextAuth
    - ✅ Github
    - ☑️ Email
    - ☑️ Google
- ☑️ Data Architecture
    - ☑️ `User` Model & Validations
    - ☑️ `Joke` Model & Validations
    - ☑️ `Meme` Model & Validations
    - ☑️ MongoDB Atlas database set up
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

### Tech
  <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
  <img alt="OpenAI" src="https://img.shields.io/badge/-OpenAI-10A27F?style=flat-square&logo=openai&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/-TailwindCSS-0EA5E9?style=flat-square&logo=tailwindCSS&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
  <img alt="Mongoose" src="https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" />
  
- [Flowbite](https://www.flowbite-react.com/docs/components/accordion)
- jimp
- [TTF2FNT](https://ttf2fnt.com/)
- NextAuth