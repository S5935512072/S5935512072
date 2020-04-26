import React, { Component } from 'react'
import "./project.css"
import {
  Container,
  Form,
  NavLink
} from 'reactstrap';


class CreateBook extends Component {
  render() {
    return (
      
      <div>
        <Container className="comming">
          <Form className="boxStudy">
            <h1 className="textbook1">หนังสือแนะนำ</h1>
            <h5 className="textbook2">ทั่วไป</h5>
            <Form className="bot1">
            หลังบ้าน YouTuber<NavLink href="https://www.naiin.com/product/detail/501859"> ลายระเอียด </NavLink><br /><br />
            เรากินข้าวเหมือนกัน<NavLink href="https://www.naiin.com/product/detail/503452"> ลายระเอียด </NavLink><br /><br />
            ศิลปะการพูดให้เหมือนนั่งในใจคน<NavLink href="https://www.naiin.com/product/detail/497526"> ลายระเอียด </NavLink><br /><br />
            The Positive Shift รีเซ็ตความคิดพิชิตความสุข<NavLink href="https://www.naiin.com/product/detail/502178"> ลายระเอียด </NavLink>
              
            </Form>
            <h5 className="textbook3">เฉพาะ</h5>
            <Form className="bot2">
            หลังบ้าน YouTuber<NavLink href="https://www.naiin.com/product/detail/501859"> ลายระเอียด </NavLink><br /><br />
            เรากินข้าวเหมือนกัน<NavLink href="https://www.naiin.com/product/detail/503452"> ลายระเอียด </NavLink><br /><br />
            ศิลปะการพูดให้เหมือนนั่งในใจคน<NavLink href="https://www.naiin.com/product/detail/497526"> ลายระเอียด </NavLink><br /><br />
            The Positive Shift รีเซ็ตความคิดพิชิตความสุข<NavLink href="https://www.naiin.com/product/detail/502178"> ลายระเอียด </NavLink>
             
              
            </Form>
            
          </Form>        
        </Container>



      </div>
    )
  }
}

export default CreateBook