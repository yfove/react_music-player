import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // Ref
    const audioRef = useRef(null);
    //Event Handlers
    const playSongHandler = () => {
        // console.log(audioRef.current)
        if(isPlaying){
            audioRef.current.pause();
            // set the player to the opposite of what it was
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        console.log(e.target);
        const duration = e.target.duration;
        console.log(duration);
        setSongInfo({...songInfo, currentTime: current, duration})

    };

    const getTime = (time) => {
        return(
            // formats a number nicely for you (snippet from stack overflow)
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )

    }

    // State 
    const [songInfo,setSongInfo] = useState({
        currentTime: null,
        duration: null,
    })

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay}/>
            <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}></audio>
        </div>
    )
}

export default Player