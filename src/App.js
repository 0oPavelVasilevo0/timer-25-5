import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import './App.css';

function App() {
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
        >
          25 + 5 Clock
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
                <MDBIcon id="break-decrement" size="lg" fas icon="chevron-down" />
              </MDBContainer>
              <MDBContainer id="break-length" className="p-0 d-flex justify-content-center align-items-center ">
                5
              </MDBContainer>
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center ps-0">
                <MDBIcon id="break-increment" size="lg" fas icon="chevron-up" />
              </MDBContainer>
            </MDBContainer>
          </MDBContainer>
          <MDBContainer className="d-flex flex-column align-items-center justify-content-center px-0">
            <MDBContainer id="session-label" className="d-flex align-items-center justify-content-center px-0">
              Session Length
            </MDBContainer>
            <MDBContainer
              className="d-flex flex-row align-items-center justify-content-center "
              style={{ width: "8rem" }}
            >
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center pe-0">
                <MDBIcon id="session-decrement" size="lg" fas icon="chevron-down" />
              </MDBContainer>
              <MDBContainer id="session-length" className="p-0 d-flex justify-content-center align-items-center ">
                25
              </MDBContainer>
              <MDBContainer className="d-flex flex-column justify-content-center align-items-center ps-0">
                <MDBIcon id="session-increment" size="lg" fas icon="chevron-up" />
              </MDBContainer>
            </MDBContainer>
          </MDBContainer>
        </MDBContainer>
        <MDBContainer
          className="border border-secondary rounded-3 d-flex flex-column align-items-center justify-content-center mb-3 p-3 "
          style={{ maxWidth: "8rem", fontSize: '2rem' }}
        >
          <MDBContainer id="timer-label" className="d-flex flex-column align-items-center justify-content-center px-0">
            Timer
          </MDBContainer>
          <MDBContainer id="time-left" className="d-flex flex-column align-items-center justify-content-center px-0">
            25:00
          </MDBContainer>
        </MDBContainer>
        <MDBContainer className="d-flex flex-row align-items-center justify-content-center mb-3 px-0 " style={{ width: '5rem', height: '2rem' }}>
          <MDBContainer className="d-flex align-items-center justify-content-center p-0">
            <MDBIcon id="start_stop" size="lg" far icon="play-circle" />
          </MDBContainer>
          <MDBContainer className="d-flex align-items-center justify-content-center p-0">
            <MDBIcon id="start_stop" size="lg" far icon="pause-circle" />
          </MDBContainer>
          <MDBContainer className="d-flex align-items-center justify-content-center p-0">
            <MDBIcon id="reset" size="lg" fas icon="sync" />
          </MDBContainer>
          
        </MDBContainer>
      </MDBContainer>
    </MDBContainer>
  );
}

export default App;
