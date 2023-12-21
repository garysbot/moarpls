# moarpls

### Features
- User Auth
- User Upload & Interface
  - Form input for the `joke`
  - `user_prof_pic` upload for the mock ChatGPT screenshot
- `moarpls` patented `moarmoarmoar` logic
  - Chat Completions (JSON Mode) with the OpenAI Chat API takes in the user input `joke`
  - Used as Prompts in the OpenAI Images API to generate images with DALL-E 3
- `jimp` to merge `png` layers into an export for user download
  - Background image with color #343541 to mimick ChatGPT.com UI
  - Images API returned image
  - `joke` rendered with jimp's `print` method
  - Export for download

### Tech
- Next.js
- Vercel
- OpenAI
- jimp
- [TTF2FNT](https://ttf2fnt.com/)
- NextAuth
- MongoDB
- Mongoose
- Tailwind CSS
- Flowbite
