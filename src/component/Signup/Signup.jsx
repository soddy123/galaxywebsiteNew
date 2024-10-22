import {createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { auth ,db} from '../../firebase/firebase';
import {Link} from 'react-router-dom';
import { setDoc,doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';


function SignUp() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[name,setName]=useState("");

  const handleSignup = async(e)=>{
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and confirm password do not match!", {
        position: "top-center",
      });
      return; // Stop further execution if passwords don't match
    }

    try{
      await createUserWithEmailAndPassword(auth,email,password);
      const user = auth.currentUser;
      console.log(user)
      if(user){
        await setDoc(doc(db,"Users",user.uid),{
          name : name,
          email : user.email,
          // password : user.password,
          uid: user.uid,
        });
      }
      //console.log("user Register  sucessfully");
      
      toast.success("User Registered Successfully! Go to login Page",{
        position : "top-center",
      
      });

      // Clear the form fields after successful signup
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");

    }catch(error){
      console.log(error.message)
      toast.error("User Registeration Failed !",{
        position : "bottom-center",
        
      })
    }
  }

  return (
    <div className="relative flex items-center justify-center h-full bg-gray-100 dark:bg-gray-900">
      <ToastContainer />
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">Sign Up</h2>

        {/* Sign Up Form */}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Enter your full name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Create a password"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md"
              placeholder="Confirm your password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Optional Text Link */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
