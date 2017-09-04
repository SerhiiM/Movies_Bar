import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import {SERVER_PATH_V4} from '../common/links';
import * as cnst from '../common/constants';
import * as MoviesActions from '../actions/MoviesActions';
import Pager from 'react-pager';
import { withRouter } from "react-router";

let wait = false;

class MoviesList extends React.Component {

    componentDidMount(){
        MoviesActions.getPopularMovies(this.props.reseiveMovies);
    }

    showPopular = () => {
        this.refs.search.value = '';
        this.props.changeViewsStatus({
            type: cnst.CHANGE_VIEW_STATUS, 
            params: {display:'popular_films'} 
        })
        this.props.changeViewsStatus({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        MoviesActions.getPopularMovies(this.props.reseiveMovies);        
    }

    showUpcoming = () => {
        this.refs.search.value = '';
        this.props.changeViewsStatus({
            type: cnst.CHANGE_VIEW_STATUS, 
            params: {display:'upcoming_films'} 
        })
        this.props.changeViewsStatus({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        }) 
        MoviesActions.getUpcomingMovies(this.props.reseiveMovies);       
    }

    searchMovie = () => {
        const search = this.refs.search.value;
        this.props.changeViewsStatus({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        if(search){
            if(!wait){
                wait = true;
                MoviesActions.getSearchMovies(this.props.reseiveMovies,this.refs.search.value);
                setTimeout(()=>{
                    wait = false
                    this.searchMovie()
                }, 500)
            }
            this.props.changeViewsStatus({
                type: cnst.CHANGE_VIEW_STATUS, 
                params: {display:'search_films'} 
            })
        }else{
            this.showPopular() 
        }        
    }
    handlePageChanged= (newPage) => {
        const display = this.props.view_status.display;
        if(display === 'popular_films'){
            MoviesActions.getPopularMovies(this.props.reseiveMovies,newPage+1); 
        }else if(display === 'upcoming_films'){
            MoviesActions.getUpcomingMovies(this.props.reseiveMovies,newPage+1);  
        }else if(display === 'search_films'){
            const search = this.refs.search.value;
            if(search){
                MoviesActions.getSearchMovies(this.props.reseiveMovies,search,newPage+1);
            }  
        }
    }
    showDetails = (movie) =>{
        this.props.changeViewsStatus({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        this.props.router.push(`auth/movie_details/${movie.id}`);
    }
    renderMovies = () => {
        const movies = this.props.movies.results || [];
        return (
            <section 
            className='movies_list'>
                {movies.map((movie,index) =>{
                    return (
                        <div key={index} className='movie_block' onClick={this.showDetails.bind(this,movie)}>
                            <h3>{movie.original_title}</h3>
                            <img src={`${SERVER_PATH_V4}/w300${movie.poster_path}`} alt={movie.original_title} />
                        </div>
                    )                 
                })}
            </section>
        )
    }
    quit = () => {
        localStorage.clear();
        this.props.changeViewsStatus({
            type: cnst.ClEAN_PROGRESS_BARS, 
            progress_bar: {} 
        })
        this.props.router.push('/');
    }
    render() {
        const display = this.props.view_status.display;
        const page = this.props.movies.page - 1 || 0;
        const total_pages = this.props.movies.total_pages -1 || 1;
        return(
            <main>
                <nav className='nav'>
                    <button
                        className={display === 'popular_films' ? 'btn_active':''} 
                        onClick={this.showPopular}>
                        Popular Movies
                    </button>
                    <button
                        className={display === 'upcoming_films' ? 'btn_active':''}  
                        onClick={this.showUpcoming}>
                        Upcoming Movies
                    </button>
                    <input 
                        type='text' 
                        ref='search' 
                        placeholder='Search' 
                        onChange={this.searchMovie} />
                    <button 
                        className='quit'
                        onClick={this.quit}>
                            Quit
                    </button>
                </nav>
                {this.renderMovies()}
                <section className='pagination_block'>
                    <Pager
                        total={total_pages}
                        current={page}
                        visiblePages={5}
                        titles={{ first: '<|', last: '>|' }}
                        className="pagination-md"
                        onPageChanged={this.handlePageChanged}
                    />
                </section>
            </main>
        )
    }
}

const stateToProps = (state) => {
  return {
    movies: state.movies,
    view_status: state.view_status
  }
}

const dispatchToProps = (dispatch) => {
  return {
    reseiveMovies: (state) => {
      dispatch(state)
    },
    changeViewsStatus: (state) => {
      dispatch(state)
    }
  }
}

MoviesList = connect(
    stateToProps,
    dispatchToProps
    )(MoviesList);

export default withRouter (MoviesList);