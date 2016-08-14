

const MainComponent = React.createClass({
  getInitialState(){
    return{
      movie : {},
      movObj : {}
    };
  },
  // componentDidUpdate(){
  //   //console.log(this.state.movie);
  // },
  getTitle(){
    $.ajax({
      url : '/getId',
      method : 'GET'
    }).done(obj=>{
      this.setState({movObj : obj});
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
        <button className="btn btn-primary" onClick={this.getTitle}>Get Movie</button>
        <MovieInfo movie={this.state.movie} movObj={this.state.movObj} getTitle={this.getTitle}/>
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
    // if(this.props.movie === {}){
    //   //this.props.getTitle();
    //   return(
    //     <div>
    //       <h2>Loading ...</h2>
    //     </div>
    //   );
    // }else{
    // let plot='Plot : '+this.props.movie.Plot;
    // let genre = 'Genre : '+this.props.movie.Genre;

      return (
        <div className="mainDiv">
          <br/>
          <img width="251" src={this.props.movie.Poster}/>
          <p className="movieTitle">{this.props.movie.Title}</p>
          <span className="movieYear">{this.props.movie.Released} </span>
          <span className="movieRating">{this.props.movie.Rated}</span>
          <p>{this.props.movie.Runtime}</p>
          <p>{this.props.movie.Genre}</p>
          <p className="plot">{this.props.movie.Plot}</p>
        </div>
      );
    // }
  }
});


ReactDOM.render(
  <MainComponent/>,
  document.getElementById('root')
);
