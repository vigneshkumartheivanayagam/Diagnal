import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from "../../actions"

function Header() {

    const dispatch = useDispatch()
    const [showSearch, setShowSearch] = React.useState(false)

    const handleInputChange = (val) => {
        dispatch(addSearch(val))
    }

    const clearSearch = () => {
        dispatch(addSearch(''))
        setShowSearch(false)
    }
    return (
        <header>
            {!showSearch && (
                <nav class="fixed z-50 container mx-auto bg-black h-16">
                    <div class="max-w-4xl h-12 nd:h-16 mx-auto flex justify-between align-stretch px-4">
                        <div id="logo" class="flex items-center text-white font-bold">
                            <img src={process.env.REACT_APP_IMG_URL + 'Back.png'} alt='Back' className='mr-3 h-5' />
                            <a href="/" className='text-xl'>Romantic Videos</a>
                        </div>
                        <div class="md:hidden flex items-center">
                            <img src={process.env.REACT_APP_IMG_URL + 'search.png'} alt='Search' className='h-5' onClick={() => setShowSearch(!showSearch)} />
                        </div>
                    </div>
                </nav>
            )}
            {showSearch && (
                <nav class="fixed z-50 container mx-auto bg-black h-16">
                    {/* <div className='flex justify-between justify-center'>
                        <div class="w-2/3 bg-gray-400 h-12">
                            <input type='text' name='search' id='search' value='' placeholder='Search' className='w-full' />
                        </div>
                        <div class="w-1/3 bg-gray-500 h-12">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' onClick={() => setShowSearch(!showSearch)}>Cancel</button>
                        </div>
                    </div> */}
                    <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" onChange={(e) => handleInputChange(e.target.value)} autoFocus />
                        <button class="flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={clearSearch}>Cancel</button>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header