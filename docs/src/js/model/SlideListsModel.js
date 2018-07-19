import { loadData } from '../async.js';

export class SlideListsModel {
  constructor(movieData) {
    this.movieData = movieData;
  }

  getNowPlayingData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'now_playing', 1), handler.bind(this));
  }

  getPopularData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'popular', 1), handler.bind(this));
  }

  getTopRatedData(handler) {
    loadData(this.movieData.getMovieDataURL('ko', 'top_rated', 1), handler.bind(this));
  }

  getOldPopMovieData(handler) {
    loadData(this.movieData.getOldPopDataURL('ko'), handler.bind(this));
  }

  getSciFiMovieData(handler) {
    loadData(this.movieData.getSciFiMoveURL('ko'), handler.bind(this));
  }

}