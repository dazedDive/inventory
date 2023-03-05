import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPrice,editQty,addArticle } from '../redux/features';
import { RiSave3Fill } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md"
import { Formik, Form, Field } from 'formik';

const Contents = () => {
    const dispatch = useDispatch();
    const [productQuantity, setProductQuantity] = useState(1)
    const [productPrice, setProductPrice] = useState()
    const [addArticle,setAddArticle] = useState(false)
    const datas = useSelector((state)=>state.datas)
    return (
        <div className="container">
            <div className="row">
                <h4 className="text-white bg-info p-3"> React Redux Gestion TP</h4>
                <div className="col-12">
                <span className="d-flex justify-content-start"
                onClick={()=>setAddArticle(!addArticle)}>
                    <MdAddCircle className="text-success fs-4"/>
                    <h5>Add a new article</h5>
                </span>
                    {addArticle &&
                    <Formik
                    initialValues={{
                        designation: '',
                        price: '',
                        quantity: '',
                      }}>
                        <span className="d-flex justify-content-start">
                             <Form onSubmit={(values,e)=>{
                                e.preventDefault();
                                console.log(values);
                                dispatch(addArticle({product:values.designation,
                                                    price:values.price,
                                                    quantity:values.quantity}))}}>
                                <label htmlFor="designation">designation</label>
                                <Field id="designation" name="designation" placeholder="" className="mb-1 mx-1"/>
                                <label htmlFor="quantity">base quantity</label>
                                <Field id="quantity" name="quantity" placeholder="" className="mb-1 mx-1"/>
                                <label htmlFor="price">price in €</label>
                                <Field id="price" name="price" placeholder="" className="mb-1 mx-1"/>
                                <button type="submit" className="btn btn-success m-1"> <RiSave3Fill className="fs-6"/> Save</button>
                            </Form>
                        </span>
                     </Formik>}
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="bg-warning">Ref</th>
                        <th scope="col" className="bg-warning">Designation</th>
                        <th scope="col" className="bg-warning">Quantity</th>
                        <th scope="col" className="bg-warning">Price</th>
                        <th scope="col" className="bg-warning">Edit Price</th>
                        <th scope="col" className="bg-warning">Edit Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map(item=>{return(
                        <tr>
                        <th key={item.id} scope="row">{item.id}</th>
                        <td>{item.product}</td>
                        <td className={`${item.quantity<10 ? 'fw-bold text-danger' : 'text-dark'}`}>{item.quantity}</td>
                        <td>{item.price} €/ttc</td>
                        <td><input
                            onChange={(e)=>setProductPrice(e.target.value)}/>
                            <button type="button" className="btn btn-success mx-2"
                                    onClick={()=>dispatch(editPrice({id:item.id, price:productPrice}))}>
                                <RiSave3Fill className="fs-5"/>
                            </button>
                        </td>
                        <td>
                            <input
                            type='number'
                            onChange={(e)=>setProductQuantity(e.target.value)}/>
                                <button type="button" className="btn btn-success mx-2"
                                onClick={()=>dispatch(editQty({id:item.id, quantity:productQuantity}))}>
                                    <RiSave3Fill className="fs-5"/>
                                </button>
                        </td>
                      </tr>
                    )})}
                </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Contents;