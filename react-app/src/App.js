import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";

import NavBar from "./components/LandingPage/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import User from "./components/User";
import AllStories from "./components/LandingPage/homePage";
import ViewStory from "./components/StoryDetailsPage/ViewStory";
import CreateStory from "./components/forms/CreateStoryForm";
import EditStory from "./components/forms/EditStoryForm";
import PostComment from "./components/forms/CreateCommentForm";
import EditComment from "./components/forms/EditCommentForm";
// import SideBar from "./components/sideBar";
import CommentCards from "./components/commentCards";
import Menu from "./components/menu";
import { authenticate } from "./store/session";

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact={true}>
                    <LoginForm />
                </Route>

                {/* <Route path="/sign-up" exact={true}>
                    <SignUpForm />
                </Route> */}
                <Route path="/story/:storyId/test" exact={true}>
                    <NavBar />
                    <CommentCards />
                </Route>
                <Route path="/story/:storyId/comments" exact={true}>
                    <PostComment />
                </Route>
                <Route path="/story/:storyId/comments/:commentId">
                    <EditComment />
                </Route>
                <ProtectedRoute path="/story/:storyId/edit" exact={true}>
                    <EditStory />
                </ProtectedRoute>

                <ProtectedRoute path="/users/:userId" exact={true}>
                    <User />
                </ProtectedRoute>
                <ProtectedRoute path="/story" exact={true}>
                    <CreateStory />
                </ProtectedRoute>
                <ProtectedRoute path="/story/:storyId" exact={true}>
                    <ViewStory />
                </ProtectedRoute>
                <Route path="/" exact={true}>
                    <NavBar />
                    <AllStories />
                </Route>
                {/* <Route path="/story/:storyId/sidebar" exact={true}>
                    <NavBar />
                    <SideBar />
                </Route> */}
                <Route path="/menu" exact={true}>
                    <NavBar />
                    <Menu />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
