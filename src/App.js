//Imports
import { React, Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Books from './components/Books/Books'
import Addbutton from './components/Addbutton/Addbutton'
import Modal from './components/Modal/Modal'
//class component for App.js
class App extends Component {
//constructor
  constructor(props) {
    //passing props to super
    super(props);
    //initializing the state
    this.state = {
      books: [
        {
          'id':1,
          "title": "Alice in Wonder Land",
          "author": "Lewis Carrol",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-14299.jpg?itok=wPpEKSe6',
          'status': 'already'
        },
        {
          'id':2,
          "title": "The Phantom Of Opera",
          "author": "Gaston Leroux",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-4343.jpg?itok=YhjSG6R1',
          'status': 'reading'
        },
        {
          'id':3,
          "title": "Clarimonde",
          "author": "Theophile Gautier",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-auto-18294.jpg?itok=BUc7Pn4v',
          'status': 'toread'
        },
        {
          'id':4,
          "title": "The Art of War",
          "author": "Sun Tzu",
          'img': 'https://covers.openlibrary.org/b/id/7883930-L.jpg',
          'status': 'already'
        },
        {
          'id':5,
          "title": "A Tale of Two Cities",
          "author": "Charles Dickens",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-2212.jpg?itok=QQ3T3t-Z',
          'status': 'reading'
        },
        {
          'id':6,
          "title": "The Three Musketeers",
          "author": "Alexandre Dumas",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-2382.jpg?itok=bav8KXIW',
          'status': 'toread'
        },
        {
          'id':7,
          "title": "The Invisible Man",
          "author": "H.G Wells",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-7340.jpg?itok=E-rNYNDg',
          'status': 'already'
        },
        {
          'id':8,
          "title": "The Machine Stops",
          "author": "E.M Foster",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-auto-17173.jpg?itok=AX1zpUTf',
          'status': 'toread'
        },
        {
          'id':9,
          "title": "BlindSight",
          "author": "Peter Watts",
          'img': 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-15538.jpg?itok=6oWCvRBu',
          'status': 'already'
        },
      ],
      'view':'all',
      'modal':false
    };
  }
  //click handler
  //It handles all the click functionality in the app
  clickHandler=(e)=>{
    //getting name to see where to apply the click handler
    const name=e.target.getAttribute('name')
    console.log(name);
    // click handler for changing views to what books are in read, already and
    // in reading
    if(name==='all')this.setState({'view':'all'})
    else if(name==='already')this.setState({'view':'already'})
    else if(name==='toread')this.setState({'view':'toread'})
    else if(name==='reading')this.setState({'view':'reading'})
    //showing the modal
    else if(name==='addbutton')this.setState({"modal":true})
    //hiding the modal on close button
    else if(name==='close')this.setState({"modal":false})
    //hiding the modal on overlay click
    else if(name==='overlay')this.setState({"modal":false})
    //click handler for adding new book
    else if(name==='addnewbook'){
      const id=this.state.books.length+1
      const title=this.state.title
      const author =this.state.author
      const img=this.state.link
      const status=this.state.addto
      const obj={id,title,author,img,status}
      const books=[...this.state.books]
      console.log(books)
      books.push(obj);
      this.setState({books:books})
      console.log(this.state.books)
    }
  }
  //change handler for all the change events in the app
  changeHandler=(e)=>{
    //geting name to know where to apply change handler
    const name=e.target.getAttribute('name')
    //chamge book status for example changing status of bookfrom reading to already read
    if(name==='statuschange'){
    const value=e.target.value
    const id=e.target.getAttribute('id')
    let obj=this.state.books.filter(book=>book.id==id)
    obj=obj[0]
    let index=this.state.books.findIndex(book=>book.id==id);
    obj.status=value;
    console.log(index)
   let books=this.state.books
    books[index]=obj
    this.setState({books:books})
    }
    //change handler for title field in modal
    else if(name=='title'){
      this.setState({title:e.target.value})
    }
    //change handling for the author field in modal
    else if(name=='author'){
      this.setState({author:e.target.value})
    }
    //change handling for the link field in the modal
    else if(name=='link'){
      this.setState({link:e.target.value})
    }
    //change handling for the status field in the modal
    else if(name=='addto'){
      this.setState({addto:e.target.value})
    }
  }
  //render function
  render() {
    return (
      //main app div
      <div className="App">
        {/* render navbar */}
        <Navbar  onClick={(e) => this.clickHandler(e)} />
        {/* render books component */}
        <Books books={this.state.books} view={this.state.view} onChange={this.changeHandler}  />
        {/* render add new books button */}
        <Addbutton onClick={this.clickHandler}/>
        {/* conditional rendering of modal */}
        {(this.state.modal)?<Modal onClick={(e) => this.clickHandler(e)} onChange={this.changeHandler}/>:''}
      </div>
    );
  }
}
//provide the default export
export default App;
 