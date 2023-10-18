import React, { useEffect, useState } from "react";
import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import './App.css';
import sound from './audio/signal.mp3'

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // in seconds
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let timeoutId;
    if (timerRunning && timeLeft === 0) {
      const audio = document.getElementById('beep');
      audio.play();

     timeoutId =  setTimeout(() => {
        if (timerLabel === "Session") {
          setTimerLabel("Break");
          setTimeLeft(breakLength * 60);
        } else {
          setTimerLabel("Session");
          setTimeLeft(sessionLength * 60);
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timerRunning, timeLeft, timerLabel, breakLength, sessionLength]); //рабочий но 3 ошибки в тестах


  const incrementBreakLength = () => {
    if (!timerRunning && breakLength < 60) {
      setBreakLength(breakLength + 1);
      if (timerLabel === "Break") {
        setTimeLeft((breakLength + 1) * 60);
      }
    }
  };

  const decrementBreakLength = () => {
    if (!timerRunning && breakLength > 1) {
      setBreakLength(breakLength - 1);
      if (timerLabel === "Break") {
        setTimeLeft((breakLength - 1) * 60);
      }
    }
  };

  const incrementSessionLength = () => {
    if (!timerRunning && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      if (timerLabel === "Session") {
        setTimeLeft((sessionLength + 1) * 60);
      }
    }
  };

  const decrementSessionLength = () => {
    if (!timerRunning && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      if (timerLabel === "Session") {
        setTimeLeft((sessionLength - 1) * 60);
      }
    }
  };

  const startStopTimer = () => {
    if (timerRunning) {
      clearInterval(intervalId);
      setTimerRunning(false);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 0) {
            const audio = document.getElementById('beep');
            audio.play();

            // Switch the timer label and reset timeLeft based on the current label
            if (timerLabel === "Session") {
              setTimerLabel("Break");
              return breakLength * 60;
            } else {
              setTimerLabel("Session");
              return sessionLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
      setIntervalId(newIntervalId);
      setTimerRunning(true);
    }
  }; // рабочий оптимизирован но тест не работает


  const resetTimer = () => {
    clearInterval(intervalId); // Stop the running timer
    setTimerRunning(false); // Pause the timer
    setTimerLabel("Session"); // Reset the timer label to "Session"
    setBreakLength(5); // Reset break length to 5
    setSessionLength(25); // Reset session length to 25
    setTimeLeft(25 * 60); // Reset timeLeft to initial session length in seconds
    const audio = document.getElementById('beep');
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Rewind the audio to the beginning
  };

  // Function for converting timeLeft to mm:ss format

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <MDBContainer
      fluid
      className=" d-flex  align-items-center justify-content-center px-0"
      style={{ height: "100vh" }}
    >
      <MDBContainer
        className="  d-flex flex-column justify-content-center align-items-center p-0"
        style={{ maxWidth: "20rem" }}
      >
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center my-3"
          style={{ fontSize: '2rem' }}
        >
          Timer
        </MDBContainer>
        <MDBContainer fluid className="d-flex flex-row mb-3 px-0 ">
          <MDBContainer className="d-flex flex-column align-items-center justify-content-center px-0">
            <MDBContainer id="break-label" className="d-flex align-items-center justify-content-center px-0">
              Break Length
            </MDBContainer>
            <MDBContainer
              className="d-flex flex-row align-items-center justify-content-center "
              style={{ width: "8rem" }}
            >
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center pe-0">
                <MDBIcon id="break-decrement" size="lg" fas icon="chevron-down" onClick={decrementBreakLength} />
              </MDBContainer>
              <MDBContainer id="break-length" className="p-0 d-flex justify-content-center align-items-center ">
                {breakLength}
              </MDBContainer>
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center ps-0">
                <MDBIcon id="break-increment" size="lg" fas icon="chevron-up" onClick={incrementBreakLength} />
              </MDBContainer>
            </MDBContainer>
          </MDBContainer>
          <MDBContainer className="d-flex flex-column align-items-center justify-content-center px-0">
            <MDBContainer id="session-label" className="d-flex align-items-center justify-content-center px-0">
              Session length
            </MDBContainer>
            <MDBContainer
              className="d-flex flex-row align-items-center justify-content-center "
              style={{ width: "8rem" }}
            >
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center pe-0">
                <MDBIcon id="session-decrement" size="lg" fas icon="chevron-down" onClick={decrementSessionLength} />
              </MDBContainer>
              <MDBContainer id="session-length" className="p-0 d-flex justify-content-center align-items-center ">
                {sessionLength}
              </MDBContainer>
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center ps-0">
                <MDBIcon id="session-increment" size="lg" fas icon="chevron-up" onClick={incrementSessionLength} />
              </MDBContainer>
            </MDBContainer>
          </MDBContainer>
        </MDBContainer>
        <MDBContainer
          className="border border-secondary rounded-3 d-flex flex-column align-items-center justify-content-center my-3 p-3 "
          style={{ maxWidth: "9rem", fontSize: '2rem' }}
        >
          <MDBContainer id='timer-label' className="d-flex flex-column align-items-center justify-content-center px-0">
            {timerLabel}
          </MDBContainer>
          <MDBContainer id="time-left" className="d-flex flex-column align-items-center justify-content-center px-0">
            {formatTime(timeLeft)}
          </MDBContainer>
        </MDBContainer>
        <MDBContainer className="d-flex flex-row align-items-center justify-content-center mb-3 px-0 " style={{ width: '7rem', height: '2rem' }}>
          <MDBContainer className="d-flex align-items-center justify-content-center p-0">
            <MDBIcon id="start_stop" size="lg" far icon={timerRunning ? "pause-circle" : "play-circle"} onClick={startStopTimer} />
          </MDBContainer>
          <MDBContainer className="d-flex align-items-center justify-content-center p-0" onClick={resetTimer}>
            <MDBIcon id="reset" size="lg" fas icon="sync" />
          </MDBContainer>
          <audio id="beep" src={sound} ></audio>
        </MDBContainer>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
