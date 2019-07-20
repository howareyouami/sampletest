var React = require('react'); 
const axios = require('axios');

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            list:[]
        };
      }
      
  componentWillMount() {
    this.setState({loading:true})
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then((response)=>{
        // handle success
        this.setState({list:response.data})
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(()=>{
        this.setState({loading:false})
        // always executed
    });
}
    
  render() {
    return (
    <>
    {this.state.loading&&<div>Loading</div>}
    {"length is:"+this.state.list.length}
    {this.state.list.map((item)=>{
            return(<p key={item.id}>{item.employee_name}</p>)
        })}
    </>
    );
  }
}