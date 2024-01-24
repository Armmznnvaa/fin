import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
const Add = () => {
    const [products,setProducts]=useState([]);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        const data= async()=>{
            const response = await axios.get("http://localhost:3001/api/fas")
            const allProducts=response.data
            const filteredProducts=allProducts.filter((item)=>item.name.toLowerCase().trim().includes(search.toLowerCase().trim()))
            setProducts(filteredProducts)
            
        }
        data()
    },[search])

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      img: '',
      desc:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      desc: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
     
    }),
    onSubmit: async(values) => {
        console.log("values",values)
        formik.resetForm("");
        const createFas={
            name:values.name,
            price:values.price,
            img:values.img,
            desc:values.desc
           
        }
        const res= await axios.post("http://localhost:3001/api/fas",createFas)
        return res
     
    },

  });
  const  deleteItem = async(item)=>{
    axios.delete(`http://localhost:3001/api/fas/${item._id}`)
    setProducts(products.filter((x)=>x._id !== item._id))
   
  }
  return (
  <>
  <div>
  <form onSubmit={formik.handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name ? (
      <div>{formik.errors.name}</div>
    ) : null}

    <label htmlFor="price">Price:</label>
    <input
      id="price"
      name="price"
      type="number"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.price}
    />
    {formik.touched.price && formik.errors.price ? (
      <div>{formik.errors.price}</div>
    ) : null}

    <label htmlFor="img">Images</label>
    <input
      id="img"
      name="img"
      type="url"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.img}
    />
    {formik.touched.img && formik.errors.img ? (
      <div>{formik.errors.img}</div>
    ) : null}

     <label htmlFor="desc">Description:</label>
    <input
      id="desc"
      name="desc"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.desc}
    />
    {formik.touched.desc && formik.errors.desc ? (
      <div>{formik.errors.desc}</div>
    ) : null}


    <button type="submit">Submit</button>
  </form>
  </div>
  <div>
  <TextField onChange={(e)=>{
    setSearch(e.target.value)
  }} id="outlined-basic" label="Outlined" variant="outlined" />
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item,idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="left">{item.desc}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">
              <button onClick={()=>{
                deleteItem(item)
              }}>
                delete
              </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  </>
  );
};
export default Add