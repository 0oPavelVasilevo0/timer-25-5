import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import './App.css';
import React, { useEffect, useState } from "react";
import zvonok from './audio/zvonok.mp3'

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60); // in seconds
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  // const [isDelaying, setIsDelaying] = useState(false);

  // useEffect(() => {
  //   let intervalId;
  //   let delayTimerId;

  //   if (timerRunning && timeLeft === 0) {
  //     clearInterval(intervalId); // Clear the existing interval
  //     clearTimeout(delayTimerId); // Clear the delay timer if it's active

  //     setIsDelaying(true); // Set the delay flag

  //     delayTimerId = setTimeout(() => {
  //       const audio = document.getElementById('beep');
  //       audio.play(); // Play the beep sound

  //       // Switch to break or session based on current timer label
  //       if (timerLabel === "Session") {
  //         setTimerLabel("Break");
  //         setTimeLeft(breakLength * 60);
  //       } else {
  //         setTimerLabel("Session");
  //         setTimeLeft(sessionLength * 60);
  //       }

  //       setIsDelaying(false); // Reset the delay flag

  //       // Set a new interval to continue counting down the timer
  //       intervalId = setInterval(() => {
  //         setTimeLeft(prev => {
  //           if (prev === 0) {
  //             const audio = document.getElementById('beep');
  //             audio.play(); // Play the beep sound

  //             // Switch to break or session based on current timer label
  //             if (timerLabel === "Session") {
  //               setTimerLabel("Break");
  //               return breakLength * 60;
  //             } else {
  //               setTimerLabel("Session");
  //               return sessionLength * 60;
  //             }
  //           }
  //           return prev - 1;
  //         });
  //       }, 1000);
  //     }, 1000); // 1 second delay
  //   } else if (!timerRunning) {
  //     clearInterval(intervalId); // Clear the interval if timer is paused
  //     clearTimeout(delayTimerId); // Clear the delay timer
  //   }

  //   return () => {
  //     clearInterval(intervalId); // Clear interval on component unmount
  //     clearTimeout(delayTimerId); // Clear delay timer on component unmount
  //   };
  // }, [timerRunning, timeLeft, breakLength, sessionLength, timerLabel]); 1

  // useEffect(() => {
  //   let intervalId;
  //   let delayTimerId;

  //   if (timerRunning && timeLeft === 0) {
  //     clearInterval(intervalId); // Clear the existing interval
  //     clearTimeout(delayTimerId); // Clear the delay timer if it's active

  //     setIsDelaying(true); // Set the delay flag

  //     delayTimerId = setTimeout(() => {
  //       const audio = document.getElementById('beep');
  //       audio.play(); // Play the beep sound

  //       // Switch to break or session based on the current timer label
  //       if (timerLabel === "session") {
  //         setTimerLabel("break");
  //         setTimeLeft(breakLength * 60);
  //       } else {
  //         setTimerLabel("session");
  //         setTimeLeft(sessionLength * 60);
  //       }

  //       setIsDelaying(false); // Reset the delay flag

  //       // Set a new interval to continue counting down the timer
  //       intervalId = setInterval(() => {
  //         setTimeLeft((prev) => {
  //           if (prev === 0) {
  //             const audio = document.getElementById('beep');
  //             audio.play(); // Play the beep sound

  //             // Switch to break or session based on the current timer label
  //             if (timerLabel === "session") {
  //               setTimerLabel("break");
  //               return breakLength * 60;
  //             } else {
  //               setTimerLabel("session");
  //               return sessionLength * 60;
  //             }
  //           }
  //           return prev - 1;
  //         });
  //       }, 1000);
  //     }, 1000); // 1 second delay
  //   } else if (!timerRunning) {
  //     clearInterval(intervalId); // Clear the interval if the timer is paused
  //     clearTimeout(delayTimerId); // Clear the delay timer
  //   }

  //   return () => {
  //     clearInterval(intervalId); // Clear the interval on component unmount
  //     clearTimeout(delayTimerId); // Clear the delay timer on component unmount
  //   };
  // }, [timerRunning, timeLeft, breakLength, sessionLength, timerLabel]); 2

  // useEffect(() => {
  //   let intervalId;

  //   if (timerRunning) {
  //     intervalId = setInterval(() => {
  //       setTimeLeft(prev => {
  //         if (prev <= 1) {
  //           const audio = document.getElementById('beep');
  //           audio.play(); // Play the beep sound

  //           // Toggle the timerLabel between 'break' and 'session'
  //           setTimerLabel(prevLabel => (prevLabel === 'Session' ? 'Break' : 'Session'));

  //           // Switch timeLeft based on the current timerLabel
  //           return timerLabel === 'Session' ? breakLength * 60 : sessionLength * 60;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //   } else {
  //     clearInterval(intervalId); // Clear the interval if timer is paused
  //   }

  //   return () => {
  //     clearInterval(intervalId); // Clear interval on component unmount or when timer is paused
  //   };
  // }, [timerRunning, timerLabel, breakLength, sessionLength]); хз


  // Effect to update timer-label element whenever timerLabel changes
  // useEffect(() => {
  //   const timerLabelElement = document.getElementById('timer-label');
  //   if (timerLabelElement) {
  //     timerLabelElement.textContent = timerLabel;
  //   }
  // }, [timerLabel]);


  // useEffect(() => {
  //   if (timerRunning && timeLeft === 0) {
  //     const audio = document.getElementById('beep');
  //     audio.play();

  //     // Switch the timer label based on the current label
  //     if (timerLabel === "session") {
  //       setTimerLabel("break");
  //       setTimeLeft(breakLength * 60);
  //     } else {
  //       setTimerLabel("session");
  //       setTimeLeft(sessionLength * 60);
  //     }
      
  //   }
  // }, [timerRunning, timeLeft, timerLabel, breakLength, sessionLength]); хорошо работает

  // Effect for updating timer-label and playing sound
  useEffect(() => {
    if (timerRunning && timeLeft === 0) {
      // Play the sound immediately when timeLeft reaches 0
      const audio = document.getElementById('beep');
      audio.play();

      // Wait for 1 second before switching the timer label
      setTimeout(() => {
        // Switch the timer label based on the current label
        if (timerLabel === "Session") {
          setTimerLabel("Break");
          setTimeLeft(breakLength * 60);
        } else {
          setTimerLabel("Session");
          setTimeLeft(sessionLength * 60);
        }
      }, 1000);
    }
  }, [timerRunning, timeLeft, timerLabel, breakLength, sessionLength]);
 

  // Functions for incrementing and decrementing break/session lengths
  const incrementBreakLength = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const decrementBreakLength = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementSessionLength = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60);
    }
  };

  const decrementSessionLength = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60);
    }
  };

  // Functions for starting, pausing, and resetting the timer
  // const startStopTimer = () => {
  //   if (timerRunning) {
  //     clearInterval(intervalId); // Clear the interval when timer is paused
  //     setTimerRunning(false);
  //   } else {
  //     const newIntervalId = setInterval(() => {
  //       setTimeLeft(prev => {
  //         if (prev === 0) {
  //           const audio = document.getElementById('beep');
  //           audio.play(); // Play the beep sound

  //           // Switch to break or session based on current timer label
  //           if (timerLabel === "Session") {
  //             setTimerLabel("Break");
  //             return breakLength * 60;
  //           } else {
  //             setTimerLabel("Session");
  //             return sessionLength * 60;
  //           }
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //     setIntervalId(newIntervalId);
  //     setTimerRunning(true);
  //   }
  // }; 1

  // const startStopTimer = () => {
  //   if (timerRunning) {
  //     clearInterval(intervalId); // Clear the interval when the timer is paused
  //     setTimerRunning(false);
  //   } else {
  //     const newIntervalId = setInterval(() => {
  //       setTimeLeft((prev) => {
  //         if (prev === 0) {
  //           const audio = document.getElementById('beep');
  //           audio.play(); // Play the beep sound

  //           // Switch to break or session based on the current timer label
  //           if (timerLabel === "session") {
  //             setTimerLabel("break");
  //             return breakLength * 60;
  //           } else {
  //             setTimerLabel("session");
  //             return sessionLength * 60;
  //           }
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //     setIntervalId(newIntervalId);
  //     setTimerRunning(true);
  //   }
  // }; 1

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
              return breakLength * 60;// 
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
  };



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
          style={{fontSize: '2rem'}}
        >
          Timer
        </MDBContainer>
        <MDBContainer fluid className="d-flex flex-row mb-3 px-0 ">
          <MDBContainer className="d-flex flex-column align-items-center justify-content-center px-0">
            <MDBContainer id="break-label" className="d-flex align-items-center justify-content-center px-0">
              Break
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
              Session
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
            <MDBIcon id="reset" size="lg" fas icon="sync"  />
          </MDBContainer>
          <audio id="beep" src={zvonok} ></audio>
        </MDBContainer>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
