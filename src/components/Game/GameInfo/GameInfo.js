import React, { Component } from 'react';
import './GameInfo.css';
import settings from './../../../imgs/icons/settings.png';

export default class GameInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            saved:false,
            ariaLabel: 'saved'
        }
        this.changeProgressStatus=this.changeProgressStatus.bind(this);
    }

    changeProgressStatus(){
        this.setState(prevState => ({
          saved: !prevState.saved
        }));
        setTimeout(()=>{
            const ariaLabel = this.state.saved ? 'unsaved' : 'saved';
            this.setState({ariaLabel});
        },0)

        const progressDesplay = document.querySelector('.info__progress');
        if(this.state.saved){
             progressDesplay.textContent='not saved *';
             localStorage.clear();
        }else{
             progressDesplay.textContent='saved *';
             localStorage.setItem('SettingsSaved', true);
             this.props.setSettings();
        }

    }

    componentDidMount(){
        let settings = localStorage.getItem('SettingsSaved');
        if(settings){
            this.changeProgressStatus();
        }
    }
    render() {

        return(
            <div className="GameInfo">
                <button className="info__title" aria-label="close settings" onClick={()=>document.querySelector('.GameInfo').classList.toggle('is_hidden')}>
                    <img src={settings} alt=""/>
                    <span aria-hidden="true"> <b>Game's Settings</b> <br/>Click on the icon again to close Settings.</span>

                </button>
                <div className="info__details">
                        <p><b>THE GAME GOAL IS TO DESTROY ALL THE BRICKS AT EACH LEVEL TO REVEAL CORRESPONDING SKILLS.</b></p>
                        <p>
                            <b>HIT SPACE / TAP THE SCREEN</b> to start the ball and pause or unpause the game. Remember to keep the game box in the viewport.
                        </p>
                        <p><b>PAD CONTROLLERS :</b> <span className="info__arrows">&larr;</span> <span className="info__arrows">&rarr;</span></p>
                        Use right and left arrow keys or swipe right/left to position and move the pad.
                        <p><b>SUPER-BRICKS :</b></p>
                        Super-bricks (black ones) must be hit twice to be destoyed.

                        <p><b>PROGRESS / LEVELS : <button aria-label={`change game progress satus to ${this.state.ariaLabel}`} onClick={this.changeProgressStatus}><i className="info__progress" aria-hidden="true">not saved*</i></button></b> </p>
                        Save completed levels on your computer to have constant access to my skills. <br/>
                        <small><i>*Changing status to 'not saved' will reset settings of the app to the default.</i></small>
                </div>


            </div>
        )
    }
}
