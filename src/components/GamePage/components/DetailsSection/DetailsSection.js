import React, { useEffect, useState } from 'react'
import './DetailsSection.css'

const DetailsSection = ({content,index, gameName}) => {


    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState({})
    // const [flexDirection, setFlexDirection] = useState('row')
    // const [bg, setBg] = useState('#EEEEEE')
    const [style,setStyle] = useState({})
    // const [name,setName] = useState('')

    useEffect(() => {
        const getData = async () => {
            setData(content);
            setLoaded(true);
            var isOdd = index % 2;
            var flexDirection = 'row'
            if (isOdd > 0) {
                // setFlexDirection('row-reverse')
                // setBg("#DDDDDD")
                flexDirection = 'row-reverse'
            }
            var style = {}
            window.innerWidth <= 768 ? style = {} : style = {
                "width": "100%",
                "height":"100%",
                "display": "flex",
                // "flexWrap":"wrap",
                "flexDirection": flexDirection,     
                "fontFamily": "Courier New"         
            }
            setStyle(style)
            // setName(gameName)
        }
        getData()


    }, [content,index,gameName]);


    if (!loaded) {
        return <div>loading</div>
    } else {
        return (
            <div className='details-section-container' style={style}>
                <div className='details-section-content-container'>
                    <div className='details-section-content-inner-container'>
                        <div className='details-section-content-label'>{data.label}</div>
                        {data.text && data.text.map((content, index) => (
                            <div key={index} className='details-section-content-text'>{content}</div>
                        ))}                       
                    </div>
                </div>
    
                <div className='details-section-media-container'>
                    
                    <img src={require(`../../../../assets/img/${gameName}/details_${index}.png`)} alt='' className='details-section-media-image'/>
                </div>
            </div>
        )
    }
}

export default DetailsSection