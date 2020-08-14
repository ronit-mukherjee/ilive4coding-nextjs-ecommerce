const { combineReducers } = require("redux");
const { ourTeamReducer } = require("./components/OurTeam/OurTeam.reducers");

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
});
