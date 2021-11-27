import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as creators from '../actions/creators';
import Main from "./Main";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(creators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;