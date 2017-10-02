
class Quiz extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        text: "",
        todolist: props.list
     };

   }
   
  /*
   onSubmit(e) {
      e.preventDefault();
      console.log("onSubmit");
      var item = {
         text: this.state.text,
         checked: false
      };
      this.setState({
         text: "",
         todolist: this.state.todolist.concat([item])
      });
   }
   onChange(e) {
      console.log("onChange", e.target.value);
      this.setState({
         text: e.target.value,
         todolist: this.state.todolist
      });
   }
*/
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
                </div>
                <div className="btn-cont answers">
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className="btn btn-huge" id="opcion1" type="button" name="button">
                            <span className="letter a">A</span>Avianca
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