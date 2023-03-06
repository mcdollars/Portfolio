import React,{Component} from "react";
import axios from "axios"
export default class Journey extends Component {
  constructor(props){
    super(props)
    
  }
  state = {
    journeys: []
  }
  
  componentDidMount() {

    axios.get(`https://script.google.com/macros/s/${import.meta.env.VITE_KEY}/exec?action=read&table=journey`)
    .then(response => {
      const journey = response.data;
      console.log(journey.data);
      this.setState ({journeys:journey.data});
    })
  }
  render() {
  return( 
    <section id="journey" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Journey</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg pb-10">My life career journey.</p>
          
        <div >
            {this.state.journeys?.map((journey, i) => (
                <div key={i} className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                    <div className="col-span-4 w-full h-full ">
                        {i%2==0 ? 
                        <div className="border-2 group border-cyan-600 w-full h-full bg-gray-900 rounded-md p-2 md:pl-4 text-left">
                          <h1 className="uppercase text-white text-xl font-medium  group-hover:text-cyan-600 py-2 ">{journey.title}
                            <span className="text-sm text-gray-600" > {journey.year}</span>
                          </h1>
                          <p className="text-gray-100 sm:text-sm text-xs">{journey.content}</p>
                        </div> : "" }
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-cyan-700"></div>
                        <div className="absolute w-6 h-6 p-1 rounded-full bg-cyan-700 z-10 text-white text-center"><ion-icon name='book'></ion-icon></div>
                    </div>
                    <div className="col-span-4 w-full h-full">
                        {i%2!=0 ? 
                        <div className="border-2 group border-cyan-600 w-full h-full bg-gray-900 rounded-md p-2 md:pl-4 text-left">
                            <h1 className="uppercase text-white text-xl font-medium  group-hover:text-cyan-600 py-2 ">{journey.title}
                              <span className="text-sm text-gray-600" > {journey.year}</span>
                            </h1>
                            <p className="text-gray-100 sm:text-sm text-xs">{journey.content}</p>
                        </div> : "" }
                    </div>
                
                </div>
            ))}

        </div>

      </div>

    </section>
  )

  }
}

