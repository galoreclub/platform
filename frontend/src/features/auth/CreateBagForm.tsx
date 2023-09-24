import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import { ADD_BAG } from '../../app/graphql/mutations'

export const AddBagForm = () => {
  const [addBag, { data, loading, error }] = useMutation(ADD_BAG)

  if (loading) {
    console.log('loading...')
  }

  if (error) {
    console.log(error.message)
  }

  return (
      <div className="m-auto flex flex-col gap-6 p-6 py-6 md:w-10/12 lg:w-6/12 lg:gap-20 lg:p-10 xl:w-4/12">
        <h1 className="flex items-center justify-center font-helvetica-bold text-2xl uppercase lg:text-4xl">
          Add a New Bag
        </h1>
        <Formik
          initialValues={{
            brand: '',
            size: '',
            condition: '',
            serialNum: '',
            material: '',
            model: '',
            images: [],
          }}
          validationSchema={Yup.object({
            brand: Yup.string().required('This field is required.'),
            model: Yup.string().required('This field is required.'),
            size: Yup.string().required('This field is required.'),
            serialNum: Yup.string().required('This field is required.'),
            material: Yup.string(),
            price: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            try {
              addBag({
                variables: {
                  brand: values.brand,
                  size: values.size,
                  condition: values.condition,
                  serialNum: values.serialNum,
                  material: values.material,
                  model: values.model,
                  images: values.images,
                },
              })
            } catch (error) {
              console.log(error);
            }
            setSubmitting(false)
          }}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col gap-6 self-center">
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="brand"
                placeholder="Brand"
              />
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="size"
                placeholder="Size"
              />
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="condition"
                placeholder="Condition"
              />
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="serialNum"
                placeholder="Serial Number"
              />
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="material"
                placeholder="Material"
              />
              <Field
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base"
                type="text"
                name="model"
                placeholder="Model"
              />
              <input
                className="border-[0.4px] border-solid border-border p-1 text-xs lg:text-base file:bg-black file:px-3 file:uppercase file:text-white file:cursor-pointer"
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={(event) => {
                  const fileArray = Array.from(event.currentTarget.files); // Convert FileList to array
                  setFieldValue('images', fileArray);
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-black px-10 py-2 uppercase text-white lg:w-[180px]"
              >
                Add Bag
              </button>
            </Form>
          )}
        </Formik>
      </div>
  )
}
