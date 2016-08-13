

const MainComponent = React.createClass({
  getInitialState(){
    return{
      movie : {}
    };
  },
  componentDidUpdate(){
    //console.log(this.state.movie);
  },
  getTitle(){
    $.ajax({
      url : '/getId',
      method : 'GET'
    }).done(obj=>{
      $.ajax({
        url : `http://www.omdbapi.com/?i=${obj.movieId}`,
      }).done(movieInfo=>{
        this.setState({ movie : movieInfo});
      }).fail(err=>console.log(err));
    //  this.setState({movie : obj});
  }).fail(err=>console.log(err));
    //console.log("get movie");
  },
  render(){
    return (
      <div>
        <button onClick={this.getTitle}>GetMovie</button><br/>
        <MovieInfo movie={this.state.movie} getTitle={this.getTitle}/>
      </div>
    );
  }
});

const MovieInfo = React.createClass({
  // getInitialState(){
  //   return{
  //     movie : this.props.movie
  //   }
  // },
  render(){
    if(this.props.movie === {}){
      //this.props.getTitle();
      return(
        <div>
          <h2>Loading ...</h2>
        </div>
      );
    }else{
    // let plot='Plot : '+this.props.movie.Plot;
    // let genre = 'Genre : '+this.props.movie.Genre;

      return (
        <div>
          <span>{this.props.movie.Title} </span>
          <span>({this.props.movie.Year})</span>
          <p>{this.props.movie.Rated}</p>
          <p>{this.props.movie.Runtime}</p>
          <p>{this.props.movie.Plot}</p>
          <p>{this.props.movie.Genre}</p>
        </div>
      );
    }
  }
});


ReactDOM.render(
  <MainComponent/>,
  document.getElementById('root')
);
