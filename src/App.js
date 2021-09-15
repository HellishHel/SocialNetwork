import logo from './logo.svg';
import './App.scss';

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <div className="main-content">
                    <Route path={"/profile"} render={ () => <Profile
                        page={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/> } />
                    <Route path={"/dialogs"} render={ () => <Dialogs page={props.state.dialogsPage} /> } />
                    <Route path={"/news"} component={News} />
                    <Route path={"/music"} component={Music} />
                    <Route path={"/settings"} component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
