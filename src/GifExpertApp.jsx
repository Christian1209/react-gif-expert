
import React from 'react';
import {useState} from 'react';
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Piece']);
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory))return;
    //console.log(newCategory)
    //en React no usaremos tanto push porque muta un objeto, en react tratamos de no mutar.
    setCategories([newCategory,...categories]);
  }



  return (
    <>
      {/*titulo*/ }
        <h1>GifExpertApp</h1>


        <AddCategory
        
          onNewCategory = {onAddCategory}
          //setCategories = {setCategories} 

        />


      {/*Listado de gif*/}

      <ol>
        {
          categories.map(category => (
            <GifGrid 
            key = {category}  
            category = {category}
            />
          ))
        }
      </ol>
      {/*Gif item*/}
    </>
 )
}
