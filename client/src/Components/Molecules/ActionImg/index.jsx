import { useEffect, useState } from "react";
import axios from "../../../../node_modules/axios/index";
import { _Modal } from "../Modal/index";
import VideoForm from "../Video/index";


const ActionImg = () => {
    const [_log, setlog] = useState({
        time: "",
        actionType: "",
        url: ""
    })
    const a = async () => {
        const { data: { log } } = await axios.get('/log.json')
        const { time, actionType, url } = log[0]
        setlog({ time, actionType, url })
    }
    useEffect(() => { setTimeout(() => a(), 5000) }, [])
    console.log(_log)

    return (
        <div>
            {_log.time === ""
                ? <VideoForm />
                : <div><_Modal /><img src={_log.url} alt={_log.actionType} /></div>

            }
        </div>
    );
}

export default ActionImg;