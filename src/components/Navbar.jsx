import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-3 z-50 bg-emerald-900 text-white px-8 md:px-16 lg:px-24'>
        <div className='container py2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Muaz</div>
            <div className='space-x-6'>
                <ul className='flex parent-div'>
                    <li className='button my-4 cursor-pointer lg:mx-3'>
                        <a href="home" className='hover:text-slate-900 px-4 py-1 block'>Home</a></li>
                    <li className='button my-4 cursor-pointer lg:mx-3'>
                        <a href="about" className='hover:text-slate-900 px-4 py-1 block'>About</a></li>
                    <li className='button my-4 cursor-pointer lg:mx-3'>
                        <a href="skill" className='hover:text-slate-900 px-4 py-1 block'>Skill</a></li>
                    <li className='button my-4 cursor-pointer lg:mx-3'>
                        <a href="projects" className='hover:text-slate-900 px-4 py-1 block'>Projects</a></li>
                    <li className='button my-4 cursor-pointer lg:mx-3'>
                        <a href="contact" className='hover:text-slate-900 px-4 py-1 block'>Contact</a></li>

                </ul>


            </div>
        </div>

    </nav>
       
  )
}

export default Navbar