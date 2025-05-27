'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import useTest from '@/hooks/use-test'

const CategoryTestSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('nama tidak boleh kosong')
})

const CategoryTest = () => {
  const { useCategoryTest } = useTest()
  const { useCreateCategoryTest } = useCategoryTest()
  const mutate = useCreateCategoryTest()
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    enableReinitialize: true,
    validationSchema: CategoryTestSchema,
    onSubmit: values => {
        mutate.create(values)
        
    }
  })
  return (
    <section className='w-full h-[90vh] flex justify-center items-center p-6'>
      <div className='w-1/2 rounded-3xl bg-white px-8 py-12'>
        <h3 className='text-2xl font-bold capitalize w-full text-center'>
          Create Category test
        </h3>
        <div className='w-full h-full flex flex-col gap-4 mt-6'>
          <FormikProvider value={formik}>
            <form
              className='flex flex-col gap-4'
              onSubmit={formik.handleSubmit}
            >
              <div className='flex flex-col gap-2 w-full '>
                <label htmlFor='category' className='text-lg font-semibold '>
                  Name
                </label>
                <Input
                  onBlur={formik.handleBlur}
                  placeholder='category name'
                  onChange={e => {
                    formik.setFieldValue('name', e.target.value)
                  }}
                  className={`${
                    formik.errors.name ? 'border-red-500' : 'border-gray-300'
                  } capitalize w-full`}
                />
                {formik.errors.name && (
                  <p className='text-red-500 text-sm'>{formik.errors.name}</p>
                )}
              </div>
              <div className='w-full flex justify-between gap-2  pr-2'>
                <Button
                  className='w-1/2 capitalize text-lg cursor-pointer'
                  variant={'secondary'}
                  type='submit'
                >
                  Save
                </Button>
                <Button
                  className='w-1/2 capitalize text-lg cursor-pointer'
                  variant={'destructive'}
                >
                  cancel
                </Button>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </section>
  )
}

export default CategoryTest
