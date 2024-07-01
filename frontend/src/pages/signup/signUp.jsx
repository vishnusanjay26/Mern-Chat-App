import React from 'react'
import GenderCheckbox from './GenderCheckbox';
const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-slate-300'>
					Sign Up <span className='text-blue-800'> ChatApp</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-slate-200'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter your Full Name' className='w-full input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-slate-200'>Username</span>
						</label>
						<input type='text' placeholder='Enter your Username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-slate-200 label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-slate-200 label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 '
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline hover:text-blue-600 mt-1 inline-block text-slate-300' href='#'>
						Already have an account ?
					</a>

					<div className='flex justify-center'>
						<button className='w-24 btn btn-sm mt-2 bg-gray-900 text-white py-2 rounded hover:text-blue-600'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;