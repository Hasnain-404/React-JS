import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  async function handelData(data) {

    await new Promise(res => setTimeout(res, 3000)
    )
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handelData)}>
        <div>
          <label>First Name : </label>
          <input {...register("first name", { required: true, minLength: 4 })} type="text" />
        </div>
        <br />
        <div>
          <label>Middle Name : </label>
          <input {...register("middel name")} type="text" />
        </div>
        <br />
        <div>
          <label>Last Name : </label>
          <input {...register("last name")} type="text" />
        </div>

        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} />
      </form>
    </div>
  )
}

export default App