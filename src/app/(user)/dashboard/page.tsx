
import React from 'react'
import Container from '@/components/Container'
import { auth, signOut } from '@/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const DashboardPage = async() => {
    const session = await auth();
    if(!session?.user){
        redirect("/")
    };
  return (
    <Container className='py-10'>
        <h2 className='text-2xl font-bold'>Welcome to your dashboard</h2>
        <div className='flex gap-3 items-center my-5'>
                <Image 
                src={session?.user?.image as string} alt='user' 
                width={200} height={200} 
                className='w-10 h-10 rounded-full'/>
                <div>
                    <p>{session?.user?.name}</p>
                    <p>{session?.user?.email}</p>
                </div>    
            </div>
        <form action={async()=>{
            'use server'
            await signOut();
        }}>
            <button type='submit' name='signout' className='border border-red-500 text-red-500 
            text-sm text-semibold px-8 py-2 rounded-md hover:bg-red-500 hover:text-white 
            hoverEffect'>Sign Out</button>
        </form>
    </Container>
  );
}

export default DashboardPage;
