import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/');
    }
    render(){
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="boxSignin">
                    <h5 >Topic (หัวข้อ)</h5>
                    <div className="input-field">
                        <label htmlFor="title">หัวข้อ</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">เนื้อหา</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">บันทึก</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)