const MainComponent = React.createClass({
  getTitle(){
    console.log("get movie");
  },
  render(){
    return (
      <div>
        <button onClick={this.getTitle}>GetMovie</button>
        <MovieInfo/>
      </div>
    );
  }
});

const MovieInfo = React.createClass({
  render(){
    return (
      <p>Information about Movie</p>
    );
  }
});


ReactDOM.render(
  <MainComponent/>,
  document.getElementById('root')
);
