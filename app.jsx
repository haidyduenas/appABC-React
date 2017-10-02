let items = [
    { 
        question: "La pelicula más taquillera de Pixar", 
        options : ["El Rey Leon", "Los Increibles", "Frozen"] ,
        imagen:"assets/img/fondo.png",
        answer : 2
    },
    { 
        question: "Pelicula animada más premiada?", 
        options:  ["Buscando a Nemo", "El rey Leon", "UP"] ,
        imagen :"assets/img/sou.png",
        answer : 1
    },
    { 
        question: "La pelicula ganadora del Oscar a la mejor animacion 2004?", 
        options:["Enredados", "Los Increibles", "Toy Story"], 
        imagen:"assets/img/in.png",
        answer : 1
    },
    { 
        question: "Largometraje con mas nominaciones al Oscar?", 
        options : ["Wall-E", "Monster Inc","Dory"],
        imagen:"assets/img/pumba.png",
        answer : 0 
    },
    { 
        question: "Record al debút más grande para un pelicula animada?", 
        options :["Bichos", "Bolt","Ratatouille"],
        imagen :"assets/img/fro.png",     
        answer : 2
    }
 ];


class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        answers : [],
     };
   }

    loadQuestion() {
        return(
        <div>
            <h1 className="text-center"> 
                {items[0].question} 
            </h1>
          </div>
        )
       
        //eliminar todo en el área de preguntas
            questionArea.innerHTML = "";
        //agregar todas las respuestas posibles el área de respuesta
            questionArea.innerHTML = question;
    }

    
   render() {
      return (
        <div>
            <header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-question">
                    <img className="img-responsive img-questions"/>
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
                    {this.loadQuestion()}
                </div>
                <div className="btn-cont answers">
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className="btn btn-huge" id="opcion1" type="button" name="button">
                            <span className="letter ">A</span>Avianca
                        </button>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className="btn btn-huge" type="button" name="button">
                            <span className="letter">B</span>KLM
                        </button>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className="btn btn-huge" type="button" name="button">
                            <span className="letter">C</span>Qantas
                        </button>
                    </div>
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