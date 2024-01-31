import React,{useState,useRef} from 'react'
import featured from './components/featured.png'
import { Field, useFormik } from 'formik'
import './image.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReactQuill from 'react-quill'
import '../node_modules/react-quill/dist/quill.snow.css'


const initialValues ={
    event_name:"",
    event_time:"",
    event_language:"",
    event_duration:"",
    event_date:"",
    event_description:""
}

function Form({onFormSubmit,onCancel}) {
    const {values,handleBlur,handleSubmit,handleChange} = useFormik({
        initialValues:initialValues,
        onSubmit:(values)=>{
            console.log(values)
        }
    });

    const [images,setImages] = useState([]);
    const [dragging,setDragging] = useState(false);
    const fileRef = useRef(null)

    function selectImages(){
        fileRef.current.click()
    }

    function fileSelect(event){
        const files = event.target.files
        if(files.length===0) return;
        for(let i=0;i<files.length;i++){
            if(files[i].type.split('/')[0]!=='image') continue;
            if(!images.some((e)=>e.name===files[i].name )){
                setImages((prevImages)=>[
                    ...prevImages,{
                        name:files[i].name,
                        url: URL.createObjectURL(files[i]),
                    }
                ])
            }
        }
    }

    function deleteImage (index){
        setImages((prevImages)=>prevImages.filter((_,i)=>i!==index))
    }

    function onDragOver(event){
        event.preventDefault();
        setDragging(true);
        event.dataTransfer.dropEffect ="copy";
    }
    function onDragLeave(event){
        event.preventDefault();
        setDragging(false);
    }
    function onDrop(event){
        event.preventDefault();
        const files = event.dataTransfer.files;
        for(let i=0;i<files.length;i++){
            if(files[i].type.split('/')[0]!=='image') continue;
            if(!images.some((e)=>e.name===files[i].name )){
                setImages((prevImages)=>[
                    ...prevImages,{
                        name:files[i].name,
                        url: URL.createObjectURL(files[i]),
                    }
                ])
            }
        }
    }




  return (
    <div>
        <h1 className='text-3xl p-2'>List Your Event</h1>
        <div className='flex border border-solid justify-center items-center mb-4 gap-4 bg-[#f790091b] border-[#F79009] p-[.8rem] rounded-md '>
                  <img className='w-[40px] h-[40px]'  src={featured} alt="" srcset="" />
                  <p className='text-[#F79009]'>Fill up these details or you can always contact us on <b>+91 73259 85456 / +91 73259 85456</b>. We will handle everything for you so you can enjoy.</p>
              </div>
              <form onSubmit={()=>{
                handleSubmit();
                onFormSubmit();
              }}>
                  <div className='w-full'>
                    <h1 className='text-xl'>Event Name</h1>
                    <input type="text" value={values.event_name} onChange={handleChange} onBlur={handleBlur} name='event_name' className='w-full border border-solid border-[#5d5757] mi p-[0.5rem] mb-4 rounded-lg outline-none text-lg' />
                  </div>
                  <div className='w-full'>
                    <h1 className='text-xl'>Event Description</h1>
                  </div>
                    <div>
                    <ReactQuill value={values.event_description} placeholder="Event Description" onChange={handleChange} className='h-[10rem] mb-[5rem]' />

                    </div>
                        <h1 className='text-xl' >Image Cover Photos</h1>
                    <div className="img-card flex lg:flex-row flex-col ">
                    <div className="image-container min-h-[150px]">
                             {
                                images.map((image,idx)=>( 
                                    <div className="image" key={idx}>
                                        <span onClick={()=>deleteImage(idx)}className='delete'>&times;</span>
                                        <img src={image.url} alt={image.name} />
                                    </div>
                                ))
                               }
                        </div>
                        <div className="drag w-full" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}  >
                            <span className='select-image flex-col flex items-center' role='button'  onClick={()=>selectImages()}><CloudUploadIcon fontSize='large' />Click to upload</span>
                            <input type="file" name='file' className='hidden' multiple ref={fileRef}  onChange={fileSelect}  />
                        </div>
                      
                    </div>
                    <div className='flex flex-wrap gap-2 justify-center items-center mt-[2rem]' >
                            
                            <input type="date" name="event_date" id=""  placeholder='Date' className='w-[45%] border border-solid border-gray py-[0.9rem] px-2 shadow-sm rounded-md' onChange={handleChange} value={values.event_date} />
                           
                          <FormControl className='w-[45%]' >
                          <InputLabel id="demo-simple-select-label" >Event Time</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Event Time" 
                                value={values.event_time}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                name='event_time'
                            >
                                <MenuItem value={"5:00 PM"}>5:00 PM</MenuItem>
                                <MenuItem value={"6:00 PM"}>6:00 PM</MenuItem>
                                <MenuItem value={"7:00 PM"}>7:00 PM</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl className='w-[45%]' >
                          <InputLabel id="demo-simple-select-label" >Event Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Event Language" 
                                value={values.event_language}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                name='event_language'
                            >
                                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"Marathi"}>Marathi</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl className='w-[45%]' >
                          <InputLabel id="demo-simple-select-label">Event Duration</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Event Duration" 
                                value={values.event_duration}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                name='event_duration'
                            >
                                <MenuItem value={"1 Hour"}>1 Hour</MenuItem>
                                <MenuItem value={"2 Hours"}>2 Hours</MenuItem>
                                <MenuItem value={"3 Hours"}>3 Hours</MenuItem>
                            </Select>
                          </FormControl>
                    </div>
                    <div className='pt-6 modal-footer' >
                        <button className='btn btn-cancel' onClick={()=>onCancel()}>Cancel</button>
                        <button className='btn btn-submit' >List Event</button>
                    </div>
              </form>
    </div>
  )
}

export default Form