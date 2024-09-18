import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Hale Dil',
    songArtist: 'HARSHIT SAXENA',
    songSrc: './Assets/songs/Hale Dil - Murder 2 128 Kbps.mp3',
    songAvatar: './Assets/Images/image2.jpg'
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0)

  const currentAudio = useRef()

  const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  //Change Avatar Class
  let avatarClass = ['objectFitCover','objectFitContain','none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)
  const handleAvatar = ()=>{
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0)
    }else{
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }


  //Play Audio Function
  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'Hale Dil',
      songArtist: 'HARSHIT SAXENA',
      songSrc: './Assets/songs/Hale Dil - Murder 2 128 Kbps.mp3',
      songAvatar: './Assets/Images/image2.jpg'
    },
    {
      songName: 'I Love You',
      songArtist: 'ASH KING',
      songSrc: './Assets/songs/I Love You.mp3',
      songAvatar: './Assets/Images/image1.jpg'
    },
    {
      songName: 'Jaanam',
      songArtist: 'VISHAL MISHRA',
      songSrc: './Assets/songs/Jaanam - Bad Newz 128 Kbps.mp3',
      songAvatar: './Assets/Images/image6.jpg'
    },
    {
      songName: 'Mareez E Ishq',
      songArtist: 'ARIJIT SINGH',
      songSrc: './Assets/songs/Mareez E Ishq(Mr-Jatt.com).mp3',
      songAvatar: './Assets/Images/image4.jpg'
    },
    {
      songName: 'Teri Ore',
      songArtist: 'SHERYA GHOSHAL, RAHAT FATEH ALI KHAN',
      songSrc: './Assets/songs/Teri Ore [FilmiXpress.Net].mp3',
      songAvatar: './Assets/Images/image8.jpg'
    },
    {
      songName: 'Tum Se Hi',
      songArtist: 'MOHIT CHAUHAN',
      songSrc: './Assets/songs/Tum Se Hi (Jab We Met).mp3',
      songAvatar: './Assets/Images/image3.jpg'
    },
    {
      songName: 'Abhi Kuch Dino Se',
      songArtist: 'MOHIT CHAUHAN',
      songSrc: './Assets/songs/Abhi Kuch Dino Se.mp3',
      songAvatar: './Assets/Images/image1.jpg'
    },
    {
      songName: 'Dil Ibaadat',
      songArtist: 'KK',
      songSrc: './Assets/songs/Dil Ibaadat - Tum Mile 320Kbps.mp3',
      songAvatar: './Assets/Images/image2.jpg'
    },
    {
      songName: 'Hasi Ban Gaye',
      songArtist: 'AMI MISHRA',
      songSrc: './Assets/songs/Hasi Ban Gaye (New Version) Ami Mishra  KASYAP(audiosong.in).mp3',
      songAvatar: './Assets/Images/image3.jpg'
    },
    {
      songName: 'Ijazat',
      songArtist: 'ARIJIT SINGH',
      songSrc: './Assets/songs/Ijazat - One Night Stand (Arijit Singh) 190Kbps.mp3',
      songAvatar: './Assets/Images/image4.jpg'
    },
    {
      songName: 'Jab Tak',
      songArtist: 'Armaan Malik',
      songSrc: './Assets/songs/Jab Tak - MS Dhoni (Armaan Malik) 190Kbps.mp3',
      songAvatar: './Assets/Images/image8.jpg'
    },
    {
      songName: 'Labon Ko',
      songArtist: 'KK',
      songSrc: './Assets/songs/Labon Ko - Bhool Bhulaiyaa 128 Kbps.mp3',
      songAvatar: './Assets/Images/image6.jpg'
    },
    {
      songName: 'Pehli Dafa',
      songArtist: 'ATIF ASLAM',
      songSrc: './Assets/songs/Pehli Dafa (Lofi)_320(PagalWorldl).mp3',
      songAvatar: './Assets/Images/image8.jpg'
    },
    {
      songName: 'Tera Hone Laga Hoon',
      songArtist: 'ATIF ASLAM',
      songSrc: './Assets/songs/Tera Hone Laga Hoon - Atif Aslam - 320Kbps.mp3',
      songAvatar: './Assets/Images/image7.jpg'
    },
    {
      songName: 'Tu Hi Meri Shab Hai',
      songArtist: 'KK',
      songSrc: './Assets/songs/Tu Hi Meri Shab Hai 128 Kbps.mp3',
      songAvatar: './Assets/Images/image5.jpg'
    },
    {
      songName: 'Zara Zara Behkta Hai',
      songArtist: 'BOMBAY JAYSHREE',
      songSrc: './Assets/songs/Zara Zara Bahekta Hai (Rehnaa Hai Terre Dil Mein)(bossmobi)(1).mp3',
      songAvatar: './Assets/Images/image7.jpg'
    }
    
  ]

  const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handlePrevSong = ()=>{
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

  const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
  }


  const vidArray = ['./Assets/Videos/video1.mp4','./Assets/Videos/video2.mp4','./Assets/Videos/video3.mp4','./Assets/Videos/video4.mp4','./Assets/Videos/video5.mp4','./Assets/Videos/video6.mp4','./Assets/Videos/video7.mp4','./Assets/Videos/video8.mp4','./Assets/Videos/video9.mp4','./Assets/Videos/video10.mp4','./Assets/Videos/video11.mp4','./Assets/Videos/video12.mp4'];

  const handleChangeBackground = ()=>{
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    }else{
      setVideoIndex(videoIndex + 1)
    }
  }


  return (
    <>
    <div className="container">
      <audio src='./Assets/songs/Hale Dil - Murder 2 128 Kbps.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
      <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
        <p className='musicPlayer'>Music Player</p>
        <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
        <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
        <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
        <div className="musicTimerDiv">
          <p className='musicCurrentTime'>{musicCurrentTime}</p>
          <p className='musicTotalLenght'>{musicTotalLength}</p>
        </div>
        <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
        <div className="musicControlers">
          <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
          <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
          <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn" onClick={handleChangeBackground}>
        Change Background
      </div>
    </div>
    </>
  );
}

export default App;