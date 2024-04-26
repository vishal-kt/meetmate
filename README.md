This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## some testing code 

        "use client"
            import { Button } from '@/components/ui/button'
            import { Input } from '@/components/ui/input'
            import { app } from '@/config/FirebaseConfig'
            import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
            import { doc, getFirestore, setDoc } from 'firebase/firestore'

            import Image from 'next/image'
            import React ,{useState}from 'react'

            function CreateBusiness() {
            const [businessName, setBusinessName] = useState();
            const db = getFirestore(app)
            const {user}=useKindeBrowserClient();


            const onCreateBusiness=async()=>{
                    console.log("btn Click",businessName);
                    await setDoc(doc(db,'Business',user.email),{
                        businessName:businessName.replace(" ","_"),
                        email:user.email,
                        userName:user.given_name+" "+user.family_name
                    }).then(resp=>{
                        console.log("Document Saved");
                
                    
                    })

                }

            return (
                <div className='p-14 items-center flex flex-col gap-20 my-20'>
                <Image src='/logo.svg' width={200} height={150}/>
                <div className='flex flex-col items-center gap-4 ' >
                    <h2 className='text-4xl font-bold'>What should we call your Business?</h2>

                    <p className='text-slate-500 '> You can always change this later from settings </p>
                    <div className='w-full'>
                    <label className='text-slate-900 '>Team Name</label>
                    <Input placeholder="Ex. Oracle" className="my-2"
                    onChange={(event)=>setBusinessName(event.target.value)} />
                    </div>
                    <Button className="w-full" disabled={!businessName}
                    onClick={onCreateBusiness}
                    >Create Business</Button>
                </div>
                </div>
            )
            }

            export default CreateBusiness