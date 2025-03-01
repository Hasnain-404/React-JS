import {useEffect} from 'react'

const Timer = (props) => {
    useEffect(() => {
        console.log("counting is start");
        let setIntervalId = setInterval(()=>{props.setcountIs(props.countIS + 1)}, 1000)

        return () => {
            console.log("setinterval removed from ui");
            clearInterval(setIntervalId)
        }
    }, [props.countIS])
}

export default Timer