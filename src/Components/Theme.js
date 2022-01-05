import React from 'react'
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs'
function Theme({ theme, setTheme }) {

    //event listner to change the theme
    const ChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className=''>

            <div className='fixed bottom-3 right-0 '>
                <button className='bg-gray-700 p-5 rounded-bl-full rounded-tl-full dark:bg-gray-200' onClick={ChangeTheme} >
                    {
                        theme === "light" ? <BsFillSunFill fill='#fff' /> : <BsMoonFill fill='#000000' />
                    }
                </button>
            </div>
        </div>
    )
}

export default Theme