// Массив данных входит в объект News
var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
  ];
// Комментарии
var Comment = React.createClass({
  render: function(){
    return(
      <p className='app2'>
        Комментарии
      </p>
    )
  }
});
//Article входит в объект News и наследует его data
var Article = React.createClass({
  propTypes:{
    data: React.PropTypes.shape({
        author:React.PropTypes.string.isRequired,
        text:React.PropTypes.string.isRequired,
        bigText:React.PropTypes.string.isRequired
    })
  },
  getInitialState: function(){
    return{
      visible: false
    }
  },
  readmoreClick: function(e) {
    e.preventDefault();
    this.setState({visible: true});
  },
  render: function() {
    var author = this.props.data.author,
      text = this.props.data.text,
      bigText = this.props.data.bigText,
      visible = this.state.visible;
      console.log('render',this); //добавили console.log
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
        <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
      </div>
    )
  }
});

//Новости
var News = React.createClass({
  render: function() {
    var data = this.props.data;
    if(data.length>0){
      var newsTemplate = data.map(function(item, index) {
        return (
              <Article  key={index} data={item}/>
          )
      })
      return (
        <div className="news">
          {newsTemplate}
          <strong className='news__count'>Всего новостей:{data.length}</strong>
        </div>
      );
    }else {
      return(
        <div className="news">
        Новостей нет
        </div>
      )
    }
  }
});
//input
var Add = React.createClass({
  getInitialState: function() { //устанавливаем начальное состояние (state)
    return {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.author).focus();
  },
  onBtnClickHandler: function(e) {
  e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
  alert(author + '\n' + text);
  },
  onCheckRuleClick: function(e) {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем зна
  },
  onAuthorChange: function(e) {
    if (e.target.value.trim().length > 0) {
    this.setState({authorIsEmpty: false})
  } else {
    this.setState({authorIsEmpty: true})
  }
  },
    onTextChange: function(e) {
  if (e.target.value.trim().length > 0) {
    this.setState({textIsEmpty: false})
  } else {
    this.setState({textIsEmpty: true})
    }
  },
  onBtnClickHandler: function() {
    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
    alert(author + '\n' + text);
  },
  render: function() {
    var agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;
    return (
      <form className='add cf'>
        <input type='text' className='add__author' defaultValue='' placeholder='Ваше имя' ref='author' onChange={this.onAuthorChange}/>
        <textarea className='add__text' defaultValue='' placeholder='Текст новости' ref='text' onChange={this.onTextChange}></textarea>
        <label className='add__checkrule'>
          <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
        </label>
        <button className='add__btn' onClick={this.onBtnClickHandler} ref='alert_button' disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
          Показать alert
        </button>
        </form>
    );
  }
});
//Объект App в котором собраются все остальные объекты
var App = React.createClass({
  render:function(){
    return(
      <div className='app'>
        Новости<br/>
        <News data={my_news}/>
        <Comment/>
      </div>
    );
  }
});
// Рендеринг в ДОМ
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
ReactDOM.render(
  <Add/>,
  document.getElementById('doom')
);


//Отдельная функция тестирования map()
var numbers = [1,4,9];
var doubles = numbers.map(function(num){
  return num*2;
});

console.log(doubles);
