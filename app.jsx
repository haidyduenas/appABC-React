let items = [
    { 
        question: "La pelicula más taquillera de Pixar", 
        options : ["El Rey Leon", "Los Increibles", "Frozen"] ,
        image:"assets/img/fondo.png",
        answer : 2
    },
    { 
        question: "Pelicula animada más premiada?", 
        options:  ["Buscando a Nemo", "El rey Leon", "UP"] ,
        image :"assets/img/sou.png",
        answer : 1
    },
    { 
        question: "La pelicula ganadora del Oscar a la mejor animacion 2004?", 
        options:["Enredados", "Los Increibles", "Toy Story"], 
        image:"assets/img/in.png",
        answer : 1
    },
    { 
        question: "Largometraje con mas nominaciones al Oscar?", 
        options : ["Wall-E", "Monster Inc","Dory"],
        image:"assets/img/pumba.png",
        answer : 0 
    },
    { 
        question: "Record al debút más grande para un pelicula animada?", 
        options :["Bichos", "Bolt","Ratatouille"],
        image :"assets/img/fro.png",     
        answer : 2
    }
 ];


class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        answers : [],
        count : 0,
        complete : false
     };
   }
    
     options(options){
        return Object.keys(options).map((key, index) => {
            let value = options[key];
            return (
            <div className={this.state.answers[this.state.count]==value? 'col-sm-4':'col-xs-12'} >
                <button className='btn btn-huge' type="button" name="button" key={index} onClick={(e) => this.saveData(e.currentTarget, value)}>
                  <span className='letter'>{key}</span>{value}
                </button>
            </div>); 
         })
    }

    loadQuestion() {
        return(
            <div>
            <div>
                <h1 className="text-center"> 
                    {items[this.state.count].question} 
                </h1>
            </div>
            <div className="btn-cont answers">
               {this.options(items[this.state.count].options)} 
            </div>
            </div>
            )
    }
    
    saveData(e,value){
        let res = this.state.answers;
        res[this.state.count] = value;
        this.setState({
          answers: res
        })
        if (this.state.count === items.length - 1) {
            this.setState({
              complete: true
            });
        }   
            this.setState({
                count: this.state.count + 1
            })
    }

   render() {
      return (
        <div>
            <header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-question">
                    <img className="img-responsive img-questions" src={items[this.state.count].image}/>
                </div>
            </div>
            </header>
            <div className="row content ">
                <div className="progress-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pogress-label">
                <div className="checkAnswers invisible">
                    <h3>your progress:</h3>
                <div className="checker"></div>
                </div>
            </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center questions">
                    {!this.state.complete && this.loadQuestion()}
                    {this.state.complete && this.loadQuestion()}
                </div>

                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
                    <ul className="social-network social-circle">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                    </ul>               
                </div>
            </div>
        </div>
      );
   }
}
 

ReactDOM.render(<Quiz/>, document.getElementById("container"));