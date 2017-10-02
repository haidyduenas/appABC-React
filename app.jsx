
class Quiz extends React.Component {
   constructor(props) {
      super(props);
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
            <div class="row content ">
                <div class="progress-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pogress-label">
                <div class="checkAnswers invisible">
                    <h3>your progress:</h3>
                <div class="checker"></div>
                </div>
                </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center questions">
                </div>
                <div class="btn-cont answers">
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <button class="btn btn-huge" id="opcion1" type="button" name="button">
                            <span class="letter a">A</span>Avianca
                        </button>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <button class="btn btn-huge" type="button" name="button">
                            <span class="letter">B</span>KLM
                        </button>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                        <button class="btn btn-huge" type="button" name="button">
                            <span class="letter">C</span>Qantas
                        </button>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
                    <ul class="social-network social-circle">
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
                    </ul>               
                </div>
            </div>
        </div>
      );
   }
}


ReactDOM.render(<Quiz/>, document.getElementById("container"));