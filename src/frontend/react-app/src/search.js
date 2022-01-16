import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code: null,
            student: null,
        };

        this.change_netid = this.change_netid.bind(this);
    }

    change_netid(){
        let netid =  document.getElementById("search_bar-search").value;
        this.set_student_info(netid);
    }

    set_student_info(netid){
        console.log("testing netid: "+netid);
        if(netid === ""){
            console.log("empty box");
            this.setState({
                code: null,
                student: null,
            });
            return;
        }
        
        fetch('http://localhost:81/student/get/'+netid,{
            method: 'GET',
        })
        .then(result => result.json().then(data => ({"status_code": result.status, "body": data})))
        .then((data) => {
                this.setState({
                    code: data.status_code,
                    student: data.body,
                });
            },
            (error) => {
                this.setState({
                    code: error.status_code,
                    error: error.body
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
                <Student_info code={this.state.code} student={this.state.student}/>
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
        console.log(this.props.code);
        console.log(this.props.student)
        if(this.props.code === null){
            console.log("is empty")
            return (
                <div>
                    <p>No student searched yet.</p>
                </div>
            );
        }

        else if(this.props.code === 200){
            return (
                <div id='netidholder'>
                    <p>netid: {this.props.student.result._id}</p>
                    <p>gpa: {this.props.student.result.gpa}</p>
                </div>
            );
        }

        else{
            return (
                <p>Unhandled error</p>
            );
        }
    }
}

export { Search };