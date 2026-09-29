 <!-- ====project start ============== -->
project create - npm create next-app@latest message-app --yes
project start - npm run dev
project live view - http://localhost:3000/ 

other package ui use - 
 install --- npm i -D daisyui@latest
 grobal.css file ---
 @import "tailwindcss";
@plugin "daisyui";


project file ======== 
components/ navbar 
components/ footer 
components/ Hero
components/ ActiveUsers

import form home  page components file


<!-- page  -->
/login 
/signup






<!-- ========= project setup file  -->

```text
src/
└── app/
    ├── globals.css
    ├── layout.tsx       ← পুরো website-এর common layout
    ├── page.tsx         ← Home page (/)
    │
    ├── login/
    │   └── page.tsx     ← /login
    │
    ├── signup/
    │   └── page.tsx     ← /signup
    │
    ├── chat/
    │   └── [id]/
    │       └── page.tsx ← /chat/1, /chat/2...
    │
    └── profile/
        └── page.tsx     ← /profile
```

Navbar / footer 
   ↓
layout.tsx-এ Navbar বসাবো
   ↓
Home page বানাবো
   ↓
তারপর Login route
   ↓
Signup
   ↓
Chat
   ↓
Profile