'use client'
import React from 'react'
import { Form, ErrorMessage, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const UpdateTest = () => {
  const initialValues = {
    title: ''
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required')
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className='w-full px-6 py-8'>
      <div className='bg-white shadow-md rounded-lg max-w-xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-6 text-center capitalize'>
          Update Test
        </h2>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='title' className='block font-medium mb-1'>
                Title
              </label>
              <Input
                id='title'
                name='title'
                placeholder='Enter title'
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMessage
                name='title'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>

            <Button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white'
            >
              Submit
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  )
}

export default UpdateTest
