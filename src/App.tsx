import { useState } from 'react'
import './App.css'
import { useParseJWT } from './hooks/hooks';

function App() {
  
  const [headerState,setHeaderState] = useState(null);
  const [payloadState,setPayloadState] = useState(null);

  function handleToken(event:React.FormEvent<HTMLTextAreaElement>){
    const token = event.currentTarget.value;
    const [header,payload] = token.split(".");
    setHeaderState(useParseJWT(header))
    setPayloadState(useParseJWT(payload))
  }
  
  return (
    <div className='content-container'>
      <div className='lg:flex lg:items-center lg:justify-center'>
        <div className='min-w-0 flex-1'>
          <h1 className='pt-6 pb-8 text-2xl/7 text-center font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
            Simple JWT Parser
          </h1>
        </div>
      </div>
      
      <div className='grid grid-cols-2 gap-4'>

        <div>
          <h2 className='font-mono text-3xl'>Encoded JWT</h2>
          <textarea className='p-3 resize-none h-full w-full border-3 border-black rounded-md' onChange={handleToken} rows={12}></textarea>
        </div>

        <div>
          <h2 className='font-mono text-3xl'>Decoded JWT</h2>
            <div className='p-3 border-3 border-black rounded-md'>
              {headerState && (
                <div className='row-span-full'>
                  <h3>Headers</h3>
                  <pre>{JSON.stringify(headerState,null,2)}</pre>
                </div>
              )}
              {payloadState && (
                <div className='row-span-full'>
                  <h3>Payload</h3>
                  <pre>{JSON.stringify(payloadState,null,2)}</pre>
                </div>
              )}
            </div>
        </div>
      </div>


    </div>
  )
}

export default App
