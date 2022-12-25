import React,{Component} from "react";
import axios from "axios";
import hireMe from "../assets/images/hireMe.png";
export default class Hireme extends Component {
  constructor(props){
    super(props)
    
  }
  state = {
    Resume: []
  }
  
  componentDidMount() {

    axios.get(`https://script.google.com/macros/s/${import.meta.env.VITE_KEY}/exec?action=read&table=Bio&id=1`)
    .then(response => {
      const skil = response.data;
      this.setState ({Resume:skil.data.resume});
    })
  }
  render() {

  return( 
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          Career Objective !
            {/* Do you want any work from me? */}
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Looking for a challenging role in a reputable organization to utilize my technical, database,and
          management skills for the growth of the organization as well as to enhance my knowledge about
          new and emerging trends in the IT sector.
          </p>
          <a href={this.state.Resume} target="_blank"><button  className="btn-primary mt-10"> Resume</button></a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>

  )

  }
}
