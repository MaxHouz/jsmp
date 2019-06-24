import * as React from 'react';
import * as noteActions from '../@store/notes/notes.actions';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { NotesState } from '../@store/notes/notes.state';

interface SearchComponentProps {
    searchString: string;
    search: (query: string) => void
}
interface SearchComponentState {
    searchValue: string
}
class SearchComponent extends React.Component<SearchComponentProps, SearchComponentState> {

    constructor(props: SearchComponentProps) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }
    
    private updateSearchValue(event: any): void {
        this.setState({
            searchValue: event.target.value
        });
    }

    private clearSearch(): void {
        this.setState({
            searchValue: ''
        });
        this.props.search('');
    }
    
    render() {
        return (
            <div className="item">
                <div className="ui icon input">
                    <input
                        value={this.state.searchValue}
                        onChange={(evt: any) => this.updateSearchValue(evt)} 
                        type="text" 
                        placeholder="Search..." />
                    <Button icon="search"
                            onClick={() => this.props.search(this.state.searchValue.toLowerCase())}>  
                    </Button>
                    { !!this.props.searchString 
                        ? <Button
                            onClick={() => this.clearSearch()}>
                            Clear search  
                          </Button>
                        : null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: NotesState): { searchString: string } {
    return {
        searchString: state.search
    }
}

function mapDispatchToProps(dispatch: any) {
    const actions = {
        search: (query: string) => dispatch(noteActions.search(query)),
    }

    return { ...actions };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
(SearchComponent);