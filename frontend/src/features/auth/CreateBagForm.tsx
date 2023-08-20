import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { ADD_BAG } from '../../app/graphql/mutations';

export const AddBagForm = () => {
  const [addBag, { data, loading, error }] = useMutation(ADD_BAG);

  if (loading) {
    console.log('loading...');
  }

  if (error) {
    console.log(error.message);
  }

  return (
    <div className='duration-3000 fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-screen items-center bg-subdued/40 transition-all'>
      <div className="m-auto flex flex-col items-center justify-center gap-4 bg-white p-6 lg:w-6/12 lg:p-10 xl:w-4/12">
        <h1 className="font-helvetica-bold text-base uppercase">Add a New Bag</h1>
        <Formik
          initialValues={{
            bag_id: '',
            brand: '',
            model: '',
            size: '',
            serialNum: '',
            material: '',
            price: '',
          }}
          validationSchema={Yup.object({
            bag_id: Yup.string().required('This field is required.'),
            brand: Yup.string().required('This field is required.'),
            model: Yup.string().required('This field is required.'),
            size: Yup.string().required('This field is required.'),
            serialNum: Yup.number().required('This field is required.'),
            material: Yup.string(),
            price: Yup.number(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            addBag({
              variables: {
                bag_id: values.bag_id,
                brand: values.brand,
                model: values.model,
                size: values.size,
                serialNum: values.serialNum,
                material: values.material,
                price: values.price,
              },
            });
            setSubmitting(false);
          }}
        >
          <Form className="mx-4 flex w-full flex-col gap-1 lg:px-10">
            <Field
              className="border-[0.4px] border-solid border-border p-1 text-xs"
              type="text"
              name="bag_id"
              placeholder="Bag ID"
            />
            <ErrorMessage
              className="text-xs text-error md:text-sm"
              name="bag_id"
              component="div"
            />

            {/* Repeat similar pattern for other fields */}
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="text" name="brand" placeholder="Brand" />
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="text" name="model" placeholder="Model" />
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="text" name="size" placeholder="Size" />
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="number" name="serialNum" placeholder="Serial Number" />
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="text" name="material" placeholder="Material" />
            <Field className="border-[0.4px] border-solid border-border p-1 text-xs" type="number" name="price" placeholder="Price" />

            <button
              type="submit"
              className="mx-auto mt-2 flex items-center justify-center bg-black px-10 py-2 text-xs uppercase text-white"
            >
              Add Bag
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
