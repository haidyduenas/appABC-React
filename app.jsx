let items = [
    { 
        question: "La pelicula más taquillera de Pixar", 
        options : [ "El Rey Leon", "Los Increibles", "Frozen"] ,
        image:"assets/img/fondo.png",
        answer : "Frozen"
    },
    { 
        question: "Pelicula animada más premiada?", 
        options:  ["Buscando a Nemo", "El rey Leon", "UP"] ,
        image :"assets/img/sou.png",
        answer : "El rey Leon"
    },
    { 
        question: "La pelicula ganadora del Oscar a la mejor animacion 2004?", 
        options:["Enredados", "Los Increibles", "Toy Story"], 
        image:"assets/img/in.png",
        answer : "Los Increibles"
    },
    { 
        question: "Largometraje con mas nominaciones al Oscar?", 
        options : ["Wall-E", "Monster Inc","Dory"],
        image:"assets/img/pumba.png",
        answer : "Wall-E"
    },
    { 
        question: "Record al debút más grande para un pelicula animada?", 
        options :["Bichos", "Bolt","Ratatouille"],
        image :"assets/img/fro.png",     
        answer : "Ratatouille"
    }
 ];


class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        answers : [],
        count : 0,
        complete : false,
        compare:false,
        score: 0
     };
   }
    
     options(options){
        return Object.keys(options).map((key, index) => {
            let value = options[key];
            let letters= ["A","B","C"];
            console.log(value);
            return (
            <div className= 'col-lg-4 col-xs-12 text-center' >
                <button className='btn btn-huge' type="button" name="button" key={index} onClick={(e) => this.saveData(e.currentTarget, value)}>
                  <span className='letter'>{letters[index]}</span>{value}
                </button>
            </div>
            ); 
         }
         
        )
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
    loadAnswer(question){
        return (
            <div>
              {!this.state.compare&&<h1 className="text-center">Tus respuestas son:</h1>}
              {this.state.compare&& <h1 className = "text-center"> Tienes  {this.state.score} respuestas correctas:</h1>}
              {this.state.answers.map((a, i) => {
                if (a == items[i].answer && this.state.compare) {
                  return <p className="text-success">{i + 1}. {items[i].question}<strong>  {a}</strong></p>
                } else if (this.state.compare) {
                  return <p className="text-danger">{i + 1}. {items[i].question}<strong>  <strike>{a}</strike> {items[i].answer}</strong></p>
                } else {
                  return <p>{i + 1}. {items[i].question}  <strong>{a}</strong></p>;
                }
              })
              }
              <div className='text-center'>
                {!this.state.compare && <button className='btn-lg btnDark' onClick={() => this.compare()}>Submit</button>}
                {this.state.compare&& <button className ='btn-lg btnDark' onClick={() => this.again()}>Star Again </button>}
              </div>
            </div>
          );
    }
    again(){
        this.setState ({
            answers : [],
            count : 0,
            complete : false,
            compare:false,
            score: 0
         })
    }
    compare(){
        this.setState({
            compare: true
        })
    }
    saveData(e,value){
        let result = this.state.answers;
        result[this.state.count] = value;
        this.setState({
          answers: result
        })
        if (this.state.count === items.length - 1) {
            this.setState({
              complete: true
            });
        }   
            this.setState({
                count: this.state.count + 1
            })
        if (this.state.answers[this.state.count] == items[this.state.count].answer){
                this.setState({
                    score : this.state.score + 1
                })
            }
    }
   render() {
      return (
        <div>
            <header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-question">
                    {!this.state.complete&&<img className="img-responsive img-questions" src={items[this.state.count].image}/>}
                    {this.state.complete&&<img className="img-responsive img-questions" src="assets/img/in.png"/>}
                </div>
            </div>
            </header>
            <div className="row content ">
                <div className="progress-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left pogress-label">
                        <p>{this.state.count} pregunta(s) de 5</p>
                    </div>
                    <div className= "progress">
                        <div className="progress-bar"  >
                            <span className="sr-only">100%</span>
                        </div>
                    </div>  
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    {!this.state.complete && this.loadQuestion()}
                    {this.state.complete && this.loadAnswer()}
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