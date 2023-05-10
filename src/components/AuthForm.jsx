import React, {useState} from "react";

const Auth = ()=>{

    const [hasAccount, setHasAccount] = useState(true);
    
    const handleSetAccount = ()=>{
        setHasAccount(!hasAccount);
    }

    return(
        <>
        <div className='flex flex-col h-[90%] w-[70%] justify-center align-middle items-center  border] m-[15%] rounded-xl mt-[5%] transition-all duration-500'>
           <div className="flex flex-col w-full h-full items-center pt-8">
                <h1 className="text-[#0095FF] text-4xl font-bold">Create Account</h1>
                <input type="email" placeholder="Email" className="text-slate-400 w-[80%] mt-8 border border-b-slate-400 rounded-sm p-2 bg-[#202B3B]"/>
                <input type="password" placeholder="Password" className="text-slate-400 w-[80%] mt-4 border border-b-slate-400 rounded-sm p-2 bg-[#202B3B]"/>
                {
                    !hasAccount ?
                    
                    <input type="password" placeholder="Confirm Password" className="text-slate-400 w-[80%] mt-4 border border-b-slate-400 rounded-sm p-2 bg-[#202B3B]"/>
                    : <></>
                }
                <h1 className="text-[#0095FF] text-sm mt-2 w-[80%]">By signing up you agree to our <span className="underline cursor-pointer">privacy policy.</span> &nbsp; &nbsp;</h1>
                <div className="flex flex-row w-[80%] justify-start mt-[-4px]">
                    {
                        hasAccount ? 
                        <button className="w-full rounded-md font-bold bg-slate-600 text-slate-300">Login</button>
                        :
                        <button className="w-full rounded-md font-bold bg-slate-600 text-slate-300">Sign up</button>
                    }                    
                </div>
                { hasAccount ?
                    <p onClick={handleSetAccount} className="justify-start w-full ml-[18%] mt-1 underline cursor-pointer text-[#0095FF] text-sm font-bold">Create new account?</p>
                    :
                    <p onClick={handleSetAccount} className="justify-start w-full ml-[18%] mt-1 underline cursor-pointer text-[#0095FF] text-sm font-bold">Already have an account?</p>
                }
            </div> 
        </div>
        </>
    )
}

export default Auth;