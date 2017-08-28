import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import {SERVER_PATH_V4} from '../common/links';
import * as cnst from '../common/constants';
import * as MoviesActions from '../actions/MoviesActions';
import Pager from 'react-pager';
import { withRouter } from "react-router";

class MovieDetails extends React.Component {

    componentDidMount(){
        const movie_id = this.props.params.id;
        this.loadDetails(movie_id);
    }

    loadDetails = (movie_id) => {
        if(movie_id){
            MoviesActions.getMovieDetail(this.props.reseiveData,movie_id);
            MoviesActions.getMovieRecomendations(this.props.reseiveData,movie_id);
        }else{
            this.props.router.push('/');
        }
    }
    goBack = () => {
        this.props.reseiveData({
            type: cnst.ClEAN_MOVIE_DETAILS, 
            params: {} 
        })
        this.props.reseiveData({
            type: cnst.ClEAN_MOVIE_COLLECTION, 
            params: {} 
        })
        this.props.reseiveData({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        this.props.router.push('/');
    }
    quit = () => {
        localStorage.clear();
        this.props.reseiveData({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        this.props.router.push('/');
    }
    showDetails = (movie) =>{
        this.loadDetails(movie.id);
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }
    render() {
        const details = this.props.movie_details;
        const movie_recomendations = this.props.movie_recomendations;
        const collection = this.props.movie_collection;
        if(details){
            return(
                <main>
                    <nav className='nav'>
                        <button 
                            onClick={this.goBack}>
                                Back
                        </button>
                        <button 
                            className='quit'
                            onClick={this.quit}>
                                Quit
                        </button>
                    </nav>
                    <h3>{details.original_title}</h3>
                    <h4><em>{details.overview}</em></h4>
                    <h5>Release date: {details.release_date} / Vote average: {details.vote_average}</h5>
                    <img src={`${SERVER_PATH_V4}/w500${details.poster_path}`} alt={details.original_title} />
                    <hr/>
                    {details.belongs_to_collection && 
                        <section>
                            <h3>{details.belongs_to_collection.name}</h3>
                            <img src={`${SERVER_PATH_V4}/w500${details.belongs_to_collection.poster_path}`} />
                            {collection.parts && 
                                <div className='movies_list'>
                                    {
                                        collection.parts.map((movie,index) => {
                                            return (
                                                <div key={index} className='movie_block' onClick={this.showDetails.bind(this,movie)}>
                                                    <h3>{movie.original_title}</h3>
                                                    <img src={`${SERVER_PATH_V4}/w300${movie.poster_path}`} alt={movie.original_title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                }
                        </section>
                    }
                    <hr/>
                    <h3>Recomendations</h3>
                    <section 
                    className='movies_list'>
                        {movie_recomendations.results &&
                            movie_recomendations.results.map((movie,index) =>{
                                return (
                                    <div key={index} className='movie_block' onClick={this.showDetails.bind(this,movie)}>
                                        <h3>{movie.original_title}</h3>
                                        <img src={`${SERVER_PATH_V4}/w300${movie.poster_path}`} alt={movie.original_title} />
                                    </div>
                                )                 
                            })
                        }
                    </section>
                </main>
            )
        }else{
            return <div>Wait</div>
        }
    }
}

const stateToProps = (state) => {
  return {
    movie_details: state.movie_details,
    movie_recomendations : state.movie_recomendations,
    movie_collection : state.movie_collection
  }
}

const dispatchToProps = (dispatch) => {
  return {
    reseiveData: (state) => {
      dispatch(state)
    }
  }
}

MovieDetails = connect(
    stateToProps,
    dispatchToProps
    )(MovieDetails);

export default withRouter(MovieDetails);