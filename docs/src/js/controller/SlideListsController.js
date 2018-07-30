import { $on, $qs, $qsa } from '../utils/helper.js';
import { loadData } from '../async.js';

export class SlideListsController {
  constructor(slideListsView, slideListsModel) {
    this.slideListsView = slideListsView;
    this.slideListsModel = slideListsModel;
    this.initSlideLoad(this.getSlideData);
    this.count = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    }


  }

  initSlideLoad(handler) {
    loadData('src/js/db.json', handler.bind(this));
  }

  getSlideData(data) {
    this.slideListsView.bindRenderSlideTemplate(data.genres);
    this.slideListsModel.getDavidLynchMovieData(this.getFirstMovieListData.bind(this));
    this.slideListsModel.getOldPopMovieData(this.getSecondMovieListData.bind(this));
    this.slideListsModel.getSciFiMovieData(this.getThridMovieListData.bind(this));
    this.slideListsModel.getGodardMovieData(this.getFourthMovieListData.bind(this));
    this.slideListsModel.getPopularData(this.getFifthMovieListData.bind(this));
    this.slideListsModel.getComedyMovieData(this.getSixthMovieListData.bind(this));
    this.slideListsModel.getBradPittMovieData(this.getSeventhMovieListData.bind(this));
    this.slideListsModel.getKieslowskiMovieData(this.getEighthMovieListData.bind(this));

    this.slideListsView.bindShowListController(this.showListController);
    this.slideListsView.bindHideListController(this.hideListController);

    this.slideListsView.bindClickSlideListPrevBtn(this.clickSlideListPrevBtn.bind(this));
    this.slideListsView.bindClickSlideListNextBtn(this.clickSlideListNextBtn.bind(this));
  }


  getFirstMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFirstSlideListsTemplate(data.results);
  }

  getSecondMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSecondSlideListsTemplate(data.results);
  }

  getThridMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderThirdSlideListsTemplate(data.results);
  }

  getFourthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFourthSlideListsTemplate(data.results);
  }

  getFifthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderFifthSlideListsTemplate(data.results);
  }

  getSixthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSixthSlideListsTemplate(data.results);
  }

  getSeventhMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderSeventhSlideListsTemplate(data.results);
  }

  getEighthMovieListData(data) {
    data.results = data.results.splice(0, 15);
    return this.slideListsView.bindRenderEighthSlideListsTemplate(data.results);
  }

  showListController() {
    this.childNodes[3].id = 'show-btn'
    this.childNodes[5].id = 'show-btn'
  }


  hideListController() {
    this.childNodes[3].id = '';
    this.childNodes[5].id = '';
  }


  clickSlideListPrevBtn() {
    const target = event.currentTarget.parentNode.childNodes[1]
    let slideContentWidth = $qs('.main__cinemas__list__body__slider__contents__item');
    target.style.transform = `translateX(${0}px)`

  }


  clickSlideListNextBtn() {
    const target = event.currentTarget.parentNode.childNodes[1]
    let slideContents = $qsa('.main__cinemas__list__body__slider__contents__item', target);
    let slideContentsWidth = $qs('.main__cinemas__list__body__slider__contents__item').clientWidth;
    let slideList = $qsa('.main__cinemas__list__body__slider__contents');


    slideList.forEach((elem, idx) => {
      if (elem === target) {
        this.count[idx]++;
        this.count[idx] = this.count[idx] % 3;
        target.style.transform = `translateX(-${slideContentsWidth * 5 * this.count[idx]}px)`;
      }
    })
  }

}