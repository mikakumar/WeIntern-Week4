 import SignUp from '@/components/signup';
import SignIn from '@/components/signin';

const SignSwitch = ({ type }) =>{
    return(
        <>
        <div className="checkup-container">
            <h1 className="check-header"> 
                {type == "signin" ? "Welcome back!" : "Sign Up Today!"}
            </h1>
            <div>
                {type == "signin" && 
                 <div>
                    <SignIn />
                    <hr className="mb-5 text-white mt-7" />
                    <p className="">Not a member?   
                        <a className="underline relative" href="/signin "> Sign up here!</a>
                    </p>
                </div>}
                {type == "signup" && 
                 <div>
                    <SignUp />  
                    <hr className="mb-5 text-white mt-5" />
                    <p className="">Already a member?   
                        <a className="underline  relative" href="/signin "> Sign in here!</a>
                    </p>
                </div>}
            </div>
        </div>
        </>
    )
}

export default SignSwitch;