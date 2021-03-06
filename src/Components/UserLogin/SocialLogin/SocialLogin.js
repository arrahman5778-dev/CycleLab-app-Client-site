import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Sheard/Loading/Loading';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);

    const from = location.state?.from?.pathname || "/";

    // Error
    useEffect(() => {
        if (googleError || Giterror) {
            toast("Opps!! User Not Found")
        }
    }, [googleError, Giterror])


    // naviate
    useEffect(() => {
        if (googleUser || Gituser) {
            navigate(from, { replace: true });
            toast.success('Social login Successful!!')
        }
    }, [googleUser, Gituser])




    return (
        <div>
            <div className="flex items-center justify-between my-4">
                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
                <p>or</p>
                <div className="w-[45%] h-[1px] bg-black opacity-20"></div>
            </div>
            <div onClick={() => signInWithGoogle()} className=" cursor-pointer flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5" >
                <img className='w-[45px] mr-2' src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" />
                <h3 className=' font-semibold'>Continue With Google</h3>
            </div>
            <div onClick={() => signInWithGithub()} className=" cursor-pointer flex items-center justify-center w-11/12 md:w-7/12 mx-auto bg-slate-50 rounded-lg shadow-md mb-5"  >
                <img className='w-[45px] p-1 mr-2 text-white' src="https://pngimg.com/uploads/github/github_PNG87.png" alt="" />
                <h3 className=' font-semibold'>Continue With GitHub</h3>
            </div>
        </div>
    );
};

export default SocialLogin;