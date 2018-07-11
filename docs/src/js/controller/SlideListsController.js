import { loadData } from '../async.js';


export class SlideListsController {
  constructor(slideListsView, movieData) {
    this.slideListsView = slideListsView;
    this.movieData = movieData;

    slideListsView.bindShowListController(this.showListController.bind(this));
    slideListsView.bindHideListController(this.hideListController.bind(this));

    slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));

    this.initNowPlayingData(this.getMovieListData.bind(this));
    this.initSlideCategoriesLoad(this.getCategoriesData.bind(this))
  }


  initNowPlayingData(handler) {
    loadData(this.movieData.getDataURL('ko', 'now_playing', 1), handler.bind(this));
  }
  
  initPopularData(handler) {
    loadData(this.movieData.getDataURL('ko', 'popular', 1), handler.bind(this));
  }
  
  initTopRatedData(handler) {
    loadData(this.movieData.getDataURL('ko', 'top_rated', 1), handler.bind(this));
  }
  
  initLatestData(handler) {
    loadData(this.movieData.getDataURL('ko', 'latest', 1), handler.bind(this));
  }

  initSlideCategoriesLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }

  getMovieListData(data) {
    this.slideListsView.bindRenderTemplate(data.results);
  }

  getCategoriesData(data) {
    this.slideListsView.bindRenderCategoriesTemplate(data.장르);
  }


  showListController() {
    if (this.slideListsView.listCount === 0) {
      this.slideListsView.slideListNextBtn.style.display = 'block';
    } else {
      this.slideListsView.slideListPrevBtn.style.display = 'block';
      this.slideListsView.slideListNextBtn.style.display = 'block';
    }
  }


  hideListController() {
    this.slideListsView.slideListPrevBtn.style.display = 'none';
    this.slideListsView.slideListNextBtn.style.display = 'none';
  }


  clickSlideListPrevBtn() {
    if (this.slideListsView.listCount < 0) { this.slideListsView.listCount += 75; }
    this.slideListsView.cinemaSlideContents.style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
  }


  clickSlideListNextBtn() {
    this.slideListsView.listCount > -300 ? this.slideListsView.listCount -= 75 : this.slideListsView.listCount = 0;
    this.slideListsView.cinemaSlideContents.style.transform = `translate3d(${this.slideListsView.listCount}%, 0px, 0px)`;
  }


}