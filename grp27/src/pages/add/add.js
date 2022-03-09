import "./add.css"
import React, {useContext, useState} from "react";
import axios from 'axios';
import { Context } from "../../context/Context";

export default function Add() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategories] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleAdd = async (e)=>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
            categories,
        }

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {
                
            }
            try {
                const res = await axios.post("/posts", newPost);
                window.location.replace("/post/"+res.data._id);
            } catch (err) {
                
            }
        }
        
    };


    return (
        <div className="add">
            {file && (
                <img className="addImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="addForm" onSubmit={handleAdd}>
                <div className="addFormGroup">
                    <label className="addTitleText">
                    Choose Blog Image : <input name="image" type="file" className="addInputImg" onChange={(e)=>setFile(e.target.files[0])}></input>
                    </label>
                    <label for="category">Category : </label>
                        <select name="category" onChange={(e)=>setCategories(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Music">Music</option>
                        <option value="Games">Games</option>
                        <option value="Sports">Sports</option>
                        <option value="News">News</option>
                        <option value="Others">Others</option>
                        </select >
                    <p></p>
                    <label className="addTitleText">Add your Title : <input name="title" type="text" placeholder="Title" className="addInput" onChange={(e)=>setTitle(e.target.value)} ></input>
                    </label>
                </div>
                <div className="addFormGroup">
                    <textarea type="text" name="para" placeholder="Begin Your Story..." className="addText" onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>
                <button className="addSubmit" type="submit"> Publish </button>
            </form>
        </div>
    )
}
