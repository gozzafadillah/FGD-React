import { combineReducers } from "@reduxjs/toolkit";
import login from "./auth/AuthSlicer";
import topic from "./topic/TopicSlicer";
import thread from "./thread/ThreadSlicer";
import user from "./users/UserSlicer";

const rootReducers = combineReducers({
  login,
  topic,
  thread,
  user,
});

export default rootReducers;
