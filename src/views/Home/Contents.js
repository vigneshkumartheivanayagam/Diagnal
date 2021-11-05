import React from  'react'
import { useSelector } from 'react-redux'
import List from './List'

function Contents(props) {

    let contents = useSelector(state => state.contentReducer.contents)
    let filteredContents = useSelector(state => state.contentReducer.filtered)
    let searchKey = useSelector(state => state.contentReducer.searchKey)

    if (searchKey !== '') {
        contents = filteredContents
        window['scrollTo']({ top: 0, behavior: 'smooth' })
    }

    return (
        <ul className="grid grid-cols-3 gap-3 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 scrollbar scrollbar-width-0">
            {contents.length > 0 && (
                contents.map((content, index) => {
                    return (
                        <List key={index} {...content} />
                    )
                })
            )}
        </ul>
    )
}

export default Contents