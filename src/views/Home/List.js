import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function List(props) {
    return (
        <li className="flex flex-col listli scrollbar scrollbar-hidden">
            <div className=" relative">
                <div className=" inset-0  w-full">
                    {/* <img className=" w-full object-cover object-center" src={process.env.REACT_APP_IMG_URL + props['poster-image']} /> */}
                    <LazyLoadImage
                        alt={'...'}
                        effect="blur"
                        src={'static/images/' + props['poster-image']}
                        placeholderSrc={'static/images/placeholder_for_missing_posters.png'}
                        className="posterimg overflow-hidden"
                        height='188px'
                        width='120px'
                    />
                    <div className="flex flex-col">
                        <h2 className="text-base tracking-normal text-white pb-0 mb-0 tk-brandon-grotesque text-left truncate">{props.name}</h2>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default List