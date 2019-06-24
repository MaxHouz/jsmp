import * as React from 'react';
import { Link } from 'react-router-dom'
import AddNoteCompenent from './add-note.component';
import SearchComponent from './search.component';

interface HeaderComponentState {
    addNoteOpen: boolean;
}

export class HeaderComponent extends React.Component<any, HeaderComponentState> {

    constructor(props: any){
        super(props);
        
        this.state = {
            addNoteOpen: false
        }
    }

    private toggleAddNote() {
        this.setState({
            addNoteOpen: !this.state.addNoteOpen
        })
    }

    render() {  
      return (
          <>
            <div className="ui menu pointing">
                <Link to={{ pathname: '/' }} className="item">Notes</Link>
                <Link to={{ pathname: '/archieve' }} className="item">Archieve</Link>
                <div className={`item add-note__button  ${this.state.addNoteOpen ? 'active' : null}`} 
                     onClick={() => this.toggleAddNote()}
                >
                    Add note
                </div>
                <div className="right menu">
                    <SearchComponent/>
                </div>
            </div>
            <div className="add-note">
                {this.state.addNoteOpen ? <AddNoteCompenent/> : null}
            </div>
          </>
      )
    }

  }