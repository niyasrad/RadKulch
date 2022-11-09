import React, {Component} from 'react';
import Q from '../assets/1.wav';
import W from '../assets/2.wav';
import E from '../assets/3.wav';
import A from '../assets/4.wav';
import A1 from '../assets/5.wav';
import S from '../assets/6.mp3';
import D from '../assets/4.wav';
import D1 from '../assets/5.wav';
import Z from '../assets/7.mp3';
import X from '../assets/8.mp3';
import C from '../assets/9.mp3';
import man from '../assets/1.png';
import woman from '../assets/2.png';
import men from '../assets/3.png';
import fayar from '../assets/4.png';
import fayar1 from '../assets/5.png';
import kulch from '../assets/6.png';
import kulch1 from '../assets/7.png';

export default class Browser extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            innter:"",
            selected: false,
            search: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.darker = this.darker.bind(this);
    }
    darker(){
        if (document.getElementById("bigman").classList.contains("dark")){
            document.getElementById("bigman").className = "screen";
            console.log(document.getElementById("lol").src);
            document.getElementById("lol").src = kulch;
            document.getElementById("l").src = fayar;
            document.getElementById("lo").src = fayar;
            document.getElementById("A").src = A;
            document.getElementById("D").src = D;
            console.log(document.getElementById("lol").src);
        } else{
            document.getElementById("bigman").className = "screen dark";
            document.getElementById("lol").src = kulch1;
            document.getElementById("l").src = fayar1;
            document.getElementById("lo").src = fayar1;
            document.getElementById("A").src = A1;
            document.getElementById("D").src = D1;
        }
    }
    componentDidMount() {
        const detectKeyDown = (e) => {
            e.stopImmediatePropagation();
            if(this.state.selected){
                console.log(e);
                if(e.key === "Enter"){
                    window.open('https://www.google.com/search?q='+ this.state.search.split(" ").join("+"))
                }
            } else {
                console.log('clicked');
                if(['Q','W','E','A','S','D','Z','X','C'].includes(e.key.toUpperCase())){
                    this.setState({
                        innter: e.key.toUpperCase
                    })
                    if(e.key === "s") {
                        console.log("hello");
                        this.darker();
                    }
                    console.log('clicked');
                    let a = document.getElementById(e.key.toUpperCase());
                    console.log(a.parentElement);
                    if ((a.parentElement.className === "drum-pad imp") && !a.paused) {
                        a.pause();
                    } else if(a.parentElement.className ==="drum-pad imp playing" && !a.paused) {
                        a.pause();
                        a.parentElement.className = "drum-pad imp";
                    } else if(a.parentElement.className ==="drum-pad imp playing" && a.paused) {
                        a.play();
                    } else if(a.parentElement.className === "drum-pad imp" && a.paused) {
                        a.parentElement.className += " playing"
                        a.play();
                    } else {
                        a.play();
                    }
                    console.log(a.parentElement.className);
                }
            }
        }
        document.addEventListener('keydown', detectKeyDown) 
    }
    handleClick(e) {
        const audio = e.target.children[0];
        if(e.target.id === "logo"){
            this.darker();
        }
        this.setState({
            innter: e.target.children[0].id
        })
        if ((e.target.className === "drum-pad imp") && !audio.paused) {
            audio.pause();
        } else if(e.target.className ==="drum-pad imp playing" && !audio.paused) {
            audio.pause();
            e.target.className = "drum-pad imp";
        } else if(e.target.className ==="drum-pad imp playing" && audio.paused) {
            audio.play();
        } else if(e.target.className === "drum-pad imp" && audio.paused) {
            e.target.className += " playing"
            audio.play();
        } else {
            audio.play();
        }
        console.log(e.target.className);
        console.log(e.target.children);
    };
    handleMouse() {
        this.setState({
            selected: !this.state.selected
        })
        console.log(this.state.selected)
    }
    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }
    
    render() {
        return(
            <div id="bigman" className="screen">
                <div id="drum-machine">
                    <div id="display">{this.state.innter}</div>
                    <input type="text" className="bar" id="china" onFocus={this.handleMouse} onBlur={this.handleMouse} placeholder="Search Google" onChange={this.handleChange} value={this.state.search}></input>
                    <div className="drum-pad imp" id="man" onClick={this.handleClick}>
                        Q
                        <audio className="clip" id= "Q" src={Q} ></audio>
                        <img src={man} alt="man"></img>
                    </div>
                    <div className="drum-pad" id="woman" onClick={this.handleClick}>
                        W
                        <audio className="clip" id ="W" src={W}></audio>
                        <img src={woman} alt="woman"></img>
                    </div>
                    <div className="drum-pad" id="people" onClick={this.handleClick}>
                        E
                        <audio className="clip" id="E" src={E}></audio>
                        <img src={men} alt="men"></img>
                    </div>
                    <div className="drum-pad" id="fire1" onClick={this.handleClick}>
                        A
                        <audio className="clip" id="A" src={A}></audio>
                        <img src={fayar} id="lo" alt="fireworks"></img>
                    </div>
                    <div className="drum-pad" id="logo" onClick={this.handleClick}>
                        S
                        <audio className="clip" id="S" src={S}></audio>
                        <img src={kulch} id="lol" alt="logo"></img>
                    </div>
                    <div className="drum-pad" id="fire2" onClick={this.handleClick}>
                        D
                        <audio className="clip" id="D" src={D}></audio>
                        <img src={fayar} id="l" alt="fireworks"></img>
                    </div>
                    <div className="drum-pad imp" id="fin1" onClick={this.handleClick}>
                        Z
                        <audio className="clip" id="Z" src={Z}></audio>
                        
                    </div>
                    <h1 class="fin1">Wanderlust(z)</h1>
                    <div className="drum-pad imp" id="fin2" onClick={this.handleClick}>
                        X
                        <audio className="clip" id="X" src={X}></audio>
                    </div>
                    <h1 class="fin2">Lofi(x)</h1>
                    <div className="drum-pad imp" id="fin3" onClick={this.handleClick}>
                        C
                        <audio className="clip" id="C" src={C}></audio>
                    </div>
                    <h1 class="fin3">Ushio(c)</h1>
                </div>
            </div>
        );
    }
}