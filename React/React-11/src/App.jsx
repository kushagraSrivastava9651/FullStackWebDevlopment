import { useForm } from "react-hook-form"

import './App.css'

function App() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();



   async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve, 5000))
 console.log(data);
    }

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label >first name</label>
      <input className={errors.firstname ? 'input-error' : ''} type="text" {...register("firstname",{required: true,
        minLength:{value:3,message:'min length 3'},
        maxLength: 20 })}/>

        {errors.firstname && <p className="err-message">{errors.firstname.message}</p>}
    </div>
    <div>
      <label >last name</label>
      <input className={errors.firstname ? 'input-error' : ''} type="text" {...register("lastname",{ pattern: {
  value:      /^[A-Za-z]+$/i,
  message:'under rule'
 } })} />

         {errors.lastname && <p className="err-message">{errors.lastname.message}</p>}

    </div>
    <input type="submit" disabled={isSubmitting} value={isSubmitting? 'submitting':'submit'}/>
  </form>
  )
}

export default App
