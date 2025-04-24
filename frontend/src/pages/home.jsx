import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <>
            <div className="navBar">
            <div style={{ display: "flex", alignItems: "center" }}>
                    <h2 className="title-heading">TalkWave: Real Connections, Real Time</h2>  {/* New Title */}
                </div>

                <div className="buttons">
                    <Button 
                        className="history-button"
                        onClick={() => navigate("/history")}
                    >
                        History
                    </Button>

                    <Button
                        className="logout-button"
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2 className="creative-heading">"Connecting People Anytime, Anywhere with High-Quality Video Calls"</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>
                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                            />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
            <div className="footer">
                <p>Made with ❤️ by Shaurya</p>  {/* Footer */}
            </div>

        </>
    );
}

export default withAuth(HomeComponent);
