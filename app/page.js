"use client"
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setDesc("")
    setTitle("")
  }
  const deleteHandler = (i) => {
    const temp = [...mainTask]
    temp.splice(i, 1)
    setMainTask(temp)
  }
  let renderTask = <h4>No task available</h4>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((i,j) => {
      return (
        <li key={j} className="flex item-center justify-between mb-3  ">
        
          <p className="text-xl font-bold px-2">{i.title}</p>
          <p className="text-lg font-bold px-2">{i.desc}</p>
          
          <button onClick={() => {
            deleteHandler(j)
          } } className="bg-black px-4 py-2  text-white  text-lg rounded">
            delete
          </button>
          </li>
      )
    })
  }
  return (
    <>
      <h1 className="bg-black font-bold text-white p-10 mb-3 text-5xl text-center">
        My Todo-list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          id="title"
          type="text"
          className="text-2xl border-zinc-800 border-4 m-9 px-4 py-2"
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          />
        
        <input
          id="desc"
          type="text"
          className="text-2xl border-zinc-800 border-4 m-9 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(f) => {
            setDesc(f.target.value)
          }}
        />
       
        <button className="bg-black px-4 py-3 m-5 text-white  text-2xl rounded">
          Add Task
        </button>
      </form>
      <hr />
      <div className=" bg-gray-100 p-5 justify-between">
          {renderTask}
        </div>
       

    </>
  )
}
export default page