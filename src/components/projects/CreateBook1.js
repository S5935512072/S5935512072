import React, { Component } from 'react'
import "./project.css"
import {
  Container,
  Form,
  NavLink,
  Table,
  Button
} from 'reactstrap';


class CreateBook1 extends Component {
  render() {
    return (
      
      <div>
        <Container className="comming">
          <Form className="boxStudy">
            <h1 className="textbook1">หนังสือแนะนำ</h1>
            <h5 className="textbook2">จิตวิทยา</h5>
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
          <td>วิธีเอาตัวรอดจากที่ทำงานที่สุดแสนจะน่าเบื่อหน่าย</td>
          <td >จิตวิทยา</td>
          <td><NavLink href="https://www.naiin.com/product/detail/202008"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>มองมุมกลับ ลับคมความคิด [Ignore Everybody]</td>
          <td>จิตวิทยา</td>
          <td><NavLink href="https://www.naiin.com/product/detail/16700"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>พูดให้คนเข้าใจง่ายแบบนี้เอง</td>
          <td>จิตวิทยา</td>
          <td><NavLink href="https://www.naiin.com/product/detail/244742"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>กลยุทธ์ (ก่อน) โน้มน้าวใจ PRE - SUASION</td>
          <td>จิตวิทยา</td>
          <td><NavLink href="https://www.naiin.com/product/detail/495372"> ลายระเอียด </NavLink></td>
        </tr>
      </tbody>
    </Table>  
    
            </Form>
            <h5 className="textbook3">การพัฒนาตัวเอง</h5>
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
          <td>ความสำเร็จไม่ได้เสร็จในวันเดียว</td>
          <td >การพัฒนาตัวเอง</td>
          <td><NavLink href="https://www.naiin.com/product/detail/234966"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>พลังวิเศษของคนธรรมดา BIG MAGIC</td>
          <td>การพัฒนาตัวเอง</td>
          <td><NavLink href="https://www.naiin.com/product/detail/205889"> ลายระเอียด </NavLink></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>ยุ่งจริง! หรือแค่คิดไปเอง</td>
          <td>การพัฒนาตัวเอง</td>
          <td><NavLink href="https://www.naiin.com/product/detail/489995"> ลายระเอียด </NavLink></td>
        </tr>
       
      </tbody>
    </Table>
             
   
            </Form>
            
          </Form>  
          <div className="center">
          <Button href="/book"  className="btn orange lighten-1 z-depth-0">ย้อนกลับ</Button>  
          </div>
             
        </Container>

        
      </div>
     
    )
  }
}

export default CreateBook1