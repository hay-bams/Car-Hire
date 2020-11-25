import { useState } from 'react'


// interface useFormProps {
//   form: any,
//   setValue: 
// }

// type useFormData<TState> = [
//   form: TState,
// ]

export const useForm = <TState=any>() => {
 const [form, setForm] = useState<TState | {}>()
 const setValue = <TValue>(key: string, value: TValue) => {
   setForm({
     ...form,
     [key]: value
   }) 
 }

  return { form, setValue }
}