import React, { Component } from 'react';
import { Button, Form, Comment } from 'semantic-ui-react'
import { addCommentAnimal } from '../actions/commentActions'
import { connect } from 'react-redux'


class Comments extends Component {

  state = {
    clicked: false,
    name: "",
    comment: "",
    animal_id: this.props.animal.id,
  }

  clickHandler = () => {
    let click = this.state.clicked
    this.setState({clicked: !click})
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    console.log(this.state);
    this.props.addCommentAnimal(this.state)
    this.setState({
      name: "",
      comment: ""
    })
  }

  showComments = () => {
    let commentArr = this.props.comments.filter(comment => comment.animal_id === this.props.animal.id)
    if (commentArr !== []) {
      return commentArr.map(comment => {
        let regex = /\d+-\d+-\d+/g
        let date = comment.created_at.match(regex)
        return (
          <Comment.Group size='large'>
            <Comment>
              <Comment.Avatar as='a' src={comment.animal_img} className="avatar" />
              <Comment.Content>
                <Comment.Author as='a'>{comment.name}</Comment.Author>
                <Comment.Metadata>
                  <span>{date}</span>
                  </Comment.Metadata>
                  <Comment.Text>{comment.comment}</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        )
        })
      } else {
        return(
          <div>
            <h5>No Comments Yet!</h5>
          </div>
        )
      }
  }

  render(){
    let form = this.state.clicked ? (
      <Form onSubmit={this.submitHandler} className="commentForm">
        <Form.Field>
          <input name="name" placeholder='Name' value={this.state.name} onChange={this.changeHandler} />
        </Form.Field>
        <Form.Field>
          <textarea name="comment" placeholder='Comments' value={this.state.comment} onChange={this.changeHandler} />
        </Form.Field>
        <Button type='submit'>Post</Button>
      </Form>
    ) : (null)


    return(
      <div>
      {this.showComments()}
      <Button onClick={this.clickHandler}>Add a Comment</Button><br/>
      <br/>{form}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}
export default connect(mapStateToProps, {addCommentAnimal})(Comments);
