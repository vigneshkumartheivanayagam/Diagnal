import React from 'react'
import axios from 'axios'
import Header from '../Header'
import Contents from './Contents'
import { useDispatch } from 'react-redux'
import { addContents } from "../../actions"

function Home(props) {

    const dispatch = useDispatch()
    let hasMore = true
    let page = 1

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window['scrollTo']({ top: 0, behavior: 'smooth' })

        setTimeout(function() {
            getContent()
        }, 1000)

        return () => {
            page = 1
            hasMore = true
        }
    }, [])

    const getContent = async () => {

        if (hasMore) {
            let url = 'data/CONTENTLISTINGPAGE-PAGE' + page+'.json'
            const result = await axios.get(url);
            if (result !== undefined && result !== null && result.status !== undefined && result.status !== null && result.status === 200 && result.data !== undefined && result.data !== null && result.data.page !== undefined && result.data.page !== null && result.data.page['content-items'] !== undefined && result.data.page['content-items'] !== null && result.data.page['content-items'].content !== undefined && result.data.page['content-items'].content !== null && result.data.page['content-items'].content.length > 0) {
                page = parseInt(page) + 1
                dispatch(addContents(result.data.page['content-items'].content))
            } else {
                hasMore = false
            }
        }
    }

    const handleScroll = (e) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            getContent()
        }
    };

    return (
        <React.Fragment>
            <Header />
            <div className="sm:container sm:mx-auto bg-black pt-12 contentsection">
                <div id='content'>
                    <Contents getContent={getContent} />
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Home