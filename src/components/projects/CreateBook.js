import React, { Component } from 'react'
import "./project.css"
import {
  Container,
  Form,
  NavLink,
  Table,
  Button
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
           
            <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อหนังสือ</th>
          <th>ประเภท</th>
          <th>ข้อมูล</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>หลังบ้าน YouTuber</td>
          <td >ทั่วไป</td>
          <td><NavLink href="https://www.naiin.com/product/detail/501859"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>เรากินข้าวเหมือนกัน</td>
          <td>ทั่วไป</td>
          <td><NavLink href="https://www.naiin.com/product/detail/503452"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>ศิลปะการพูดให้เหมือนนั่งในใจคน</td>
          <td>ทั่วไป</td>
          <td><NavLink href="https://www.naiin.com/product/detail/497526"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>The Positive Shift รีเซ็ตความคิดพิชิตความสุข</td>
          <td>ทั่วไป</td>
          <td><NavLink href="https://www.naiin.com/product/detail/502178"> ลายระเอียด </NavLink></td>
        </tr>
      </tbody>
    </Table>  
    
            </Form>
            <h5 className="textbook3">วรรณกรรม</h5>
            <Form className="bot2">
            <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อหนังสือ</th>
          <th>ประเภท</th>
          <th>ข้อมูล</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>เมื่อฟ้ารอพบจันทร์</td>
          <td >วรรณกรรม</td>
          <td><NavLink href="https://www.naiin.com/product/detail/490805"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ด้วยเลือดและชีวิต</td>
          <td>วรรณกรรม</td>
          <td><NavLink href="https://www.naiin.com/product/detail/492073"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>เกาะแห่งเวลาที่เสียไป</td>
          <td>วรรณกรรม</td>
          <td><NavLink href="https://www.naiin.com/product/detail/499547"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>มุมมืดและเรื่องอื่นๆ</td>
          <td>วรรณกรรม</td>
          <td><NavLink href="https://www.naiin.com/product/detail/501372"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>บางความรู้สึกอาจคงอยู่ตลอดไป หรือไม่ก็สูญหายในพริบตา</td>
          <td>วรรณกรรม</td>
          <td><NavLink href="https://www.naiin.com/product/detail/475511"> ลายระเอียด </NavLink></td>
        </tr>
      </tbody>
    </Table>
             
   
            </Form>
            
          </Form>  
          <div className="center">
            <Button href="/book1"  className="btn orange lighten-1 z-depth-0">หน้าต่อไป</Button>   
          </div>
             
        </Container>

        
      </div>
     
    )
  }
}

export default CreateBook