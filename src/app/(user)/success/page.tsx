import SuccessContainer from '@/components/SuccessContainer';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props{
searchParams: {
    session_id: string;
}
}

const SuccessPage = async({searchParams}: Props) => {
    const id = searchParams?.session_id;
    
    if(!id){
        redirect("/");
    }
  return (
    <div>
    <SuccessContainer id={id}/>
    </div>
  )
}

export default SuccessPage;
