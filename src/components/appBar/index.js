import React, { Component } from "react";
import { connect } from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import { withRouter } from 'react-router-dom';



import Page from './page';

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
             text: '',

        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState( { text });

        this.props.findSuggestions(text);
        this.props.history.push('/results');

    }

    onChangeSelection(text) {
        this.setState( { text });

        this.props.findResults(text);
    }

    render() {
        const { text } = this.state;
        const { suggestions } = this.props;

        return (
            <Page 
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    }
}

const mapDispatchToProps = {
    findSuggestions,
    findResults
}


export default withRouter ( 
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
); 