import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "student": null,
        };

        this.change_netid = this.change_netid.bind(this);
    }

    change_netid(){
        let netid =  document.getElementById("search_bar-search").value;
        this.set_student_info(netid);
    }

    componentDidMount(){
        this.setState({
            student: null,
        });
    }

    set_student_info(netid){
        console.log("testing netid: "+netid);
        if(netid === ""){
            console.log("empty box");
            this.setState({
                response: null,
                student: null,
            });
        }
        
        fetch('http://localhost:81/student/get/'+netid,{
            method: 'GET',
        })
        .then(result => result.json(), result.stats)
        .then((data, response_code) => {
                this.setState({
                    response: response_code,
                    student: data,
                });
            },
            (error, response_code) => {
                this.setState({
                    error_code: response_Code,
                    error
                });
            }
        )
    }

    render () {
        return (
        <>
            <div>
                <input id="search_bar-search" type="text"/>
                <button onClick={this.change_netid}>Search</button>
            </div>
            <div>
                <Student_info student={this.state.student}/>
            </div>
        </>
        );
    }
}

class Student_info extends React.Component{
    constructor(props) {        
        super(props);
    }

    render()
    {   
        console.log("rendering now...");
        console.log(this.props.student);
        if(this.props.student === null){
            console.log("is empty")
            return (
                <div>
                    <p>No student searched yet.</p>
                </div>
            );
        }

        else{
            console.log("rendering a student");
            console.log("this.props.student = "+this.props.student.status);
            return (
                <div id='netidholder'>
                    <p>netid= {this.props.student.desc}</p>
                </div>
            );
        }
    }
}

export { Search };